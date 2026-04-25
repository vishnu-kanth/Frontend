import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Dashboard from './Pages/Dashboard';

let router1 = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
        {
            path:'/dashboard',
            element:<Dashboard/>
        }
    ]
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const App = () => {
  return <RouterProvider router={router1} />;
};

export default App; 