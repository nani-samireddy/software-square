import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/errorpage";
import AboutPage from "./pages/aboutpage";
import WorkPage from "./pages/workpage";
import TeamPage from "./pages/teampage";
import Homepage from "./pages/homepage";

export const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            errorElement: ErrorPage,
            children: [
                {
                    path: "/",
                    index: true,
                    element: <Homepage />,
                    errorElement: ErrorPage,


                },
                {
                    path: "/about",
                    element: <AboutPage />,
                    errorElement: ErrorPage,


                },
                {
                    path: "/:slug",
                    element: <WorkPage />,
                    errorElement: ErrorPage
                },
                {
                    path: "/team",
                    element: <TeamPage />,
                    errorElement: ErrorPage,


                },
                {
                    path: "/*",
                    element: <ErrorPage />,
                }
            ],
        },
    ]


);