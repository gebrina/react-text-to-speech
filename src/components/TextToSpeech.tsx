import { useEffect, useState } from "react";

type TextToSpeechProps = {
  text: string;
};

const TextToSpeech = ({ text }: TextToSpeechProps) => {
  const speech = new SpeechSynthesisUtterance();
  speech.text = text;
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSpeak = () => {
    setIsPlaying(true);
    speechSynthesis.speak(speech);
  };

  const handlePauseandResume = () => {
    if (isPlaying) {
      speechSynthesis.pause();
      setIsPlaying(false);
    } else {
      speechSynthesis.resume();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    speech.text = text;
  }, [text]);

  return (
    <section className="flex mt-4 w-full md:w-1/2  px-4 md:px-0 justify-between">
      <button className="text-to-speech-btn" onClick={handleSpeak}>
        Listen
      </button>
      <button className="text-to-speech-btn" onClick={handlePauseandResume}>
        {isPlaying ? "Resume" : "Pause"}
      </button>
    </section>
  );
};

export default TextToSpeech;
