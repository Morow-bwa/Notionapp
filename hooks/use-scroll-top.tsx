import { useState, useEffect } from "react";

export const useScrollTop = (theshold = 10) => {
    const [scroled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > theshold) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [theshold]); 

    return scroled;
}