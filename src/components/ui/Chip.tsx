type ChipProps = {
    text: string;
    className?: string;
}

export default function Chip({text, className}:ChipProps) {
    return(
        <div className={`w-fit bg-primary-light-grayish-red py-1 px-2 rounded-r-full rounded-l-full ${className}`}>
            <p className="text-primary-light-red text-xs font-bold ">{text}</p>
        </div>
    );
}