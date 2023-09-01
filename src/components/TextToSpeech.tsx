import { useState } from "react";

type TextToSpeechProps = {
  text: string;
};

const TextToSpeech = ({ text }: TextToSpeechProps) => {
  const speech = new SpeechSynthesisUtterance();
  speech.text = text;
  const handleSpeak = () => {
    speechSynthesis.speak(speech);
  };

  const handlePause = () => {
    speechSynthesis.pause();
  };

  return (
    <section className="flex mt-4 w-full md:w-1/2  justify-between">
      <button className="text-to-speech-btn" onClick={handleSpeak}>
        Listen
      </button>
      <button className="text-to-speech-btn" onClick={handlePause}>
        Pause
      </button>
    </section>
  );
};

export default TextToSpeech;
