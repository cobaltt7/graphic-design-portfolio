/** @type {import("prettier").Config & import("prettier-plugin-jsdoc").JsdocOptions} */
const config = {
	experimentalTernaries: true,
	htmlWhitespaceSensitivity: "ignore",
	printWidth: 100,
	proseWrap: "always",
	quoteProps: "consistent",
	tabWidth: 4,
	useTabs: true,

	importOrder: [
		"<TYPES>^(node:)",
		"<TYPES>",
		"<TYPES>^[.]",
		"",
		"<BUILTIN_MODULES>",
		"",
		"<THIRD_PARTY_MODULES>",
		"",
		"^[.]",
		"",
	],
	importOrderTypeScriptVersion: getTypeScriptVersion(),

	jsdocAddDefaultToDescription: false,
	jsdocDescriptionWithDot: true,
	jsdocPreferCodeFences: true,
	jsdocPrintWidth: 120,

	iniSpaceAroundEquals: true,

	overrides: [
		{ files: "**.md", options: { printWidth: 120 } },
		{ files: ["**.env", "**.replit", "**/.tx/config"], options: { parser: "ini" } },
		{ files: ["**.svg", "**.xml"], options: { parser: "html" } },
		{
			files: ["**/.vscode/*.json", "tsconfig.json", "jsconfig.json"],
			options: { parser: "jsonc", trailingComma: "none" },
		},
		{
			files: ["package.json", "package-lock.json", "npm-shrinkwrap.json"],
			options: { parser: "json-stringify" },
		},
	],

	plugins: [
		require.resolve("@ianvs/prettier-plugin-sort-imports"),
		require.resolve("prettier-plugin-jsdoc"),
		require.resolve("prettier-plugin-packagejson"),
		require.resolve("prettier-plugin-ini"),
	],
};
module.exports = config;

function getTypeScriptVersion() {
	try {
		return require("typescript").version;
	} catch {
		return undefined;
	}
}
