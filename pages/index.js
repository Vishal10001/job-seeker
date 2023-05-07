import React,{ useEffect } from "react";
import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Home2 from "../components/home-2";

const Index = () => {
    useEffect(() => {
        // loginPopupModal 
        document.getElementById('openLogin').click();
    })
    return (
        <>
            <Seo pageTitle="Home" />
            <Home2 />
        </>
    );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
