"use client";
import { useLang } from "@/lib/useLang";
import { t } from "@/lib/i18n";

export default function MediaAdmin() {
  const { lang } = useLang();
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{t("media.title", lang)}</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <p className="text-gray-500">{t("media.coming", lang)}</p>
        <p className="text-sm text-gray-400 mt-2">{t("media.hint", lang)}</p>
      </div>
    </div>
  );
}
