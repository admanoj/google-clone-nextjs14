"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export default function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [randomWord, setRandomWord] = useState(""); // State for random word
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  // Handle form submission for search
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return; // Do nothing if input is empty
    router.push(`/search/web?searchTerm=${input}`); // Navigate to search page
  }

  // Function to generate a random word
  async function generateRandomWord() {
    try {
      const response = await fetch(
        "https://random-word-api.herokuapp.com/word"
      );
      const data = await response.json();
      if (data.length > 0) {
        setRandomWord(data[0]); // Set random word from API response
      } else {
        setRandomWord("fallback"); // Fallback in case no word is returned
      }
    } catch (error) {
      console.error("Failed to fetch random word:", error);
      setRandomWord("fallback"); // Fallback if fetch fails
    }
  }

  // Handle random search functionality
  function randomSearch() {
    router.push(`/search/web?searchTerm=${randomWord}`); // Navigate to search page with random word
  }

  // useEffect to generate a random word when component mounts
  useEffect(() => {
    generateRandomWord(); // Generate a random word on mount
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <BsFillMicFill className="text-lg" />
      </form>

      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8 ">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {randomSearchLoading ? (
            <img
              src="/spinner.svg" // Make sure this path is correct
              alt="loading..."
              className="h-6 text-center"
            />
          ) : (
            "I am Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
