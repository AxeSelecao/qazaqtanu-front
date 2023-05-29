import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./services/redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignIn } from "./pages/authorization/SignIn";
import { SignUp } from "./pages/authorization/SignUp";
import { Profile } from "./pages/Profile";
import { Language } from "./pages/categories/language/Language";
import Alphabet from "./pages/categories/language/alphabet/Alphabet";
import Study from "./pages/categories/language/study/Study";
import Beginner from "./pages/categories/language/study/levels/beginner/Beginner";
import { Landing } from "./pages/Landing";
import Test_Unit1 from "./pages/categories/language/study/levels/beginner/unit-1/Test_unit-1";
import Unit1_Topic1 from "./pages/categories/language/study/levels/beginner/unit-1/Topic-1";
import Unit2_Topics from "./pages/categories/language/study/levels/beginner/unit-2/Topics";
import Unit3_Topics from "./pages/categories/language/study/levels/beginner/unit-3/Topics";
import Unit4_Topics from "./pages/categories/language/study/levels/beginner/unit-4/Topics";
import Unit5_Topics from "./pages/categories/language/study/levels/beginner/unit-5/Topics";
import Unit6_Topics from "./pages/categories/language/study/levels/beginner/unit-6/Topics";
import Test_Unit2 from "./pages/categories/language/study/levels/beginner/unit-2/Test_unit-2";
import Test_Unit3 from "./pages/categories/language/study/levels/beginner/unit-3/Test_unit-3";
import Task_Unit3 from "./pages/categories/language/study/levels/beginner/unit-3/Task_unit-3";
import Task_Unit4 from "./pages/categories/language/study/levels/beginner/unit-4/Task_unit-4";
import Test_Unit4 from "./pages/categories/language/study/levels/beginner/unit-4/Test_unit-4";
import Task_Unit5 from "./pages/categories/language/study/levels/beginner/unit-5/Task_unit-5";
import Test_Unit5 from "./pages/categories/language/study/levels/beginner/unit-5/Test_unit-5";
import Task_Unit6 from "./pages/categories/language/study/levels/beginner/unit-6/Task_unit-6";
import Test_Unit6 from "./pages/categories/language/study/levels/beginner/unit-6/Test_unit-6";
import Unit7_Topics from "./pages/categories/language/study/levels/beginner/unit-7/Topics";
import Task_Unit7 from "./pages/categories/language/study/levels/beginner/unit-7/Task_unit-7";
import Unit8_Topics from "./pages/categories/language/study/levels/beginner/unit-8/Topics";
import Unit9_Topics from "./pages/categories/language/study/levels/beginner/unit-9/Topics";
import Test_Unit7 from "./pages/categories/language/study/levels/beginner/unit-7/Test_unit-7";
import Task_Unit8 from "./pages/categories/language/study/levels/beginner/unit-8/Task_unit-8";
import Test_Unit8 from "./pages/categories/language/study/levels/beginner/unit-8/Test_unit-8";
import Task_Unit9 from "./pages/categories/language/study/levels/beginner/unit-9/Task_unit-9";
import Test_Unit9 from "./pages/categories/language/study/levels/beginner/unit-9/Test_unit-9";
import Unit10_Topics from "./pages/categories/language/study/levels/beginner/unit-10/Topics";
import Task_Unit10 from "./pages/categories/language/study/levels/beginner/unit-10/Task_unit-10";
import Test_Unit10 from "./pages/categories/language/study/levels/beginner/unit-10/Test_unit-10";
import Unit11_Topics from "./pages/categories/language/study/levels/beginner/unit-11/Topics";
import Task_Unit11 from "./pages/categories/language/study/levels/beginner/unit-11/Task_unit-11";
import Test_Unit11 from "./pages/categories/language/study/levels/beginner/unit-11/Test_unit-11";
import Test_Unit12 from "./pages/categories/language/study/levels/beginner/unit-12/Test_unit-12";
import Task_Unit12 from "./pages/categories/language/study/levels/beginner/unit-12/Task_unit-12";
import Unit12_Topics from "./pages/categories/language/study/levels/beginner/unit-12/Topics";
import Test_Unit13 from "./pages/categories/language/study/levels/beginner/unit-13/Test_unit-13";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/authorization",
        element: <SignIn />,
      },
      {
        path: "/registration",
        element: <SignUp />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/language",
        element: <Language />,
      },
      {
        path: "/language/alphabet",
        element: <Alphabet />,
      },
      {
        path: "/language/study",
        element: <Study />,
      },
      {
        path: "/language/study/beginner",
        element: <Beginner />,
        children: [
          {
            path: "/language/study/beginner/unit-1/topic/:num",
            element: <Unit1_Topic1 />,
          },
          {
            path: "/language/study/beginner/unit-1/test/:num",
            element: <Test_Unit1 />,
          },
          {
            path: "/language/study/beginner/unit-2/topic/:num",
            element: <Unit2_Topics />,
          },
          {
            path: "/language/study/beginner/unit-2/test/:num",
            element: <Test_Unit2 />,
          },
          {
            path: "/language/study/beginner/unit-3/topic/:num",
            element: <Unit3_Topics />,
          },
          {
            path: "/language/study/beginner/unit-3/test/:num",
            element: <Test_Unit3 />,
          },
          {
            path: "/language/study/beginner/unit-3/task/:num",
            element: <Task_Unit3 />,
          },
          {
            path: "/language/study/beginner/unit-4/topic/:num",
            element: <Unit4_Topics />,
          },
          {
            path: "/language/study/beginner/unit-4/task/:num",
            element: <Task_Unit4 unit={4 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-4/test/:num",
            element: <Test_Unit4 unit={4 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-5/topic/:num",
            element: <Unit5_Topics />,
          },
          {
            path: "/language/study/beginner/unit-5/task/:num",
            element: <Task_Unit5 unit={5 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-5/test/:num",
            element: <Test_Unit5 unit={5 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-6/topic/:num",
            element: <Unit6_Topics />,
          },
          {
            path: "/language/study/beginner/unit-6/task/:num",
            element: <Task_Unit6 unit={6 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-6/test/:num",
            element: <Test_Unit6 unit={6 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-7/topic/:num",
            element: <Unit7_Topics unit={7 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-7/task/:num",
            element: <Task_Unit7 unit={7 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-7/test/:num",
            element: <Test_Unit7 unit={7 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-8/topic/:num",
            element: <Unit8_Topics unit={8 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-8/task/:num",
            element: <Task_Unit8 unit={8 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-8/test/:num",
            element: <Test_Unit8 unit={8 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-9/topic/:num",
            element: <Unit9_Topics unit={9 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-9/task/:num",
            element: <Task_Unit9 unit={9 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-9/test/:num",
            element: <Test_Unit9 unit={9 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-10/topic/:num",
            element: <Unit10_Topics unit={10 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-10/task/:num",
            element: <Task_Unit10 unit={10 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-10/test/:num",
            element: <Test_Unit10 unit={10 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-11/topic/:num",
            element: <Unit11_Topics unit={11 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-11/task/:num",
            element: <Task_Unit11 unit={11 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-11/test/:num",
            element: <Test_Unit11 unit={11 - 1} />,
          },
			 {
            path: "/language/study/beginner/unit-12/topic/:num",
            element: <Unit12_Topics unit={12 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-12/task/:num",
            element: <Task_Unit12 unit={12 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-12/test/:num",
            element: <Test_Unit12 unit={12 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-13/test/:num",
            element: <Test_Unit13 unit={13 - 1} />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
