import UserDetails from "../pages/UserDetail/UserDetail";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect'; // Import the necessary matchers
import store from "../store";
import dashboardReducer from "../logic/reducers";
import { useSelector } from 'react-redux';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
    useLocation: () => mockedUsedNavigate,
    useNavigation: () => mockedUsedNavigate,
    useFocusEffect: () => mockedUsedNavigate,
    useLoaderData: () => mockedUsedNavigate,
}));

// Mock the react-redux's useSelector and useDispatch hooks
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: () => jest.fn(),
}));

beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should return the initial state', () => {
    expect(dashboardReducer(undefined, { type: undefined })).toEqual({
      "dashboardMenu": "Users",
      "filterModalToggle": false,
      "globalFilter": "",
      "modalFilter": {
        "email": "",
        "org": "",
        "phoneNumber": "",
        "status": "",
        "username": ""
      },
      "userDetailNav": "General Details"
    });
  });
  

  test('dispatches setUserDetailNav action on navigation click', () => {
    // const mockDispatch = jest.fn();
    // jest.mock("react-redux", () => ({
    //     ...jest.requireActual("react-redux"),
    //     useSelector: jest.fn(),
    //     useDispatch: () => jest.fn(),
    // }));
    (useSelector as jest.Mock).mockReturnValue(dashboardReducer);
    render(        
    <Provider store={store}>
        <BrowserRouter>
            <UserDetails /> 
        </BrowserRouter>
    </Provider>);
    screen.getByText('General Details').click();

    screen.getByText('Documents').click();

    screen.getByText('Bank Details').click();

    screen.getByText('Loans').click();

    screen.getByText('Savings').click();

    screen.getByText('App and Systems').click();
  });