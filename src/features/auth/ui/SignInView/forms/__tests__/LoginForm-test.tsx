import { renderWithProviders } from "@tests/renderWithProviders";
import LoginForm from "../LoginForm";
import { act, fireEvent } from "@testing-library/react-native";

const VALID_PASSWORD = "valid_password";
const VALID_EMAIL = "valid@email.com";
const NOT_VALID_EMAIL = "not_valid_email";
const NOT_VALID_PASSWORD = "asf";

describe("<LoginForm />", () => {
  const mockOnSubmit = jest.fn();
  const mockOnPressRegister = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render", () => {
    const { getByTestId, queryByTestId } = renderWithProviders(
      <LoginForm
        onSubmit={mockOnSubmit}
        onPressRegister={mockOnPressRegister}
      />
    );

    expect(getByTestId("form-email-input")).toBeTruthy();
    expect(getByTestId("form-email-label")).toBeTruthy();
    expect(queryByTestId("form-email-error")).toBeNull();

    expect(getByTestId("form-password-input")).toBeTruthy();
    expect(getByTestId("form-password-label")).toBeTruthy();
    expect(queryByTestId("form-password-error")).toBeNull();

    expect(getByTestId("login-button")).toBeTruthy();

    expect(getByTestId("submit-button")).toBeTruthy();
  });

  it("onSubmit shouldn't be called when form is empty", async () => {
    const { getByTestId } = renderWithProviders(
      <LoginForm
        onSubmit={mockOnSubmit}
        onPressRegister={mockOnPressRegister}
      />
    );

    await act(async () => {
      fireEvent.press(getByTestId("login-button"));
    });

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it("onSubmit shouldn't be called when form is invalid and shows errors", async () => {
    const { getByTestId, findByTestId } = renderWithProviders(
      <LoginForm
        onSubmit={mockOnSubmit}
        onPressRegister={mockOnPressRegister}
      />
    );

    await act(async () => {
      fireEvent.changeText(getByTestId("form-email-input"), NOT_VALID_EMAIL);
      fireEvent.changeText(
        getByTestId("form-password-input"),
        NOT_VALID_PASSWORD
      );
      fireEvent.press(getByTestId("login-button"));
    });

    expect(mockOnSubmit).not.toHaveBeenCalled();

    expect(await findByTestId("form-email-error")).toBeTruthy();
    expect(await findByTestId("form-password-error")).toBeTruthy();
  });

  it("onSubmit should be called when form is valid", async () => {
    const { getByTestId } = renderWithProviders(
      <LoginForm
        onSubmit={mockOnSubmit}
        onPressRegister={mockOnPressRegister}
      />
    );

    await act(async () => {
      fireEvent.changeText(getByTestId("form-email-input"), VALID_EMAIL);
      fireEvent.changeText(getByTestId("form-password-input"), VALID_PASSWORD);
      fireEvent.press(getByTestId("login-button"));
    });

    expect(mockOnSubmit).toHaveBeenCalledWith(VALID_EMAIL, VALID_PASSWORD);
  });
});
