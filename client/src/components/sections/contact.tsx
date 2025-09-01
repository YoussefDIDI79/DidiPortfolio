import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/components/ui/language-provider";
import { getTranslation } from "@/lib/i18n";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, MapPin, Linkedin, Github, MessageSquare, Download } from "lucide-react";

export function Contact() {
  const { language } = useLanguage();
  const { toast } = useToast();
  
  const t = (key: string) => getTranslation(key as any, language);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    isNotRobot: false,
  });

  const contactMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/contact", {
        name: data.name,
        email: data.email,
        message: data.message,
        language,
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t("contact.success"),
        description: "",
      });
      setFormData({ name: "", email: "", message: "", isNotRobot: false });
    },
    onError: () => {
      toast({
        title: t("contact.error"),
        description: "",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.isNotRobot) {
      toast({
        title: t("contact.error"),
        description: "Please confirm you're not a robot",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleCVDownload = () => {
    window.open('/api/download/cv', '_blank');
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/youssef-didi",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/youssef-didi",
    },
    {
      name: "WhatsApp",
      icon: MessageSquare,
      href: "https://wa.me/212123456789",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            {t("contact.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.name")}
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  data-testid="input-contact-name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.email")}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  data-testid="input-contact-email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="resize-none"
                  data-testid="input-contact-message"
                />
              </div>

              {/* Simple Spam Check */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="notRobot"
                  checked={formData.isNotRobot}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, isNotRobot: checked === true })
                  }
                  data-testid="checkbox-not-robot"
                />
                <label htmlFor="notRobot" className="text-sm text-muted-foreground">
                  {t("contact.notRobot")}
                </label>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={contactMutation.isPending}
                data-testid="button-contact-submit"
              >
                {contactMutation.isPending ? "Sending..." : t("contact.send")}
              </Button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6" data-testid="text-contact-connect">
                {t("contact.connect")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground" data-testid="text-contact-email">
                      youssef.didi@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{t("contact.location")}</p>
                    <p className="text-muted-foreground" data-testid="text-contact-location-value">
                      {t("contact.locationValue")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4" data-testid="text-social-links">
                {t("contact.socialLinks")}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-all duration-300 hover:scale-105"
                    data-testid={`link-social-${link.name.toLowerCase()}`}
                  >
                    <link.icon className="h-6 w-6 text-primary" />
                    <span className="font-medium">{link.name}</span>
                  </a>
                ))}

                <button
                  onClick={handleCVDownload}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-all duration-300 hover:scale-105"
                  data-testid="button-cv-download"
                >
                  <Download className="h-6 w-6 text-primary" />
                  <span className="font-medium">{t("contact.cv")}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
