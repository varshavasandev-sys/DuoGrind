import { useState } from "react";

export default function useStats() {
  // later: replace with AsyncStorage / backend API
  const [todayMinutes, setTodayMinutes] = useState(20);
  const [streak, setStreak] = useState(3);

  return {
    todayMinutes,
    streak,
    setTodayMinutes,
    setStreak,
  };
}
