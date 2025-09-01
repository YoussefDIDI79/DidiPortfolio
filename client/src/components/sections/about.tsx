import { useLanguage } from "@/components/ui/language-provider";
import { getTranslation } from "@/lib/i18n";
import { MapPin, Globe, Coffee } from "lucide-react";

export function About() {
  const { language } = useLanguage();
  
  const t = (key: string) => getTranslation(key as any, language);

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-about-title">
            {t("about.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-paragraph-1">
              {t("about.paragraph1")}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-paragraph-2">
              {t("about.paragraph2")}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="h-4 w-4" />
                <span data-testid="text-location">{t("about.location")}</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Globe className="h-4 w-4" />
                <span data-testid="text-availability">{t("about.availability")}</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Coffee className="h-4 w-4" />
                <span data-testid="text-hobby">{t("about.hobby")}</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern development workspace"
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="img-workspace"
            />

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <div className="text-3xl font-bold text-primary mb-2" data-testid="text-projects-count">50+</div>
                <div className="text-sm text-muted-foreground" data-testid="text-projects-label">
                  {t("about.projectsCompleted")}
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <div className="text-3xl font-bold text-primary mb-2" data-testid="text-experience-count">3+</div>
                <div className="text-sm text-muted-foreground" data-testid="text-experience-label">
                  {t("about.yearsExperience")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
