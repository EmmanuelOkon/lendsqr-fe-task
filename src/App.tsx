import "./styles/App.scss";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import UserDetails from "./pages/UserDetailsPage/UserDetailsPage";
import Root from "./pages/Root";
import { fetchSingleUser, fetchUsers } from "./services/api";
import DashboardErrorPage from "./pages/DashboardErrorPage";
import UserDetailErrorPage from "./pages/UserDetailErrorPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={<DashboardPage />}
          loader={fetchUsers}
          errorElement={<DashboardErrorPage />}
        />
        <Route
          path="/user-details/:id"
          element={<UserDetails />}
          loader={({ params }) => fetchSingleUser(params.id as string)}
          errorElement={<UserDetailErrorPage />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
