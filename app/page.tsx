"use client";
import { useState } from "react";
import { Button, Input } from 'antd';
import { useRouter } from "next/navigation";

export default function Home() {
  const nav = useRouter();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Welcome to the AI Analyzer
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Enter text to analyze using OpenAI's GPT-4o-mini model.
      </p>
      <Button
        type="primary"
        size="large"
        onClick={() => {
          nav.push("/analyzer");
        }}
      >
        Start Analyzing
      </Button>

    </div>
  );
}
