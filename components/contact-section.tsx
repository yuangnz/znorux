"use client";
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MessageSquare, Users, Briefcase, Twitter, Instagram, Facebook, ComputerIcon as Steam, Twitch } from 'lucide-react'


const socialLinks = [
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/yourusername' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/yourusername' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/yourusername' },
    { name: 'Steam', icon: Steam, url: 'https://steamcommunity.com/id/yourusername' },
    { name: 'Twitch', icon: Twitch, url: 'https://twitch.tv/yourusername' },
]

export default function ContactSection() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFormStatus('submitting')
        // Aquí iría la lógica para enviar el formulario
        // Por ahora, simularemos un envío exitoso después de 2 segundos
        setTimeout(() => {
            setFormStatus('success')
        }, 2000)
    }

    return (
        <section className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-24 py-24 bg-gradient-to-tl from-zinc-800 to-black rounded-xl">
            <div className="max-w-3xl mx-auto space-y-12">

                <Card className="dark border-purple-950">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Enviame un mensaje</CardTitle>
                        <CardDescription>
                            Completa el formulario para colaboraciones, patrocinios o mensajes de fans.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-white-400">Nombre</label>
                                    <div className="relative">
                                        <Input id="name" placeholder="Tu nombre" className="dark border-gray-700 text-white pl-10" required />
                                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-200">Email</label>
                                    <div className="relative">
                                        <Input id="email" type="email" placeholder="tu@email.com" className="dark border-gray-700 text-white pl-10" required />
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-200">Asunto</label>
                                <Select>
                                    <SelectTrigger className="dark border-gray-700 text-white">
                                        <SelectValue placeholder="Selecciona un asunto" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="collaboration">Colaboración</SelectItem>
                                        <SelectItem value="sponsorship">Patrocinio</SelectItem>
                                        <SelectItem value="fanmail">Mensaje de fan</SelectItem>
                                        <SelectItem value="other">Otro</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-200">Mensaje</label>
                                <div className="relative">
                                    <Textarea id="message" placeholder="Tu mensaje aquí..." className="dark border-gray-700 text-white min-h-[150px] pl-10" required />
                                    <MessageSquare className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                                </div>
                            </div>
                            <Button type="submit" className="w-full dark" disabled={formStatus === 'submitting'}>
                                {formStatus === 'submitting' ? 'Enviando...' : 'Enviar mensaje'}
                            </Button>
                            {formStatus === 'success' && (
                                <p className="text-green-400 text-center">¡Mensaje enviado con éxito!</p>
                            )}
                            {formStatus === 'error' && (
                                <p className="text-red-400 text-center">Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.</p>
                            )}
                        </form>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card className="dark border-gray-800">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold flex items-center">
                                <Mail className="mr-2 h-5 w-5" />
                                Email de negocios
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300">znorux@znorux.com</p>
                        </CardContent>
                    </Card>
                    <Card className="dark border-gray-800">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold flex items-center">
                                <Briefcase className="mr-2 h-5 w-5" />
                                Representante
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300">rep@agencia.com</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="">
                
                <div className="flex flex-wrap justify-center gap-6 md:mt-12">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white to-purple-500 p-0.5">
                                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center transition-transform group-hover:scale-90">
                                    <social.icon className="w-8 h-8 text-white group-hover:text-purple-400 transition-colors" />
                                </div>
                            </div>
                            <span className="sr-only">{social.name}</span>
                            
                        </a>
                    ))}
                    
                </div>
                <h3 className="text-3xl font-bold text-center mt-6">Redes sociales</h3>
            </div>
        </section>
    )
}

