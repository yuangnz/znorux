

import { cn } from "@/lib/utils"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const scheduleData = [
    { day: 'Lunes', time: '20:00 - 23:00' },
    { day: 'Miércoles', time: '20:00 - 23:00' },
    { day: 'Viernes', time: '21:00 - 00:00' },
    { day: 'Domingo', time: '19:00 - 22:00' },
]

const notifications = [
    {
        title: "Lunes - Martes",
        description: "20:00 - 23:00",
    },
    {
        title: "Miércoles - Jueves",
        description: "20:00 - 23:00",
    },
    {
        title: "Viernes - Sábado",
        description: "21:00 - 00:00",
    },
    {
        title: "Domingo",
        description: "19:00 - 22:00",
    },
]

type CardProps = React.ComponentProps<typeof Card>

export default function StreamSchedule({ className, ...props }: CardProps) {
    return (
        <Card className={cn("w-[380px] dark", className)} {...props}>
            <CardHeader>
                <CardTitle>Horario de Streams</CardTitle>
                <CardDescription>Nunca los sigo pero es una nocion.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div>
                    {notifications.map((notification, index) => (
                        <div
                            key={index}
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    {notification.title}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {notification.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <span>Dakhar: Dificil saber todo esto en un Mockup. Pero vamos con una nocion</span>
            </CardFooter>
        </Card>
    )
}

