// App.js
import React from 'react';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import AudioPlayer from './components/AudioPlayer';
import VideoPlayer from './components/VideoPlayer';
import Stats from './components/Stats';
import Footer from './components/Footer';
import './Tarea1.css'; // Importa el archivo CSS principal

function App() {
  return (
    <div>
      <Header />
      <PersonalInfo />
      <AudioPlayer src="lluvia2.ogg" />
      <VideoPlayer src="goles.mp4" />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;
