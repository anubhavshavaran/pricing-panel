"use client"

import {Slider} from "@/components/ui/slider";
import Point from "@/components/Point";
import Button from "@/components/ui/Button";
import PriceTag from "@/components/PriceTag";
import Chip from "@/components/ui/Chip";
import {Switch} from "@/components/ui/switch";
import {useState} from "react";

export default function PriceContainer() {
    const points = ["Unlimited websites", "100% data ownership", "Email reports"];
    const [price, setPrice] = useState<number>(16);
    const [isYearly, setIsYearly] = useState<boolean>(false);

    return (
        <div className="bg-white sm:w-full lg:w-[500px] rounded-lg relative sm:top-48 lg:top-44 shadow-2xl">
            <div className="px-8 py-8 lg:p-12 flex flex-col sm:gap-4 border-b-[2px] border-b-neutral-lighter-grayish-blue ">
                <div className="w-full flex lg:justify-between sm:justify-center lg:items-center">
                    <p className="text-center uppercase text-neutral-grayish-blue text-xs font-black tracking-widest ">100k pageviews</p>
                    <PriceTag price={price} isYearly={isYearly} className="sm:hidden lg:flex justify-end" />
                </div>
                <Slider value={[price]} onValueChange={(v) => setPrice(v.at(0) ?? 0)} min={16} max={80} step={5} />
                <PriceTag price={price} isYearly={isYearly} className="mt-8 lg:hidden w-full "/>

                <div className="w-full lg:mt-10 sm:mt-4 flex sm:justify-around lg:justify-end items-center gap-2 ">
                    <p className="text-neutral-grayish-blue font-semibold text-xs text-nowrap">Monthly Billing</p>
                    <Switch defaultChecked={isYearly} onCheckedChange={() => setIsYearly(!isYearly)} />
                    <p className="text-neutral-grayish-blue font-semibold text-xs text-nowrap">Yearly Billing</p>
                    <Chip text="-25%" className="lg:hidden"/>
                    <Chip text="25% discount" className="sm:hidden lg:block"/>
                </div>
            </div>

            <div
                className="px-6 py-8 lg:py-8 lg:px-12 flex flex-col lg:flex-row gap-10 justify-center lg:justify-between items-center">
                <div className="flex flex-col gap-2 lg:items-start ">
                    {points.map((point, i) => (
                        <Point title={point} key={i}/>
                    ))}
                </div>
                <Button label="Start my trial"/>
            </div>
        </div>
    )
}