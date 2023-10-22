import { genMessage } from "../helper";
import elementLocale from "element-plus/es/locale/lang/zh-cn";
elementLocale.name = "zh_CN";
const modules = import.meta.glob("./zh-CN/**/*.ts", { eager: true });
export default {
  message: {
    ...genMessage(modules as Recordable<Recordable>, "zh-CN"),
    elementLocale,
  },
  dateLocaleName: "zh_CN",
};
