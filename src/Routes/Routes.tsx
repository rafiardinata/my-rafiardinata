import About from "@/pages/about/About.tsx";
import Home from "@/pages/home/Home.tsx";
import Projects from "@/pages/projects/Projects.tsx";
import Services from "@/pages/services/Services.tsx";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/projects", element: <Projects /> },
    { path: "/services", element: <Services /> },
    { path: "/about", element: <About /> },
], {
    basename: "/",
    future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
    },
});