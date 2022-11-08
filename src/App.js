// importing dependency's components
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// importing components
import LoginPage from "./pages/loginPage/loginPage.jsx";
import SignUpPage from "./pages/signUpPage/signUpPage.jsx";
import Page from "./pages/page.jsx";
import Page404 from "./pages/404Page/404Page.jsx";
import Footer from "./pages/components/footer/footer.jsx";
import MainPage from "./pages/mainPage/mainPage.jsx";
import UserList from "./pages/components/userList/userList.jsx";
// importing style sheet
import "./app";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainPage/>,
      errorElement: (
        <Page title="404 Page Not Found">
          <Page404 />
          <Footer />
        </Page>
      ),
    },

    {
      path: "/userList",
      element:<UserList/>,
      errorElement: (
        <Page title="404 Page Not Found">
          <Page404 />
          <Footer />
        </Page>
      ),
    },
    {
      path: "/login-page",
      element: (
        <Page title="Login">
          <LoginPage />
          <Footer />
        </Page>
      ),
    },
    {
      path: "/sign-up-page",
      element: (
        <Page title="Sign Up">
          <SignUpPage />
          <Footer />
        </Page>
      ),
    },
  ]);

  return (
    <div>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
