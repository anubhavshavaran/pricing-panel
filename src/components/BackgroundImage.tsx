import Image from "next/image";

type BackgroundImageProps = {
    className?: string;
}

export default function BackgroundImage({className}: BackgroundImageProps) {
    return (
        <Image
            src="./bg-pattern.svg" alt="Background Image"
            width={0}
            height={0}
            className={`w-full h-[50%] ${className}`}
        />
    );
}