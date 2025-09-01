import { useLanguage } from "@/components/ui/language-provider";
import { getTranslation } from "@/lib/i18n";
import { Network, Code, TrendingUp, Shield } from "lucide-react";

export function Skills() {
  const { language } = useLanguage();
  
  const t = (key: string) => getTranslation(key as any, language);

  const skills = [
    {
      icon: Network,
      titleKey: "skills.networking",
      descKey: "skills.networking.desc",
    },
    {
      icon: Code,
      titleKey: "skills.programming",
      descKey: "skills.programming.desc",
    },
    {
      icon: TrendingUp,
      titleKey: "skills.dataAnalysis",
      descKey: "skills.dataAnalysis.desc",
    },
    {
      icon: Shield,
      titleKey: "skills.cybersecurity",
      descKey: "skills.cybersecurity.desc",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-skills-title">
            {t("skills.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.titleKey}
              className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center group"
              data-testid={`card-skill-${index}`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4" data-testid={`text-skill-title-${index}`}>
                {t(skill.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid={`text-skill-desc-${index}`}>
                {t(skill.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
