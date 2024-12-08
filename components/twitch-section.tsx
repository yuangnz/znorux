'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TWITCH_CHANNEL = 'znorux';

export default function TwitchStream() {
    const [isLive, setIsLive] = useState(false);
    const [latestVodId, setLatestVodId] = useState('');
    const [hostname, setHostname] = useState('');

    useEffect(() => {
        setHostname(window.location.hostname); // Obtén el hostname del cliente

        const checkStreamStatus = async () => {
            try {
                // Consulta el estado del stream en vivo
                const response = await fetch(`https://api.twitch.tv/helix/streams?user_login=${TWITCH_CHANNEL}`, {
                    headers: {
                        'Client-ID': process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID!,
                        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TWITCH_ACCESS_TOKEN!}`,
                    },
                });

                const data = await response.json();

                // Verifica que los datos sean válidos antes de acceder a `data.data.length`
                const streams = data?.data || [];
                setIsLive(streams.length > 0);

                // Si no está en vivo, consulta el último VOD
                if (streams.length === 0) {
                    const vodResponse = await fetch(`https://api.twitch.tv/helix/videos?user_id=${process.env.NEXT_PUBLIC_TWITCH_USER_ID}&type=archive`, {
                        headers: {
                            'Client-ID': process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID!,
                            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TWITCH_ACCESS_TOKEN!}`,
                        },
                    });

                    const vodData = await vodResponse.json();
                    const vods = vodData?.data || [];

                    if (vods.length > 0) {
                        setLatestVodId(vods[0].id);
                    }
                }
            } catch (error) {
                console.error('Error fetching Twitch data:', error);
            }
        };

        checkStreamStatus();
        const interval = setInterval(checkStreamStatus, 60000); // Verifica cada minuto
        return () => clearInterval(interval);
    }, []);

    return (
        <>
        
            <Card className="bg-black border-l-purple-950 border-y-gray-950 border-r-gray-950">

                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white">
                        Twitch Stream
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video">
                        {/* Renderiza el iframe solo si el hostname está disponible */}
                        {hostname && (
                            <iframe
                                src={`https://player.twitch.tv/?channel=${TWITCH_CHANNEL}&parent=${hostname}&muted=true${!isLive && latestVodId ? `&video=${latestVodId}` : ''}`}
                                height="100%"
                                width="100%"
                                allowFullScreen
                            />
                        )}
                    </div>
                    <div className="mt-4 text-center">
                        <a
                            href={`https://www.twitch.tv/${TWITCH_CHANNEL}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Ver en Twitch
                        </a>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
