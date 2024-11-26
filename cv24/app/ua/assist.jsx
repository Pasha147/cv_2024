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

    !threadid.length && setThreadid(await createThread());
    threadid.length &&
      startTransition(async () => {
        const answer = await askAssistant2(query, threadid);

        setQuery("");
        console.log(answer);

        setResponse(answer);
      });
  }

  return (
    <>
      {assBtn && (
        <div className="absolute max-h-[1/2] w-full left-0 bottom-0 border-2 rounded-lg p-2 bg-slate-500 bg-opacity-50">
          {response.length > 0 && (
            <div>
              <p>{`thread_id: ${threadid}`}</p>
              <ul className="flex flex-col-reverse ">
                {response.map((item, n) => (
                  <li key={`answer_${n}`}>{`${item.role}: ${item.text}`}</li>
                ))}
              </ul>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <input
              disabled={isPending}
              className="dark:bg-gray-500 disabled:bg-slate-100 block mb-1"
              type="text"
              minLength="3"
              maxLength="60"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
            />
            <textarea
              disabled={isPending}
              className="dark:bg-gray-500 disabled:bg-slate-100 block prom-width"
              type="text"
              minLength="5"
              rows="3"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your question"
            />
            <button
              className="dark:bg-teal-700 m-2 p-2 rounded disabled:bg-teal-400"
              type="submit"
              disabled={isPending}
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
        className="absolute right-4 bottom-4 flex items-center justify-center w-24 h-24 bg-black rounded-full shadow-neon-gradient transition-shadow duration-300 hover:shadow-neon-gradient-hover"
      >
        <img
          src="assist.webp"
          alt="Assistant Icon"
          className="w-4/5 h-4/5 rounded-full"
        />
      </button>
    </>
  );
}
