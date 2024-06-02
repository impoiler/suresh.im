"use client";

import { cn } from "@/lib/utils";
import { randomNumber } from "@poiler/utils";
import WavesurferPlayer, { WavesurferProps } from "@wavesurfer/react";
import { Loader2, PauseCircleIcon, PlayCircleIcon } from "lucide-react";
import { useMemo, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import Hover from "wavesurfer.js/dist/plugins/hover.esm.js";
import { Button } from "../ui/button";

interface ReaderProps extends WavesurferProps {
  className?: string;
  slug: string;
}

const ERROR_MESSAGES = [
  "Refresh and cross your fingers 🤞",
  "Read like a bookworm 📖",
  "Take a break, try later 🕰️",
  "Audio on a coffee break ☕️",
  "Couldn't find the audio 😕",
  "Audio on vacation 🌴",
  "Elves are slacking off 🧝‍♂️",
  "Audio skipped town. Try soon! 🏃‍♂️",
];

export default function Reader(props: ReaderProps) {
  const { slug, className } = props;
  const audioUrl = `/blog/audio/${slug}.mp3`;
  const [error, setError] = useState(false);
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleReady = (ws: WaveSurfer) => {
    setWavesurfer(ws);
    setIsPlaying(false);
    setIsLoading(false);
  };

  const handlePlayPause = () => {
    if (wavesurfer) {
      wavesurfer.playPause();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className={cn(
        "fixed left-1/2 bottom-2 max-w-2xl px-2 mx-auto -translate-x-1/2 z-10 w-full",
        className
      )}
    >
      <div className="flex gap-2 items-center bg-background h-11 px-3 border rounded-full relative">
        <Button
          className="p-0 h-8 w-8 rounded-full animate-fade text-zinc-400 font-medium z-[2]"
          variant="ghost"
          onClick={handlePlayPause}
        >
          {isLoading ? (
            <Loader2 size={22} className="animate-spin" />
          ) : isPlaying ? (
            <PauseCircleIcon size={20} />
          ) : (
            <PlayCircleIcon size={20} />
          )}
        </Button>
        <div className="w-full animate-fade">
          {error && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2 text-center text-sm text-zinc-400 leading-[normal] animate-fade">
              {ERROR_MESSAGES[randomNumber(0, ERROR_MESSAGES.length - 1)]}
            </div>
          )}

          <WavesurferPlayer
            height={40}
            waveColor="white"
            progressColor="gray"
            url={audioUrl}
            autoScroll={true}
            barHeight={1}
            onReady={handleReady}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            barGap={1}
            barWidth={1}
            plugins={useMemo(() => {
              return [
                Hover.create({
                  lineColor: "#ff0000",
                  lineWidth: 2,
                  labelBackground: "#555",
                  labelColor: "#fff",
                  labelSize: "12px",
                }),
              ];
            }, [])}
            onError={(e) => {
              setError(true);
            }}
            {...props}
          />
        </div>
      </div>
    </div>
  );
}
