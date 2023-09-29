import React from "react";
import { useDate } from "./useDate";

function App() {
  // Initialize the hook with a starting date
  const { date, addDays, addMonths } = useDate(new Date());

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-semibold mb-3">Date Manipulation</h1>

      <div>
        <p>Current Date: {date.toDateString()}</p>
      </div>

      <div className="mt-3">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3"
          onClick={() => addDays(1)}
        >
          Add A Day
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => addMonths(1)}
        >
          Add A Month
        </button>
      </div>
    </div>
  );
}

export default App;
