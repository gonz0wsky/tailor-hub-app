jest.mock("@lingui/react", () => ({
  useLingui: () => ({
    i18n: {
      t: (key: string) => key,
    },
  }),
}));

jest.mock("react-hook-form", () => ({
  useForm: () => ({
    handleSubmit: () => Promise.resolve(),
    control: {
      errors: {},
    },
  }),
}));
