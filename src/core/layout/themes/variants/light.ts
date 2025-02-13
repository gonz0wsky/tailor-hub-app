import { tokens } from "@core/layout/utils/getActiveBreakpoints";

export const palette = {
  black: tokens.color.theme_light_black,
  blue: tokens.color.theme_light_blue,
  grey: tokens.color.theme_light_grey,
  pastel_blue: tokens.color.theme_light_pastel_blue,
  white: tokens.color.theme_light_white,

  black_35: `${tokens.color.theme_light_black}35`,
  black_60: `${tokens.color.theme_light_black}60`,

  blue_60: `${tokens.color.theme_light_blue}60`,

  grey_60: `${tokens.color.theme_light_grey}60`,

  white_60: `${tokens.color.theme_light_white}60`,
} as const;

export const theme = {
  name: "light",
  atoms: {
    text: {
      primary: { color: palette.black },
      primary_60: { color: palette.black_60 },
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
        icon: {
          primary: { color: palette.white },
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
      icon: {
        color: {
          primary: { color: palette.black },
          primary_disabled: { color: palette.black_35 },
          secondary: { color: palette.blue },
          secondary_disabled: { color: palette.blue_60 },
        },
      },
      bottombar: {
        border: { borderColor: palette.grey },
      },
      icon_button: {
        background: {
          primary: {},
          secondary: { backgroundColor: palette.grey_60 },
        },
        icon: {
          primary: { color: palette.black },
          secondary: { color: palette.white },
        },
      },
    },
  },
};
