import React from "react";
import Feed from "./Feed";
import { useContext } from "react";
import DataContext from "../context/DataContext";

function Home() {
  const { searchResults, fetchError, isLoading } = useContext(DataContext)

  return (
    <main className="w-full overflow-y-auto">
      {isLoading &&
        <p className="flex justify-center items-center text-2xl">Loading posts...</p>
      }
      {!isLoading && fetchError &&
        <p className="text-red-500">{fetchError}</p>
      }
      {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults} /> : <p className="p-3 text-2xl text-center text-red-500">No post to display! <div className="text-green-500">You can <span className="font-bold">ADD</span> new Post...</div></p>)}
    </main>
  )
}

export default Home;
