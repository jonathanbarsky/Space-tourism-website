import React, { useEffect, useState } from "react";

const useScreenSize = () => {
    const [ width, setWidth] = useState(window.innerWidth);
    const [ height, setHeight ] = useState(window.innerHeight);;
    
    
    useEffect(() => {

        window.addEventListener("resize", handleResize);
        
        return () => {
            window.addEventListener("resize", handleResize);    
        };
    }, []);
    
    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    return {width, height };
}


export {useScreenSize};