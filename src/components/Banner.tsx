import Image from "next/image";

export default function Banner() {
    return (
        <div className="w-full relative flex flex-col items-center justify-center">
            <Image
                src="/pattern-circles.svg"
                alt="Banner"
                width={0}
                height={0}
                className="absolute top-0 sm:w-[150px] sm:h-[150px] lg:w-[130px] lg:h-[130px]"
            />
            <div className="absolute top-8 flex flex-col items-center justify-center">
                <p className="mb-3 text-2xl font-black text-neutral-dark-desaturated-blue">Simple, traffic-based pricing</p>
                <div className="flex sm:flex-col lg:flex-row gap-2 items-center">
                    <p className="font-bold text-[13px] text-neutral-grayish-blue ">Sign-up for our 30-day trial.</p>
                    <p className="font-bold text-[13px] text-neutral-grayish-blue ">No credit card required.</p>
                </div>
            </div>
        </div>
    )
}