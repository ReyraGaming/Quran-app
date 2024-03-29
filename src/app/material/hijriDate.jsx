import { useState, useEffect } from "react";
import axios from "axios";;
const HijriDate = () => {
  const [hijriDate, setHijriDate] = useState("");

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const response = await axios.get(
          "https://api.aladhan.com/v1/timings/23-03-2024?latitude=0.5387&longitude=116.4194"
        );
        const data = response.data;
        const hijriday = data.data.date.hijri.day
        const hijrimonth = data.data.date.hijri.month.en
        const hijriyear = data.data.date.hijri.year
        const hijriDateString = `${hijriday}  ${hijrimonth} ${hijriyear}`
        setHijriDate(hijriDateString);
      } catch (error) {
        console.error("Error fetching Hijri Date", error);
      }
    };

    fetchDate();
  }, []);

  return (
    <div>
      <p>{hijriDate}</p>
    </div>
  );
};

export default HijriDate;
