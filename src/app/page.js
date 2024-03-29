'use client'

import React from "react";
import Sholat from "./component/sholat";
import Waktu from "./component/waktu";
import Loading from './material/loading.jsx'
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Waktu />
          <Sholat />
        </div>
      )}
    </div>
  );
}
