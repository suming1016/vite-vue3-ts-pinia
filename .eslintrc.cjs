module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["vue", "@typescript-eslint", "simple-import-sort"],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
    ecmaFeatures: {
      jsx: true,
    },
    project: "tsconfig.json",
    createDefaultProgram: false,
    extraFileExtensions: [".vue"],
  },
  /**
   * 'off' 或 0 - 关闭规则
   * 'warn' 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   * 'error' 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    //关闭组件命名规则
    "vue/multi-word-component-names": "off",
    "no-console": "off",
    "no-debugger": "off",
    "max-len": ["error", { code: 140, tabWidth: 2 }],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/camelcase": "off",
    "no-plusplus": "off",
    "global-require": "off",
    "consistent-return": "off",
    "no-param-reassign": "error",
    "implicit-arrow-linebreak": "error",
    "prefer-destructuring": "off",
    "operator-linebreak": "off",
    "no-nested-ternary": "off",
    "class-methods-use-this": "off",
    "array-callback-return": "off",
    "lines-between-class-members": ["error", "always"],
    "no-inferrable-types": "off",
    "no-restricted-syntax": "off",
    "func-names": "off",
    "prefer-promise-reject-errors": "off",
    "no-restricted-globals": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-var-requires": 0,
    "no-lonely-if": "off",
    "no-case-declarations": "off",
    "no-underscore-dangle": "off",
    "default-case": "error",
    "linebreak-style": ["off", "windows"],
    "object-curly-newline": "off",
    // 要求箭头函数的参数使用圆括号
    "arrow-parens": 2,
    "arrow-spacing": [
      2,
      {
        before: true,
        after: true,
      },
    ],
    "no-unused-expressions": ["error", { allowShortCircuit: true, allowTernary: true }],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          [`^vue$`, `^vue-router$`, `^ant-design-vue$`, `^echarts$`], // 你可以根据需要添加更多的内置模块
          [`.*\\.vue$`], // .vue 文件
          [`.*/assets/.*`, `^@/assets$`],
          [`.*/config/.*`, `^@/config$`],
          [`.*/hooks/.*`, `^@/hooks$`],
          [`.*/plugins/.*`, `^@/plugins$`],
          [`.*/router/.*`, `^@/router$`],
          [`^@/services$`, `^@/services/.*`],
          [`.*/store/.*`, `^@/store$`],
          [`.*/utils/.*`, `^@/utils$`],
          [`^`],
          [`^type `],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    /**
     * 【强制】关键字前后有一个空格
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
     */
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],

    /**
     * 禁止出现空函数，普通函数（非 async/await/generator）、箭头函数、类上的方法除外
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
     */
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": [
      "error",
      {
        allow: ["arrowFunctions", "functions", "methods"],
      },
    ],

    /**
     * 优先使用 interface 而不是 type 定义对象类型
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/
     *                                        eslint-plugin/docs/rules/consistent-type-definitions.md
     */
    "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],

    "vue/attributes-order": "error",
    "vue/require-default-prop": "error",
  },
};
