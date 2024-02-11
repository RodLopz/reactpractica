import React from 'react';

const VideoPlayer = ({ src }) => {
  return (
    <section className="video-personal">
      <h2>Mi Video</h2>
      <video controls width="400">
        <source src={src} type="video/mp4" />
        {/* Asegúrate de proporcionar la ruta correcta al archivo de video webm si es necesario */}
        Tu navegador no soporta el elemento de video.
      </video>
    </section>
  );
}

export default VideoPlayer;
