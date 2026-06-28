"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export const SCROLL_POSITION_KEY = "athar-scroll-y";

export default function LanguageToggle() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === "ar" ? "en" : "ar";

  function handleToggle() {
    sessionStorage.setItem(SCROLL_POSITION_KEY, String(window.scrollY));
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <button
      onClick={handleToggle}
      className="text-sm text-athar-muted hover:text-athar-slash transition-colors duration-200 font-medium tracking-wide"
      aria-label={`Switch to ${nextLocale === "ar" ? "Arabic" : "English"}`}
    >
      {t("lang_toggle")}
    </button>
  );
}
