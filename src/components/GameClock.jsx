import { useEffect } from "react";
import { useState } from "react";
import { calcGameTime } from "../actions/calcGameTime";

export default function GameClock(props) {
  const [gameTime, setGameTime] = useState(calcGameTime(props.timesList));
  useEffect(() => {
    const interval = setInterval(() =>
      setGameTime(calcGameTime(props.timesList)), 1000);
      return () => {
        clearInterval(interval)
      }
  }, [props.timesList])

  return (
    <div>
      <h1>In-Game Clock</h1>
      <h1>
        {gameTime.gameHours}:
        {gameTime.gameMinutes.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
        })}
        :
        {gameTime.gameSeconds.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
        })}{" "}
        {gameTime.dayNight}
      </h1>
      <p>Day is 7:00 AM to 7:00 PM</p>
      <p>Dawn is 7:00 AM to 7:45 AM</p>
      <p>Dusk is 6:15 PM to 7:00 PM</p>
    </div>
  );
}
