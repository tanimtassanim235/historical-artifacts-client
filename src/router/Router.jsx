import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Allartifacts from "../pages/Allartifacts";
import AddArtifacts from "../pages/AddArtifacts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ArtifactsDetails from "../pages/Artifacts/ArtifactsDetails";
import MyArtifacts from "../pages/MyArtifacts";
import ErrorPage from "../pages/Error/ErrorPage";
import MylikedArt from "../pages/MylikedArt/MylikedArt";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "/artifacts/:id",
                element: <ArtifactsDetails></ArtifactsDetails>,
                loader: ({ params }) => fetch(`http://localhost:4000/artifacts/${params.id}`)
            },
            {
                path: "my-artifacts",
                element: <MyArtifacts></MyArtifacts>
            },
            {
                path: "liked-artifacts",
                element: <MylikedArt></MylikedArt>
            },
        ]
    }
])

export default router;