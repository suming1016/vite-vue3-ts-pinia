import { genMessage } from "../helper";
import elementLocale from "element-plus/es/locale/lang/en";
elementLocale.name = "en";
const modules = import.meta.glob("./en/**/*.ts", { eager: true });
export default {
  message: {
    ...genMessage(modules as Recordable<Recordable>, "en"),
    elementLocale,
  },
  dateLocale: null,
  dateLocaleName: "en",
};
