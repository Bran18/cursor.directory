import { elixirRules } from "@/data/rules/elixir";
import { angularRules } from "./rules/angular";
import { astroRules } from "./rules/astro";
import { cRules } from "./rules/c";
import { dataAnalystRules } from "./rules/data-analyst";
import { deepLearningRules } from "./rules/deep-learning";
import { djangoRules } from "./rules/django";
import { dotnetRules } from "./rules/dotnet";
import { expoReactNativeRules } from "./rules/expo";
import { fastapiRules } from "./rules/fastapi";
import { flaskRules } from "./rules/flask";
import { flutterRules } from "./rules/flutter";
import { gatsbyRules } from "./rules/gastby";
import { goRules } from "./rules/go";
import { juliaRules } from "./rules/julia";
import { laravelRules } from "./rules/laravel";
import { metaPromptRules } from "./rules/meta-prompt";
import { nestjsRules } from "./rules/nestjs";
import { nextjsRules } from "./rules/nextjs";
import { pythonRules } from "./rules/python";
import { railsRules } from "./rules/rails";
import { reactNativeRules } from "./rules/react-native";
import { solidityRules } from "./rules/solidity";
import { svelteKit5Rules } from "./rules/sveltekit";
import { swiftuiRules } from "./rules/swift";
import { tauriRules } from "./rules/tauri";
import { unityCSharpRules } from "./rules/unity-c-sharp";
import { vueTsRules } from "./rules/vue";

export const rules = [
  ...astroRules,
  ...nextjsRules,
  ...swiftuiRules,
  ...laravelRules,
  ...railsRules,
  ...fastapiRules,
  ...flaskRules,
  ...djangoRules,
  ...cRules,
  ...vueTsRules,
  ...metaPromptRules,
  ...expoReactNativeRules,
  ...reactNativeRules,
  ...juliaRules,
  ...dataAnalystRules,
  ...goRules,
  ...pythonRules,
  ...elixirRules,
  ...deepLearningRules,
  ...tauriRules,
  ...nestjsRules,
  ...unityCSharpRules,
  ...flutterRules,
  ...angularRules,
  ...dotnetRules,
  ...svelteKit5Rules,
  ...gatsbyRules,
  ...solidityRules,
];

export function getSections() {
  const categories = Array.from(new Set(rules.flatMap((rule) => rule.tags)));
  return categories
    .map((tag) => ({
      tag,
      rules: rules.filter((rule) => rule.tags.includes(tag)),
    }))
    .sort((a, b) => b.rules.length - a.rules.length);
}
