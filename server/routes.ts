import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, id: contact.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all contacts (admin endpoint)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  // Serve static files (CV and certificates)
  app.get("/api/download/cv", (req, res) => {
    const filePath = path.join(process.cwd(), "client", "public", "cv.pdf");
    res.download(filePath, "Youssef_Didi_CV.pdf", (err) => {
      if (err) {
        res.status(404).json({ message: "File not found" });
      }
    });
  });

  app.get("/api/download/certificate/:name", (req, res) => {
    const { name } = req.params;
    const allowedFiles = ["ceh", "aws", "ccna", "google-analytics"];
    
    if (!allowedFiles.includes(name)) {
      return res.status(404).json({ message: "Certificate not found" });
    }

    const filePath = path.join(process.cwd(), "client", "public", "certificates", `${name}.pdf`);
    res.download(filePath, `${name}_certificate.pdf`, (err) => {
      if (err) {
        res.status(404).json({ message: "Certificate not found" });
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
