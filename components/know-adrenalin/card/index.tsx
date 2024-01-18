import Image from "next/image"

type KnowAdrenalinCardProps = {
    title: string;
    description: string;
    src: string;
}

export default function KnowAdrenalinCard({ title, description, src }: KnowAdrenalinCardProps) {
    return (
        <div className="flex flex-col items-center justify-center max-w-sm 2xl:max-w-md 3xl:max-w-lg p-8 
        transition-shadow duration-200 rounded-md hover:shadow-2xl gap-4">
            <Image
                src={src}
                alt={title}
                width={150}
                height={150}
                className="max-h-[75] max-w-[75] xl:max-h-[120] xl:max-w-[120] 2xl:max-h-[220px] 2xl:max-w-[220px]"
            />
            <h1 className="text-center text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl cursor-default">{title}</h1>
            <p className="text-gray-500 text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl text-center line-clamp-10 cursor-default">{description}</p>
        </div>
    )
}