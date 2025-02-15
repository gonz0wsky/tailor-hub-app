import { Alert } from "react-native";

export const showSuccessAlert = (message: string) => {
  Alert.alert("Success", message);
};

export const showErrorAlert = (message: string) => {
  Alert.alert("Error", message);
};
