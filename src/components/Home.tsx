import { useState } from "react";
import TextToSpeech from "./TextToSpeech";

const Home = () => {
  const [inputText, setInputText] = useState("Welcom to ....");

  return (
    <main className="w-screen flex flex-col justify-center items-center h-screen bg-gradient-to-tr flex  from-indigo-950 to-teal-900">
      <section className=" w-full md:w-1/2">
        <textarea
          placeholder="Type something and listen"
          className="h-96 w-full resize-none bg-white bg-opacity-5 text-white text-lg p-4 rounded-md outline-none "
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </section>
      <TextToSpeech text={inputText} />
    </main>
  );
};

export default Home;
