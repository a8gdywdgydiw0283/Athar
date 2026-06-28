import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { routing, getDirection, type Locale } from "@/i18n/routing";
import { fontVariables } from "@/lib/fonts";
import ScrollRestoration from "@/components/ui/ScrollRestoration";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const direction = getDirection(locale as Locale);

  return (
    <html
      lang={locale}
      dir={direction}
      data-locale={locale}
      className={fontVariables}
    >
      <body className="font-body">
        <NextIntlClientProvider messages={messages}>
          <ScrollRestoration />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
