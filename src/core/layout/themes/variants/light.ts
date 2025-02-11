import { tokens } from "@core/layout/utils/getActiveBreakpoints";

export const palette = {
  black: tokens.color.theme_light_black,
  blue: tokens.color.theme_light_blue,
  grey: tokens.color.theme_light_grey,
  pastel_blue: tokens.color.theme_light_pastel_blue,
  white: tokens.color.theme_light_white,

  black_60: `${tokens.color.theme_light_black}60`,
  white_60: `${tokens.color.theme_light_white}60`,
} as const;

export const theme = {
  name: "light",
  atoms: {
    text: {
      primary: { color: palette.black },
      secondary: { color: palette.white },
      tertiary: { color: palette.blue },
    },
    background: {
      primary: { backgroundColor: palette.white },
      secondary: { backgroundColor: palette.blue },
      tertiary: { backgroundColor: palette.grey },
    },
    components: {
      button: {
        background: {
          primary: { backgroundColor: palette.white },
          secondary: {},
        },
        border: {
          primary: { borderColor: palette.white },
          secondary: { borderColor: palette.black },
        },
        text: {
          primary: { color: palette.black },
          secondary: { color: palette.black },
        },
      },
      textinput: {
        border: {
          primary: { borderColor: palette.black },
          secondary: { borderColor: palette.white },
        },
        text: {
          primary: { color: palette.black },
          secondary: { color: palette.white },
        },
        placeholder: {
          primary: { color: palette.black_60 },
          secondary: { color: palette.white_60 },
        },
      },
    },
  },
};
