import Image from "next/image";
import JAJAJA from "../app/assets/img/BUENISIMAESTAIMGJAJA.jpg";

export default function AboutSection() {
    return (
        <section className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-24 py-24 bg-gradient-to-br from-black to-zinc-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Título de la sección */}
                <div className="lg:col-span-12 space-y-8 mb-12">
                    <div className="space-y-4">
                        <span className="text-sm tracking-wider text-gray-400 font-semibold">01</span>
                        <h2 className="text-7xl sm:text-8xl font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                            SOBRE MÍ
                        </h2>
                    </div>
                </div>

                {/* Imagen */}
                <div className="lg:col-span-4 space-y-2">
                    <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                        <Image
                            src={JAJAJA}
                            alt="About section image"
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>

                {/* Textos pequeños y texto grande */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Textos pequeños */}
                    <p className="font-light text-gray-300 text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima, nobis fugit, maxime dolor magnam eius iusto, saepe soluta sint neque quam quos.
                    </p>
                    <p className="font-light text-gray-300 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima, nobis fugit, maxime dolor magnam eius iusto, saepe soluta sint neque quam quos.

                    </p>
                    <p className="font-light text-gray-300 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima, nobis fugit, maxime dolor magnam eius iusto, saepe soluta sint neque quam quos.
                    </p>
                    <p className="font-light text-gray-300 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima, nobis fugit, maxime dolor magnam eius iusto, saepe soluta sint neque quam quos.
                    </p>
                    <p className="font-light text-gray-300 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima, nobis fugit, maxime dolor magnam eius iusto, saepe soluta sint neque quam quos.
                    </p>
                    <p className="font-light text-gray-300 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima, nobis fugit, maxime dolor magnam eius iusto, saepe soluta sint neque quam quos.
                    </p>
                    <p className="font-light text-gray-300 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima, nobis fugit, maxime dolor magnam eius iusto, saepe soluta sint neque quam quos.
                    </p>
                    <p className="font-light text-gray-300 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima, nobis fugit, maxime dolor magnam eius iusto, saepe soluta sint neque quam quos.
                    </p>

                    {/* Texto grande que ocupa toda la fila */}
                    <div className="md:col-span-2">
                        <p className="text-8xl font-semibold text-purple-200 leading-snug">
                            LOCO, NO TE RINDAS
                        </p>
                        <p>(aqui me gustaria poner un texto e imagines con de historia de tu vida o bibliografia y alguna frase.)</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
