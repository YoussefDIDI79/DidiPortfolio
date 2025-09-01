import { useLanguage } from "@/components/ui/language-provider";
import { getTranslation } from "@/lib/i18n";
import { GraduationCap, University, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Education() {
  const { language } = useLanguage();
  
  const t = (key: string) => getTranslation(key as any, language);

  const handleCertificateDownload = (certificateName: string) => {
    window.open(`/api/download/certificate/${certificateName}`, '_blank');
  };

  const certificates = [
    { key: "education.ceh", file: "ceh", organization: "EC-Council", year: "2023" },
    { key: "education.aws", file: "aws", organization: "Amazon Web Services", year: "2023" },
    { key: "education.ccna", file: "ccna", organization: "Cisco Systems", year: "2022" },
    { key: "education.google", file: "google-analytics", organization: "Google", year: "2022" },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-education-title">
            {t("education.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6" data-testid="text-education-section">
              {t("education.education")}
            </h3>

            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-semibold mb-2" data-testid="text-masters-degree">
                    {t("education.masters")}
                  </h4>
                  <p className="text-primary font-medium mb-2" data-testid="text-masters-school">
                    {t("education.masters.school")}
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">2021 - 2023</p>
                  <p className="text-muted-foreground" data-testid="text-masters-desc">
                    {t("education.masters.desc")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <University className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-semibold mb-2" data-testid="text-bachelors-degree">
                    {t("education.bachelors")}
                  </h4>
                  <p className="text-primary font-medium mb-2" data-testid="text-bachelors-school">
                    {t("education.bachelors.school")}
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">2018 - 2021</p>
                  <p className="text-muted-foreground" data-testid="text-bachelors-desc">
                    {t("education.bachelors.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6" data-testid="text-certifications-section">
              {t("education.certifications")}
            </h3>

            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <div
                  key={cert.key}
                  className="bg-card p-6 rounded-xl border border-border hover:shadow-md transition-shadow"
                  data-testid={`card-certificate-${index}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold mb-1" data-testid={`text-certificate-title-${index}`}>
                        {t(cert.key)}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {cert.organization} • {cert.year}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCertificateDownload(cert.file)}
                      className="text-primary hover:text-primary/80 transition-colors"
                      data-testid={`button-download-certificate-${index}`}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
