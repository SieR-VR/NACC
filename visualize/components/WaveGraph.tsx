import React from "react";
import { LineChart, Line } from "recharts";

import { WaveRaw } from "../../src/wave";

export default function WaveGraph({ data, name }: WaveRaw) {
  return (
    <LineChart width={400} height={100} data={data}>
      <Line type="monotone" dataKey="amplitude" stroke="#8884d8" />
    </LineChart>
  );
}