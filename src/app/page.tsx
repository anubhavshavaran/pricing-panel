"use client"

import BackgroundImage from "@/components/BackgroundImage";
import Banner from "@/components/Banner";
import PriceContainer from "@/components/PriceContainer";
import React, {useState} from "react";
import ThemeToggleSwitch from "@/components/ThemeToggleSwitch";

export default function Home() {
    const [isDark, setIsDark] = useState<boolean>(false);

    return (
        <div className="w-full h-screen bg-white relative dark:bg-dark-neutral-darker-grayish-blue">
            <ThemeToggleSwitch isDark={isDark} onToggle={() => setIsDark(d => !d)} />
            <BackgroundImage isDark={isDark} className="absolute top-0 left-0" />
            <div className="absolute sm:pt-10 lg:pt-16 px-6 top-0 left-0 w-full h-screen z-10 flex flex-col items-center overflow-scroll">
                <Banner />
                <PriceContainer />
            </div>
        </div>
    );
}