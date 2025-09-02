"use client";
import { useState, useRef } from "react";

const songs = [
  { title: "Song 1", file: "/songs/song1.mp3" },
  { title: "Song 2", file: "/songs/song2.mp3" },
  { title: "Song 3", file: "/songs/song3.mp3" },
];

export default function Music() {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playSong = (song: { title: string; file: string }) => {
    setCurrentSong(song);
    if (audioRef.current) {
      audioRef.current.src = song.file;
      audioRef.current.play();
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">🎵 Music Player</h1>

      <div className="space-y-4">
        {songs.map((song, index) => (
          <button
            key={index}
            onClick={() => playSong(song)}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
          >
            {song.title}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <p>Now Playing: {currentSong.title}</p>
        <audio ref={audioRef} controls className="mt-4" />
      </div>
    </main>
  );
}

