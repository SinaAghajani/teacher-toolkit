"use client";

import { useEffect, useState } from "react";

export function useMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1023px)");

        const handleChange = () => {
            setIsMobile(mediaQuery.matches);
        };

        handleChange();
        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    return isMobile;
}