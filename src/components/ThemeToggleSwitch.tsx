"use client"

import {Switch} from "@/components/ui/switch";
import {Moon, Sun} from "lucide-react";
import {useEffect} from "react";

type ThemeToggleSwitchProps = {
    isDark: boolean;
    onToggle: () => void;
}

export default function ThemeToggleSwitch({isDark, onToggle}: ThemeToggleSwitchProps) {
    useEffect(() => {
        if (isDark) {
            document.querySelector("html")?.classList.add("dark");
        } else {
            document.querySelector("html")?.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <div
            className="absolute sm:top-4 sm:right-6 lg:top-10 lg:right-16 z-20 flex justify-between items-center gap-2">
            <Sun size={20} color="#FF8C66FF"/>
            <Switch defaultChecked={isDark} onCheckedChange={onToggle}
                    className="data-[state=unchecked]:bg-neutral-grayish-blue "/>
            <Moon size={20} color="#293356FF"/>
        </div>
    );
}