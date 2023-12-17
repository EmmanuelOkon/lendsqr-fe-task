import LoginPage from "../pages/LoginPage/LoginPage";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'; // Import the necessary matchers

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock("react-router-dom", () => {
  const actualNav = jest.requireActual("react-router-dom")
  return {
    ...actualNav,
    useFocusEffect: () => jest.fn(),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  }
})
  
test("renders the login form correctly", () => {
  render(<BrowserRouter><LoginPage/></BrowserRouter>);

  // Check if the necessary elements are rendered
  expect(screen.getByText("Welcome!")).toBeInTheDocument();
  expect(screen.getByText("Enter details to login.")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  expect(screen.getByText("LOG IN")).toBeInTheDocument();
});
test("allows input change in email and password fields", () => {
  render(<BrowserRouter><LoginPage/></BrowserRouter>);

  // Input change in email field
  const emailInput = screen.getByPlaceholderText("Email") as HTMLInputElement;
  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  expect(emailInput.value).toBe("test@example.com");

  // Input change in password field
  const passwordInput = screen.getByPlaceholderText("Password") as HTMLInputElement;
  fireEvent.change(passwordInput, { target: { value: "test123" } });
  expect(passwordInput.value).toBe("test123");
});

test("shows and hides the password when 'SHOW'/'HIDE' button is clicked", () => {
  render(<BrowserRouter><LoginPage /></BrowserRouter>);

  const passwordInput = screen.getByPlaceholderText("Password");
  const showPasswordButton = screen.getByText("SHOW");

  // Password is hidden initially
  expect(passwordInput.getAttribute("type")).toBe("password");

  // Click 'SHOW' button
  fireEvent.click(showPasswordButton);
  expect(passwordInput.getAttribute("type")).toBe("text");

  // Click 'HIDE' button
  fireEvent.click(showPasswordButton);
  expect(passwordInput.getAttribute("type")).toBe("password");
});

test("disables login button when email or password is missing", () => {
  render(<BrowserRouter><LoginPage /></BrowserRouter>);

  const emailInput = screen.getByPlaceholderText("Email");
  const passwordInput = screen.getByPlaceholderText("Password");
  const loginButton = screen.getByText("LOG IN");

  // Both fields are empty, login button should be disabled
  expect(loginButton).toBeDisabled();

  // Fill in email field, login button should still be disabled
  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  expect(loginButton).toBeDisabled();

  // Fill in password field, login button should be enabled
  fireEvent.change(passwordInput, { target: { value: "test123" } });
  expect(loginButton).toBeEnabled();
});

test('should navigate to dashboard when fields are filled and form is submitted', () => {
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );

  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const submitButton = screen.getByText('LOG IN');

  // Fill in the fields
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  // Submit the form
  fireEvent.click(submitButton);

  // Check if navigation to dashboard occurred
  expect(window.location.pathname).toBe('/dashboard');
});