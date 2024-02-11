import React from 'react';

const AudioPlayer = ({ src }) => {
  return (
    <section className="audio-reproduccion">
      <h2>Reproductor de Audio</h2>
      <audio controls>
        <source src={src} type="audio/ogg" />
      </audio>
    </section>
  );
}

export default AudioPlayer;
