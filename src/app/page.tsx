"use client";

import {KeyboardEvent, useState} from 'react';

export default function Home() {
    const [messages, setMessages] = useState([
        { text: "Привет! Чем могу помочь?", type: "bot" },
    ]);
    const [input, setInput] = useState("");
    const fetchJoke = async () => {
        const res = await fetch("https://v2.jokeapi.dev/joke/Any");
        const data = await res.json();
        return data.type === "single" ? data.joke : `${data.setup} ${data.delivery}`;
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        setMessages([...messages, { text: input, type: "user" }]);
        setInput("");

        const joke = await fetchJoke();
        setMessages((prev) => [...prev, { text: joke, type: "bot" }]);
    };
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    return (
        <div className="flex flex-col h-screen bg-violet-400 p-4">
            <div className="flex-grow overflow-y-auto bg-violet-200 shadow-md rounded-lg p-4">
                <div className="flex flex-col space-y-2">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`p-2 rounded-lg max-w-xs ${
                                msg.type === "bot" ? "self-start bg-violet-500" : "self-end bg-blue-500 text-gray-800"
                            }`}
                        >
                            {msg.text}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-4 flex items-center space-x-2">
                <input
                    type="text"
                    placeholder="Введите сообщение..."
                    className="flex-grow p-2 border bg-violet-100 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}

                />
                <button className="bg-violet-900 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 " onClick={handleSend}>
                    Отправить
                </button>
            </div>
        </div>
    );
}
