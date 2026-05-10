import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Music } from 'lucide-react';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Initialize audio
        audioRef.current = new Audio('/audio/The_Weeknd_ft_Playboi_Carti_-_Timeless.mp3');
        audioRef.current.loop = true;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch((error) => {
                console.error("Audio playback failed:", error);
            });
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!audioRef.current) return;

        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    return (
        <button
            onClick={togglePlay}
            className={`flex items-center gap-1.5 md:gap-2 px-2.5 py-1.5 md:px-4 md:py-2 text-[8px] md:text-xs font-pixel tracking-widest transition-all ${isPlaying
                    ? 'bg-[#853A17] text-white shadow-[2px_2px_0_0_#000] md:shadow-[4px_4px_0_0_#000] border-[1px] md:border-[2px] border-dashed border-black/50'
                    : 'text-white/70 hover:text-white hover:bg-white/5 border-[1px] md:border-[2px] border-transparent'
                }`}
        >
            <Music className={`w-2.5 h-2.5 md:w-3 md:h-3 ${isPlaying ? 'animate-spin-slow' : 'opacity-70'}`} />
            <span>{isPlaying ? 'PLAYING' : 'MUSIC'}</span>
        </button>
    );
};

export default AudioPlayer;
