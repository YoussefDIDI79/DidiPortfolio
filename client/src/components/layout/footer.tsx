import { useLanguage } from "@/components/ui/language-provider";
import { getTranslation } from "@/lib/i18n";

export function Footer() {
  const { language } = useLanguage();
  
  const t = (key: string) => getTranslation(key as any, language);

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground" data-testid="text-copyright">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
