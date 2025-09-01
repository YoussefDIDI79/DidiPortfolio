import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/ui/language-provider";
import { getTranslation } from "@/lib/i18n";
import { ChevronDown } from "lucide-react";
import profileImage from "@assets/generated_images/Professional_headshot_portrait_6bfa5e4f.png";

export function Hero() {
  const { language } = useLanguage();
  
  const t = (key: string) => getTranslation(key as any, language);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <img
            src={profileImage}
            alt="Youssef Didi - Professional headshot"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-8 border-4 border-white/20 shadow-2xl object-cover"
            data-testid="img-hero-avatar"
          />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-name">
            {t("hero.name")}
          </h1>

          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto" data-testid="text-hero-title">
            {t("hero.title")}
          </p>

          <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-description">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              data-testid="button-get-in-touch"
            >
              {t("hero.getInTouch")}
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              data-testid="button-view-work"
            >
              {t("hero.viewWork")}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
