"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  console.log(genre, "genre");
  const tabs = [
    { name: "En popüler", url: "popular" },
    { name: "En son", url: "latest" },
    { name: "Yakında Gelecekler", url: "upcoming" },
  ];
  return (
    <div className="p-5 my-3 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7">
      {tabs.map((tab, i) => (
        <Link
          className={`cursor-pointer hover:opacity-75 transition-opacity ${
            tab.url === genre ? "underline underline-offset-8 text-amber-600" : ""
          }`}
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
