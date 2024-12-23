import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Allartifacts from "../pages/Allartifacts";
import AddArtifacts from "../pages/AddArtifacts";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <div>Hi 404</div>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "all-artifacts",
                element: <Allartifacts></Allartifacts>
            },
            {
                path: "add-artifacts",
                element: <AddArtifacts></AddArtifacts>
            },
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])

export default router;