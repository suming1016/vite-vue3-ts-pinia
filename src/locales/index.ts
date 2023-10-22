import { createI18n } from "vue-i18n";
import type { I18nOptions } from "vue-i18n";
import type { LocaleType } from "@/types/config";

import { setHtmlPageLang, setLoadLocalePool } from "./helper";
import { localeSetting } from "@/settings/localeSetting";

const language = (navigator.language || "en").toLocaleLowerCase(); // 这是获取浏览器的语言
const lang = language.startsWith("zh") ? "zh_CN" : language;

console.log("浏览器的语言", navigator.language, language);

async function createI18nOptions(): Promise<I18nOptions> {
  const locale = lang as LocaleType;
  const defaultLocal = await import(`./lang/${locale}.ts`);
  const message = defaultLocal.default?.message ?? {};

  setHtmlPageLang(locale);
  setLoadLocalePool((loadLocalePool) => {
    loadLocalePool.push(locale);
  });

  return {
    legacy: false,
    locale,
    fallbackLocale: localeSetting.fallback,
    messages: {
      [locale]: message,
    },
    availableLocales: localeSetting.availableLocales,
    sync: true, //If you don’t want to inherit locale from global scope, you need to set sync of i18n component option to false.
    silentTranslationWarn: true, // true - warning off
    missingWarn: false,
    silentFallbackWarn: true,
    // 关闭未使用函数组件显示HTML片段警告(警告为你的v-html需要使用函数组件)
    warnHtmlMessage: false,
    // 开启全局注入(template模板可以使用$t)
    globalInjection: true,
  };
}
const options = await createI18nOptions();
export const i18n: ReturnType<typeof createI18n> = createI18n(options);
