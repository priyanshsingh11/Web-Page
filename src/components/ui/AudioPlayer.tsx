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
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="fixed bottom-6 left-6 z-50"
        >
            <div className="relative group">
                {/* Main Button */}
                <button
                    onClick={togglePlay}
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center glass-card border border-primary/20 transition-all duration-300 ${isPlaying ? 'shadow-[0_0_20px_rgba(var(--primary),0.3)]' : ''
                        }`}
                >
                    {/* Visualizer Pulse */}
                    {isPlaying && (
                        <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
                    )}

                    {/* Icon */}
                    <div className="relative z-10 text-primary">
                        {isPlaying ? (
                            <Music className="w-5 h-5 animate-spin-slow" />
                        ) : (
                            <Music className="w-5 h-5 opacity-50 transition-opacity" />
                        )}
                    </div>

                </button>
            </div>
        </motion.div>
    );
};

export default AudioPlayer;
