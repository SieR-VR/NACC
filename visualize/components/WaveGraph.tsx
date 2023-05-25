import React from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

import { Wave } from "../../src/wave";

export default function WaveGraph({ data, name }: Wave) {
  return (
    <BarChart width={600} height={300} data={data.map(([_, v]) => ({ amp: v }))}>
      <Bar dataKey="amp" stroke="#8884d8" strokeWidth={1} />
      <XAxis />
      <YAxis /> 
    </BarChart>
  );
}