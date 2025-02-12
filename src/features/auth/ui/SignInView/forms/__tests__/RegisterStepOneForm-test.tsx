import { renderWithProviders } from "@tests/renderWithProviders";
import { act, fireEvent } from "@testing-library/react-native";
import RegisterStepOneForm from "../RegisterStepOneForm";

const VALID_EMAIL = "valid@email.com";
const VALID_NAME = "valid name";
const NOT_VALID_EMAIL = "not_valid_email";
const NOT_VALID_NAME = "a";

describe("<RegisterStepOneForm />", () => {
  const mockOnSubmit = jest.fn();
  const mockOnPressBack = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render", () => {
    const { getByTestId, queryByTestId } = renderWithProviders(
      <RegisterStepOneForm
        onSubmit={mockOnSubmit}
        onPressBack={mockOnPressBack}
      />
    );

    expect(getByTestId("form-email-input")).toBeTruthy();
    expect(getByTestId("form-email-label")).toBeTruthy();
    expect(queryByTestId("form-email-error")).toBeNull();

    expect(getByTestId("form-name-input")).toBeTruthy();
    expect(getByTestId("form-name-label")).toBeTruthy();
    expect(queryByTestId("form-name-error")).toBeNull();

    expect(getByTestId("submit-button")).toBeTruthy();
  });

  it("onPressBack should be called when pressing back button", () => {
    const { getByTestId } = renderWithProviders(
      <RegisterStepOneForm
        onSubmit={mockOnSubmit}
        onPressBack={mockOnPressBack}
      />
    );

    fireEvent.press(getByTestId("back-button"));

    expect(mockOnPressBack).toHaveBeenCalled();
  });

  it("onSubmit shouldn't be called when form is empty", async () => {
    const { getByTestId } = renderWithProviders(
      <RegisterStepOneForm
        onSubmit={mockOnSubmit}
        onPressBack={mockOnPressBack}
      />
    );

    await act(async () => {
      fireEvent.press(getByTestId("submit-button"));
    });

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it("onSubmit shouldn't be called when form is invalid and shows errors", async () => {
    const { getByTestId, findByTestId } = renderWithProviders(
      <RegisterStepOneForm
        onSubmit={mockOnSubmit}
        onPressBack={mockOnPressBack}
      />
    );

    await act(async () => {
      fireEvent.changeText(getByTestId("form-email-input"), NOT_VALID_EMAIL);
      fireEvent.changeText(getByTestId("form-name-input"), NOT_VALID_NAME);
      fireEvent.press(getByTestId("submit-button"));
    });

    expect(mockOnSubmit).not.toHaveBeenCalled();

    expect(await findByTestId("form-email-error")).toBeTruthy();
    expect(await findByTestId("form-name-error")).toBeTruthy();
  });

  it("onSubmit should be called when form is valid", async () => {
    const { getByTestId } = renderWithProviders(
      <RegisterStepOneForm
        onSubmit={mockOnSubmit}
        onPressBack={mockOnPressBack}
      />
    );

    await act(async () => {
      fireEvent.changeText(getByTestId("form-email-input"), VALID_EMAIL);
      fireEvent.changeText(getByTestId("form-name-input"), VALID_NAME);
      fireEvent.press(getByTestId("submit-button"));
    });

    expect(mockOnSubmit).toHaveBeenCalledWith(VALID_EMAIL, VALID_NAME);
  });
});
