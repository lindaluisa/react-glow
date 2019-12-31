import React, { useState, useEffect } from "react";
import Appointment from './appointment';

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
      <h1>Schedule</h1>
      <ul className="treatment-list">
        {
          treatments.map((t, index) => <Appointment key={index} info={t} />)
        }
      </ul>
    </div>
  );
}
