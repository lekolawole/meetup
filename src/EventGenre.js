import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  useEffect(() => { setData(() => getData()); }, [events]);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const data = genres.map((genre) => {
      const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
      return {name: genre, value: value};
    });
    return data;
  }
    

    return (
      <ResponsiveContainer className='data-h2' height={400}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            style={{"fontSize":"12px"}}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} name={entry.name}/>
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
}

export default EventGenre;
