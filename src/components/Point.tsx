import Image from "next/image";

type PointPropsType = {
    title: string,
}

export default function Point({title}: PointPropsType) {
    return (
        <div className="flex justify-center items-center gap-4">
            <Image
                src="./icon-check.svg"
                alt="Check icon"
                width={12}
                height={12}
            />
            <p className="text-neutral-grayish-blue text-sm font-semibold capitalize">{title}</p>
        </div>
    );
}