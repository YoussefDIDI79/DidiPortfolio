import { useLanguage } from "@/components/ui/language-provider";
import { getTranslation } from "@/lib/i18n";

export function Experience() {
  const { language } = useLanguage();
  
  const t = (key: string) => getTranslation(key as any, language);

  const experiences = [
    {
      titleKey: "experience.analyst",
      companyKey: "experience.analyst.company",
      descKey: "experience.analyst.desc",
      metricKey: "experience.analyst.metric",
      period: "2023 - " + t("common.present"),
      metric: "40%",
      skills: ["Penetration Testing", "SIEM", "Incident Response", "Risk Assessment"],
    },
    {
      titleKey: "experience.developer",
      companyKey: "experience.developer.company",
      descKey: "experience.developer.desc",
      metricKey: "experience.developer.metric",
      period: "2022 - 2023",
      metric: "60%",
      skills: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      titleKey: "experience.intern",
      companyKey: "experience.intern.company",
      descKey: "experience.intern.desc",
      metricKey: "experience.intern.metric",
      period: "2021 - 2022",
      metric: "25%",
      skills: ["Cisco", "VLAN", "OSPF", "Monitoring"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-experience-title">
            {t("experience.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.titleKey}
              className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow"
              data-testid={`card-experience-${index}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-semibold" data-testid={`text-experience-title-${index}`}>
                      {t(exp.titleKey)}
                    </h3>
                    <span className="text-muted-foreground font-medium" data-testid={`text-experience-period-${index}`}>
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-4" data-testid={`text-experience-company-${index}`}>
                    {t(exp.companyKey)}
                  </p>
                  <p className="text-muted-foreground mb-4" data-testid={`text-experience-desc-${index}`}>
                    {t(exp.descKey)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        data-testid={`tag-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-center lg:text-right">
                  <div className="text-2xl font-bold text-primary" data-testid={`text-experience-metric-${index}`}>
                    {exp.metric}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid={`text-experience-metric-label-${index}`}>
                    {t(exp.metricKey)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
