// importing dependency's components
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// importing components
import LoginPage from "./pages/loginPage/loginPage.jsx";
import SignUpPage from "./pages/signUpPage/signUpPage.jsx";
import Page from "./pages/page.jsx";
import Page404 from "./pages/404Page/404Page.jsx";
import Footer from "./pages/components/footer/footer.jsx";
import ForgotPass from "./pages/forgotPassword/forgotPass.jsx";

// importing style sheet
import "./app";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Page title="404 Page Not Found">
          <Page404 />
          <Footer />
        </Page>
      ),
      errorElement: (
        <Page title="404 Page Not Found">
          <Page404 />
          <Footer />
        </Page>
      ),
    },
    {
      path: "/login",
      element: (
        <Page title="Login">
          <LoginPage />
          <Footer />
        </Page>
      ),
    },
    {
      path: "/create-account",
      element: (
        <Page title="Create Account">
          <SignUpPage />
          <Footer />
        </Page>
      ),
    },
    {
      path: "/forgot-password",
      element: (
        <Page title="Forgot Password">
          <ForgotPass />
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
