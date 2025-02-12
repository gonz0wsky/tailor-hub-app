import { renderWithProviders } from "@tests/renderWithProviders";
import { act, fireEvent } from "@testing-library/react-native";
import RegisterStepTwoForm from "../RegisterStepTwoForm";

const VALID_PASSWORD = "valid_password";
const INVALID_PASSWORD = "asf";

describe("<RegisterStepOneForm />", () => {
  const mockOnSubmit = jest.fn();
  const mockOnPressBack = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render", () => {
    const { getByTestId, queryByTestId } = renderWithProviders(
      <RegisterStepTwoForm
        onSubmit={mockOnSubmit}
        onPressBack={mockOnPressBack}
      />
    );

    expect(getByTestId("form-password-input")).toBeTruthy();
    expect(getByTestId("form-password-label")).toBeTruthy();
    expect(queryByTestId("form-password-error")).toBeNull();

    expect(getByTestId("submit-button")).toBeTruthy();
  });

  it("onPressBack should be called when pressing back button", () => {
    const { getByTestId } = renderWithProviders(
      <RegisterStepTwoForm
        onSubmit={mockOnSubmit}
        onPressBack={mockOnPressBack}
      />
    );

    fireEvent.press(getByTestId("back-button"));

    expect(mockOnPressBack).toHaveBeenCalled();
  });

  it("onSubmit shouldn't be called when form is empty", async () => {
    const { getByTestId } = renderWithProviders(
      <RegisterStepTwoForm
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
      <RegisterStepTwoForm
        onSubmit={mockOnSubmit}
        onPressBack={mockOnPressBack}
      />
    );

    await act(async () => {
      fireEvent.changeText(
        getByTestId("form-password-input"),
        INVALID_PASSWORD
      );
      fireEvent.press(getByTestId("submit-button"));
    });

    expect(mockOnSubmit).not.toHaveBeenCalled();

    expect(await findByTestId("form-password-error")).toBeTruthy();
  });

  it("onSubmit should be called when form is valid", async () => {
    const { getByTestId } = renderWithProviders(
      <RegisterStepTwoForm
        onSubmit={mockOnSubmit}
        onPressBack={mockOnPressBack}
      />
    );

    await act(async () => {
      fireEvent.changeText(getByTestId("form-password-input"), VALID_PASSWORD);
      fireEvent.press(getByTestId("submit-button"));
    });

    expect(mockOnSubmit).toHaveBeenCalledWith(VALID_PASSWORD);
  });
});
