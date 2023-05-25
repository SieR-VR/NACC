import React from "react";
import { LineChart, Line } from "recharts";

import { WaveRaw } from "../../src/wave";

export default function WaveGraph({ data, name }: WaveRaw) {
  return (
    <LineChart width={300} height={300} data={data.map((v) => ({ amp: v }))}>
      <Line dataKey="amp" stroke="#8884d8" strokeWidth={1} dot={{display: "none"}}/>
    </LineChart>
  );
}