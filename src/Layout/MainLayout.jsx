import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";

const MainLayout = () => {

    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        let timer1 = setTimeout(() => setLoading(false), 1100);
        return () => {
            clearTimeout(timer1);
        };
    }, []);
    if (Loading) {
        return <Audio
            height="100"
            width="400"
            radius="9"
            color="green"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
        />;
    }
    return (
        <div className="font-roboto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;