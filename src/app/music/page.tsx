"use client";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Music2 } from "lucide-react";

type Song = {
  title: string;
  file: string;
};

const songs: Song[] = [
  { title: "Song 1", file: "/songs/song1.mp3" },
  { title: "Song 2", file: "/songs/song2.mp3" },
  { title: "Song 3", file: "/songs/song3.mp3" },
  { title: "Song 4", file: "/songs/song4.mp3" },
];

export default function Music() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentSong = songs[currentIndex];

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.error(err));
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    if (currentIndex < songs.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentTime(0);
    }
  };

  const playPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentTime(0);
    }
  };

  // Update currentTime as song plays
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setSongDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      if (currentIndex < songs.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setCurrentTime(0);
      } else {
        setIsPlaying(false); // Stop after last song
      }
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setSongDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setSongDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentIndex]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  };

  // Auto-play current song if isPlaying changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentSong.file;
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [currentIndex, isPlaying]);

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-6">
      <h1 className="text-3xl font-bold mb-8">🎶 Music Player</h1>

      {/* Album Art */}
      <div className="w-56 h-56 bg-gray-800 rounded-xl flex items-center justify-center shadow-lg mb-6">
        <Music2 className="w-20 h-20 text-gray-400" />
      </div>

      {/* Song Title */}
      <p className="text-xl font-semibold mb-4">{currentSong.title}</p>

      {/* Progress Bar */}
      <div className="w-72 mb-6">
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="w-full"
        />
        <div className="flex justify-between text-sm mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center space-x-6 mb-6">
        <button onClick={playPrev} className="p-3 rounded-full bg-gray-700 hover:bg-gray-600">
          <SkipBack className="w-6 h-6" />
        </button>

        <button
          onClick={togglePlay}
          className="p-5 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>

        <button onClick={playNext} className="p-3 rounded-full bg-gray-700 hover:bg-gray-600">
          <SkipForward className="w-6 h-6" />
        </button>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} className="hidden" />
    </main>
  );
}
