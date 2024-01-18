type TitleProps = {
    title: string;
    subtitle: string;
}

export default function Title({ title, subtitle }: TitleProps) {
    return (
        <div className="flex flex-col justify-center items-center">
            <span className="text-3xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-gray-200 uppercase leading-relaxed tracking-[0.01em] text-center">
                {subtitle}
            </span>
            <h1 className="text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl leading-relaxed text-center text-gray-400">{title}</h1>
        </div>
    )
}