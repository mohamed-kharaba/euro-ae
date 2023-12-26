import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
    About,
    HomeLayout,
    Landing,
    Programs,
    Contact,
    SingleProgram,
    // DetProgram,
} from "./pages";
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Landing />,
            },

            {
                path: "about",
                element: <About />,
            },
            {
                path: "programs",
                element: <Programs />,
            },
            {
                path: "programs/:id",
                element: <SingleProgram />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default App;
