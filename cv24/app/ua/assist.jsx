"use client";

import { useState, useTransition, useEffect } from "react";
// import { generate, getData, generateObj, streamComponent } from "./api/actions";
// import { readStreamableValue } from "ai/rsc";
import { askAssistant2, createThread } from "../api/assistant";

export const dynamic = "force-dynamic";
export const maxDuration = 30;
export default function Assist() {
    const [threadid, setThreadid] = useState("");
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState([]);
    const [isPending, startTransition] = useTransition();
  
    useEffect(() => {
      (async () => {
        setThreadid(await createThread());
      })();
    }, []);
  
    async function handleSubmit(event) {
      event.preventDefault();
  
      startTransition(async () => {
        const answer = await askAssistant2(query, threadid);
        setQuery("");
        console.log(answer);
  
        setResponse(answer);
      });
    }
  
    return (
      <div className="">
        <main className="p-4">
          <form onSubmit={handleSubmit}>
            <input
              disabled={isPending}
              className="dark:bg-gray-500 disabled:bg-slate-100"
              type="text"
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
            <p className={isPending? "text-white": "text-gray-600" }>Loading...</p>
            
          </form>
          {<p>{`thread_id: ${threadid}`}</p>}
          <hr />
          {response.length > 0 && (
            <div>
             
              <ul>
                {response.map((item, n) => (
                  <li key={`answer_${n}`}>{`${item.role}: ${item.text}`}</li>
                ))}
              </ul>
            </div>
          )}
          <hr />
        </main>
      </div>
    );
}
