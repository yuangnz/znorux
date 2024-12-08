import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import NVIDIA from "../app/assets/img/NVIDIA.png"
import NZXT from "../app/assets/img/NZXT.png"
import fury from "../app/assets/img/fury.png"
import skinclub from "../app/assets/img/Skinclup.png"

const sponsors = [
    { name: "Kingston Fury", logo: fury },
    { name: "SkinClub", logo: skinclub },
    { name: "NVIDIA", logo: NVIDIA },
    { name: "NZXT", logo: NZXT },
]

export default function ProjectsSection() {
    return (
        <section className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-24 py-24 bg-gradient-to-tl from-zinc-800 to-black">
            <div className="space-y-12">
                <div className="space-y-4">
                    <span className="text-sm tracking-wider text-gray-400 font-semibold">03</span>
                    <h2 className="text-5xl sm:text-6xl font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        PROYECTOS Y
                        <br />
                        COLABORACIONES
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="dark border-purple-950">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Proyectos Personales</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300">
                                Aqui se puede enlistar ciertos proyectos personales que has realizado.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="dark border-purple-950">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Colaboraciones</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300">
                                Y aqui de manera externa con otras personas o empresas. 
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {sponsors.map((sponsor) => (
                            <div key={sponsor.name} className="flex flex-col items-center space-y-4">
                                <div className="w-full h-64 relative brightness-0 invert">
                                    <Image
                                        src={sponsor.logo}
                                        alt={`${sponsor.name} logo`}
                                        layout="fill"
                                        objectFit="contain"
                                        className=""
                                    />
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

