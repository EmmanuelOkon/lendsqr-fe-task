import UserDetailsPage from "../pages/UserDetailsPage/UserDetailsPage";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect'; // Import the necessary matchers
import store from "../store";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
    useLocation: () => mockedUsedNavigate,
    useNavigation: () => mockedUsedNavigate,
    useFocusEffect: () => mockedUsedNavigate,
    useLoaderData: () => mockedUsedNavigate,
}));

test("renders sidebar, header, and dashboard content", () => {
    render(<Provider store={store}><BrowserRouter><UserDetailsPage /></BrowserRouter></Provider>);
    
    // Check if the sidebar component is rendered
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    
    // Check if the header component is rendered
    expect(screen.getByTestId("header")).toBeInTheDocument();
    
    // Check if the dashboard content component is rendered
    expect(screen.getByTestId("user-content")).toBeInTheDocument();

    expect(screen.getByTestId("go-back")).toBeInTheDocument();
  });