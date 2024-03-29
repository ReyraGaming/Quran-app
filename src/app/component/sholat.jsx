"use client";

import { useState, useEffect } from "react";
import Card from "../material/card";
import axios from "axios";
import Data from "../data/praynames";

const Sholat = () => {
  const [prayerTime, setPrayerTime] = useState([""]);
  const [nextPrayerTimes, setNextPrayerTimes] = useState("");

  useEffect(() => {
    const prayerTimes = async () => {
      try {
        const response = await axios.get(
          "https://api.aladhan.com/v1/timings/23-03-2024?latitude=-0.5387&longitude=117.092110&"
        );
        const data = response.data;
        const timesData = data.data.timings;
        const combinedData = { ...Data, ...timesData };
        const selectedTimes = Object.entries(combinedData).slice(0, 6);
        const filterTimes = selectedTimes.filter(
          (selected) => selected !== "Sunrise" && selected !== "Sunset"
        );
        setPrayerTime(filterTimes);
      } catch (error) {
        console.error("Error :", error);
      }
    };

    prayerTimes();
  }, []);

  return (
    <div className="p-4 mx-[100px]">

      {prayerTime.map(([title, time], index) => (
        <div key={index}>
          <Card name={title} time={time} />
        </div>
      ))}
    </div>
  );
};

export default Sholat;
