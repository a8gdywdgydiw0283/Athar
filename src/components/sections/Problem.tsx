"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SlashDivider from "@/components/ui/SlashDivider";

export default function Problem() {
  const t = useTranslations("problem");
  const pains = t.raw("pains") as Array<{
    icon: string;
    title: string;
    body: string;
  }>;

  return (
    <>
      <SlashDivider />
      <section id="problem" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">{t("eyebrow")}</span>
          <h2 className="section-title max-w-3xl mb-4">{t("headline")}</h2>
          <p className="text-athar-muted text-lg max-w-2xl mb-16">{t("subline")}</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pains.map((item, i) => (
              <motion.div
                key={i}
                className="bg-athar-surface border border-athar-border p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="text-2xl mb-4 block" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-athar-muted leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>

          <blockquote className="border-s-2 border-athar-slash ps-6 max-w-3xl">
            <p className="text-athar-white leading-relaxed italic">
              {t("transition")}
            </p>
          </blockquote>
        </div>
      </section>
    </>
  );
}
