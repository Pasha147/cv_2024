"use client";

import { useState, useTransition, useEffect } from "react";
// import { generate, getData, generateObj, streamComponent } from "./api/actions";
// import { readStreamableValue } from "ai/rsc";
import { askAssistant2, createThread } from "../api/assistant";

export const dynamic = "force-dynamic";
export const maxDuration = 30;
export default function Assist() {
  const [assBtn, setAssBtn] = useState(false);
  const [threadid, setThreadid] = useState("");
  const [query, setQuery] = useState("");
  const [userName, setUserName] = useState("Pasha");
  const [response, setResponse] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    (async () => {
      // setThreadid(await createThread());
    })();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    let thre = threadid;

    if (!thre.length) {
      thre = await createThread();
    }

    startTransition(async () => {
      const answer = await askAssistant2(query, thre);
      setThreadid(thre);
      setQuery("");
      console.log(answer);

      setResponse(answer);
    });
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Відміняємо перенесення рядка
      document.getElementById("submitBtn")?.click(); // Тригеримо кнопку сабміту
    }
  };

  return (
    <>
      {assBtn && (
        <div className="absolute max-h-[1/2] w-full left-0 bottom-0 tallscreen:bottom-8">
          {response.length > 0 && (
            <div className="bg-[#faebd7] text-[#6d6565] bg-opacity-97 mb-2 border-2 rounded-lg m-2 p-2">
              <p>{`thread_id: ${threadid}`}</p>
              <ul className="flex flex-col-reverse ">
                {response.map((item, n) => (
                  <li key={`answer_${n}`}>{`${item.role}: ${item.text}`}</li>
                ))}
              </ul>
            </div>
          )}
          <form
            className="border-2 rounded-lg  bg-slate-500 bg-opacity-95 m-2 p-2"
            onSubmit={handleSubmit}
          >
            <input
              disabled={isPending}
              className="bg-[#faebd7] text-[#6d6565] disabled:bg-slate-700 block mb-1"
              type="text"
              minLength="3"
              maxLength="60"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
            />
            <textarea
              disabled={isPending}
              className="bg-[#faebd7] disabled:bg-slate-700 
              text-[#6d6565] block prom-width"
              type="text"
              minLength="5"
              rows="3"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your question"
              onKeyDown={handleKeyPress}
            />
            <button
              className="dark:bg-teal-700 m-2 p-2 rounded disabled:bg-teal-400"
              type="submit"
              disabled={isPending}
              id="submitBtn"
            >
              Ask!
            </button>
            <span className={isPending ? "text-white" : "text-gray-600"}>
              Loading...
            </span>
          </form>
        </div>
      )}
      <button
        onClick={() => setAssBtn(!assBtn)}
        className="absolute  right-4 bottom-4 tallscreen:bottom-8 flex items-center justify-center w-16 h-16 rounded-full shadow-neon-gradient transition-shadow duration-300 hover:shadow-neon-gradient-hover"
      >
        <img
          src="assist.jpg"
          alt="Assistant Icon"
          className="w-full h-full rounded-full"
        />
      </button>
    </>
  );
}
