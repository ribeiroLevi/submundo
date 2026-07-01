import { useEffect, useMemo, useRef, useState } from "react";

interface AudioVisualizerProps {
  src: string;
  nome: string;
}

export default function AudioVisualizer({ src, nome }: AudioVisualizerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const animationRef = useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [points, setPoints] = useState<number[]>([]);

  const WIDTH = 900;
  const HEIGHT = 50;
  const CENTER = HEIGHT / 2;

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const context = new AudioContext();
    const analyser = context.createAnalyser();

    analyser.fftSize = 2048;
    analyser.smoothingTimeConstant = 0.85;

    const source = context.createMediaElementSource(audio);

    source.connect(analyser);
    analyser.connect(context.destination);

    const buffer = new Uint8Array(analyser.fftSize);

    const render = () => {
      analyser.getByteTimeDomainData(buffer);

      const samples = 120;
      const step = Math.floor(buffer.length / samples);

      const waveform: number[] = [];

      for (let i = 0; i < samples; i++) {
        const value = (buffer[i * step] - 128) / 128;
        waveform.push(value);
      }

      setPoints(waveform);

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    const play = async () => {
      if (context.state === "suspended") {
        await context.resume();
      }
      setIsPlaying(true);
    };

    const pause = () => setIsPlaying(false);

    audio.addEventListener("play", play);
    audio.addEventListener("pause", pause);
    audio.addEventListener("ended", pause);

    return () => {
      cancelAnimationFrame(animationRef.current!);

      audio.removeEventListener("play", play);
      audio.removeEventListener("pause", pause);
      audio.removeEventListener("ended", pause);

      context.close();
    };
  }, []);

  const path = useMemo(() => {
    if (!points.length) return "";

    let d = "";

    points.forEach((point, index) => {
      const x = (index / (points.length - 1)) * WIDTH;
      const y = CENTER - point * 35;

      if (index === 0) {
        d += `M ${x} ${y}`;
      } else {
        d += ` L ${x} ${y}`;
      }
    });

    return d;
  }, [points]);

  const toggleAudio = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      await audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <div className="flex w-full text-justify max-w-5xl flex-col items-start gap-4 md:gap-6 rounded-[2rem] bg-white p-6 md:p-10 mx-auto">
      <audio ref={audioRef} src={src} preload="auto" hidden />
      <div className="flex w-full flex-row justify-between items-center gap-4">
        <h1 className="text-2xl md:text-4xl font-bold break-words w-full">
          {nome}
        </h1>
        <button
          onClick={toggleAudio}
          className="flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white transition hover:scale-105 active:scale-95"
        >
          {isPlaying ? (
            <svg
              width="24"
              height="24"
              md:width="28"
              md:height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <rect x="5" y="4" width="5" height="16" rx="1" />
              <rect x="14" y="4" width="5" height="16" rx="1" />
            </svg>
          ) : (
            <svg
              width="28"
              height="28"
              md:width="32"
              md:height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>
      <svg
        width="100%"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="overflow-visible mt-2"
      >
        <path
          d={path}
          fill="none"
          stroke="#000000" // Forçado o código hexadecimal ou cor do tema para contrastar bem
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-75 ease-linear"
        />
      </svg>
    </div>
  );
}
