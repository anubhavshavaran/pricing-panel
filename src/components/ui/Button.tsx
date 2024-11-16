type ButtonPropsType = {
    label: string;
}

export default function Button({label}: ButtonPropsType) {
    return (
        <button className="w-fit  dark:bg-dark-primary-soft-cyan-dark dark:text-dark-neutral-very-dark-blue bg-neutral-dark-desaturated-blue px-12 py-3 rounded-r-full rounded-l-full ">
            <p className="text-primary-pale-blue text-xs font-bold">{label}</p>
        </button>
    );
}