import { useState } from "react";
import TextToSpeech from "./TextToSpeech";
import TextToSpeechImage from "../assets/text-to-speech.png";
const Home = () => {
  const [inputText, setInputText] = useState("");

  return (
    <main className="w-screen  flex-col justify-center items-center h-screen bg-gradient-to-tr flex  from-indigo-950 to-teal-900">
      <img
        className="bg-white my-5 rounded-lg bg-opacity-50"
        src={TextToSpeechImage}
      />
      <section className=" w-full md:w-1/2 px-4 md:px-0">
        <textarea
          id="text-input"
          placeholder="Type something and listen..."
          className="h-48  md:h-96 w-full resize-none placeholder:text-white bg-white bg-opacity-5 text-white text-lg p-4 rounded-md outline-none "
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </section>
      <TextToSpeech text={inputText} />
    </main>
  );
};

export default Home;
