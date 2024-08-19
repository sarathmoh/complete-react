import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyPart from "./components/BodyPart";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestoDetails from "./components/RestoDetails";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
const Grocery = lazy(() => import("./components/Grocery"));
import UserContext from "./utils/context/UserContext";
import appStore from "./utils/store";
import Cart from "./components/Cart";
const AppLayout = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const name = {
      userName: "sarath",
    };
    setUser(name.userName);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: user, setUser }}>
        <div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
// const heading = React.createElement("h1", {id:"heading"}, "welcome to react");

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyPart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestoDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
