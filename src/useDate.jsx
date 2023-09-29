import { useState } from "react";

// Custom hook to manipulate dates
export function useDate(initialDate) {
  const [date, setDate] = useState(new Date(initialDate));

  // Function to add days to the date
  const addDays = (daysToAdd) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + daysToAdd);
    setDate(newDate);
  };

  // Function to add months to the date
  const addMonths = (monthsToAdd) => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() + monthsToAdd);
    setDate(newDate);
  };

  return {
    date,
    addDays,
    addMonths,
  };
}
