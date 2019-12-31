import React from 'react';

export default function Appointment({info:{name}}) {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}