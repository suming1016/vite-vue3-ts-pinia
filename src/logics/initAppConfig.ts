import { useLocaleStore } from "@/store/locale";
export function initAppConfigStore() {
  const localeStore = useLocaleStore();
  localeStore.initLocale();
}
