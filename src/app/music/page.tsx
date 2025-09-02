"use client";
import { useState, useRef } from "react";

type Song = {
  title: string;
  file: string;
};

const songs: Song[] = [
  { title: "Song 1", file: "/songs/song1.mp3" },
  { title: "Song 2", file: "/songs/song2.mp3" },
  { title: "Song 3", file: "/songs/song3.mp3" },
  { title: "Song 4", file: "/songs/song4.mp3" },
  { title: "Song 5", file: "/songs/song5.mp3" },
  { title: "Song 6", file: "/songs/song6.mp3" },
  { title: "Song 7", file: "/songs/song7.mp3" },
  { title: "Song 8", file: "/songs/song8.mp3" },
];

export default function Music() {
  const [currentSong, setCurrentSong] = useState<Song>(songs[0]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSong = (song: Song) => {
    setCurrentSong(song);
    if (audioRef.current) {
      audioRef.current.src = song.file;
      audioRef.current.play().catch((err) => {
        console.error("Playback failed:", err);
      });
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">🎵 Music Player</h1>

      {/* Song list */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {songs.map((song, index) => (
          <button
            key={index}
            onClick={() => playSong(song)}
            className={`px-4 py-2 rounded-lg transition ${
              currentSong.title === song.title
                ? "bg-green-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {song.title}
          </button>
        ))}
      </div>

      {/* Now playing */}
      <div className="mt-10 text-center">
        <p className="text-lg font-medium">Now Playing:</p>
        <p className="text-xl font-bold text-green-400 mt-1">
          {currentSong.title}
        </p>
        <audio ref={audioRef} controls className="mt-4 w-72" />
      </div>
    </main>
  );
}
