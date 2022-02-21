module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "plugin:vue/vue3-recommended",
        "google",
        "plugin:prettier/recommended"
    ],
    parserOptions: {
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        },
    },
    plugins: [
        "vue",
        "@typescript-eslint",
        "prettier"
    ],
    rules: {
        "prettier/prettier": "warn"
    }
}
