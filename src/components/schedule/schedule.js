import React, { useState, useEffect } from "react";
import Appointment from "./appointment";
import "./schedule.css";

async function fetchData(fnSuccess, fnError) {
  const res = await fetch("/treatment.json");
  res
    .json()
    .then(res => fnSuccess(res))
    .catch(err => fnError(err));
}

export default function Schedule() {
  const [errors, setErrors] = useState(false);
  const [treatments, setTreatments] = useState([{}]);

  useEffect(() => {
    fetchData(setTreatments, setErrors);
  }, []);

  return (
    <div>
      <div className="headline">
        <h1>SCHEDULE</h1>
      </div>
      <ul className="treatment-list">
        {treatments.map((t, index) => (
          <Appointment key={index} info={t} />
        ))}
      </ul>
    </div>
  );
}
