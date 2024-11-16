"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import Image from "next/image";

const Slider = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({className, ...props}, ref) => (
    <SliderPrimitive.Root
        ref={ref}
        className={
            "relative flex w-full touch-none select-none items-center" + className
        }
        {...props}
    >
        <SliderPrimitive.Track className="relative top-[15px] h-[10px] w-full grow overflow-hidden rounded-full dark:bg-dark-primary-soft-cyan-dark bg-primary-soft-cyan">
            <SliderPrimitive.Range className="absolute h-full "/>
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
            className="top-[-5px] h-[42px] w-[42px] flex justify-center items-center rounded-full dark:bg-dark-primary-strong-cyan-dark bg-primary-strong-cyan shadow-slider dark:shadow-dark-slider disabled:pointer-events-none disabled:opacity-50 outline-none"
        >
            <Image
                src="/icon-slider.svg"
                alt="Slider"
                width={25}
                height={25}
            />
        </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export {Slider}
