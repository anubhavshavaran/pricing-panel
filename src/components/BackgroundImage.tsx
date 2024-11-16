import Image from "next/image";

type BackgroundImageProps = {
    className?: string;
    isDark: boolean;
}

export default function BackgroundImage({isDark, className}: BackgroundImageProps) {
    return (
        <>
            {isDark ? (
                <Image
                    src="./bg-pattern-dark.svg" alt="Background Image"
                    width={0}
                    height={0}
                    className={`w-full h-[50%] ${className}`}
                />
            ) : (
                <Image
                    src="./bg-pattern.svg" alt="Background Image"
                    width={0}
                    height={0}
                    className={`w-full h-[50%] ${className}`}
                />
            )}
        </>
    );
}