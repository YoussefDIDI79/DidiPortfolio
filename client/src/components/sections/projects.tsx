import { useLanguage } from "@/components/ui/language-provider";
import { getTranslation } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import ecommerceImage from "@assets/generated_images/E-commerce_analytics_dashboard_f80b55e8.png";
import securityImage from "@assets/generated_images/Network_security_monitor_interface_8b51d29f.png";
import visualizationImage from "@assets/generated_images/Data_visualization_platform_df9e9e06.png";
import taskAppImage from "@assets/generated_images/Task_management_mobile_app_f163fe08.png";
import blockchainImage from "@assets/generated_images/Blockchain_voting_system_5f67a880.png";
import iotImage from "@assets/generated_images/IoT_smart_home_system_721f394b.png";

export function Projects() {
  const { language } = useLanguage();
  
  const t = (key: string) => getTranslation(key as any, language);

  const projects = [
    {
      titleKey: "projects.ecommerce",
      descKey: "projects.ecommerce.desc",
      image: ecommerceImage,
      skills: ["React", "D3.js", "Node.js"],
      github: "#",
      demo: "#",
    },
    {
      titleKey: "projects.security",
      descKey: "projects.security.desc",
      image: securityImage,
      skills: ["Python", "TensorFlow", "Flask"],
      github: "#",
      demo: "#",
    },
    {
      titleKey: "projects.visualization",
      descKey: "projects.visualization.desc",
      image: visualizationImage,
      skills: ["Vue.js", "Chart.js", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      titleKey: "projects.taskApp",
      descKey: "projects.taskApp.desc",
      image: taskAppImage,
      skills: ["React Native", "Firebase", "Redux"],
      github: "#",
      demo: "#",
    },
    {
      titleKey: "projects.blockchain",
      descKey: "projects.blockchain.desc",
      image: blockchainImage,
      skills: ["Solidity", "Web3.js", "Ethereum"],
      github: "#",
      demo: "#",
    },
    {
      titleKey: "projects.iot",
      descKey: "projects.iot.desc",
      image: iotImage,
      skills: ["Arduino", "MQTT", "Flutter"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-projects-title">
            {t("projects.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.titleKey}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              data-testid={`card-project-${index}`}
            >
              <img
                src={project.image}
                alt={t(project.titleKey)}
                className="w-full h-48 object-cover"
                data-testid={`img-project-${index}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3" data-testid={`text-project-title-${index}`}>
                  {t(project.titleKey)}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`text-project-desc-${index}`}>
                  {t(project.descKey)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                      data-testid={`tag-project-skill-${skill.toLowerCase()}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    asChild
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    data-testid={`button-project-code-${index}`}
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      {t("projects.code")}
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1"
                    data-testid={`button-project-demo-${index}`}
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t("projects.demo")}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
