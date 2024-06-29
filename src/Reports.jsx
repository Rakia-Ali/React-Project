import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Total User', uv: +20, pv: 2400, amt: 2400 },
  { name: 'Total Employees', uv: +27, pv: 1398, amt: 2210 },
  { name: 'Total Expenses', uv: +2900, pv: 9800, amt: 2290 },
  { name: 'Total Transaction', uv: +10000, pv: 3908, amt: 2000 },
  // { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  // { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  // { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const Reports = () => (
  <div className="flex gap-[80px] mt-[60px]">
    <LineChart
      width={570}
      height={500}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>

    <BarChart
      width={570}
      height={500}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  </div>
  
);

export default Reports;
