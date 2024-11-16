type PriceTag = {
    price: number;
    className?: string;
    isYearly?: boolean;
}

export default function PriceTag({price, isYearly = false, className}: PriceTag) {
    return (
        <div className={`flex justify-center items-center gap-2 ${className}`}>
            <p className="text-3xl lg:text-4xl font-black text-neutral-dark-desaturated-blue">${isYearly ? price * 12 : price}.00</p>
            <p className="font-semibold text-neutral-grayish-blue text-sm">/ {isYearly ? 'year' : 'month'}</p>
        </div>
    );
}