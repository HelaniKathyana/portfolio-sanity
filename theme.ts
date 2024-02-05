import { buildLegacyTheme } from "sanity"

const props = {
  "colour-british-racing-green": "#02422a",
  "colour-buddha-gold": "#ca9300",
  "colour-cg-glue": "#02829b",
  "colour-paolo-veronese-green": "#009b79",
  "colour-spanish-yellow": "#ffba10",
  "colour-vermillion": "#ff4c17",
  "colour-vivid-cerise": "#d8137d",
  "colour-white": "#fff"
}

export const portfolioTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["colour-british-racing-green"],
  "--white": props["colour-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["colour-british-racing-green"],
  "--component-text-color": props["colour-white"],

  /* Brand */
  "--brand-primary": props["colour-cg-glue"],

  /* Default button */
  "--default-button-color": "#666",
  "--default-button-primary-color": props["colour-cg-glue"],
  "--default-button-success-color": props["colour-paolo-veronese-green"],
  "--default-button-warning-color": props["colour-spanish-yellow"],
  "--default-button-danger-color": props["colour-vivid-cerise"],

  /* States */
  "--state-info-color": props["colour-cg-glue"],
  "--state-success-color": props["colour-paolo-veronese-green"],
  "--state-warning-color": props["colour-spanish-yellow"],
  "--state-danger-color": props["colour-vivid-cerise"],

  /* Navbar */
  "--main-navigation-color": props["colour-british-racing-green"],
  "--main-navigation-color--inverted": props["colour-white"],

  "--focus-color": props["colour-cg-glue"]
})
