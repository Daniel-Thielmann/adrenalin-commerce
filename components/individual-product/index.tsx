import Image from "next/image";

export default function IndividualProduct() {
    return (
        <div className="w-full flex flex-col lg:grid lg:grid-cols-8 gap-8">
            <div className="lg:col-span-4">
                <Image
                    src={'/home/placeholder/placeholder.jpg'}
                    alt="Placeholder"
                    width={1920}
                    height={1080}
                    className="lg:h-[700px] object-cover aspect-video w-full rounded-xl"
                />
            </div>
            <div className="lg:col-span-4 lg:max-h-[700px] 3xl:max-h-max lg:px-4 overflow-auto flex flex-col gap-8 lg:gap-4">
                <div className="flex flex-wrap items-center gap-4 justify-between font-semibold text-gray-300">
                    <h1 className="text-2xl md:text-3xl 2xl:text-4xl 3xl:text-5xl line-clamp-2">
                        Placeholder
                    </h1>
                    <div className="flex items-center gap-1">

                    </div>
                </div>
                <p className="text-base 2xl:text-lg 3xl:text-xl text-justify text-gray-300">
                    Experimente o poder sem limites da Specialized Kenevo, a bicicleta elétrica todo-o-terreno que redefine o conceito
                    de aventura. Com um motor potente, design robusto e bateria de longa duração, a Kenevo é a escolha
                    perfeita para explorar trilhas desafiadoras. Controle personalizado, conectividade inteligente e durabilidade
                    excepcional fazem dela a companheira ideal para ciclistas ávidos. Liberte sua paixão pela aventura - adquira a
                    Specialized Kenevo e eleve suas pedaladas a um novo patamar!
                </p>
            </div>
        </div>
    )
}