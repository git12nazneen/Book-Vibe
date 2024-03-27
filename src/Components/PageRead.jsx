import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getStoredReadBook } from '../Utility/localstorage';


const PageRead = () => {
  const pageRead = useLoaderData();
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedReadBooks = getStoredReadBook();
    const readBooksData = pageRead.filter(book => storedReadBooks.includes(book.id));

    const chartData = readBooksData.map(read => ({
      name: read.bookName,
      uv: read.totalPages,
    }));

    setData(chartData);
  }, [pageRead]);

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };


  return (


        <ResponsiveContainer>
   <div style={{width: "100%", height:"80vh"}}>
   <BarChart
      width={600}
      height={500}
      data={data}
      margin={{
        top: 30,
        right: 30,
        left: 20,
        bottom: 25,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Bar>
    </BarChart>
   </div>
  </ResponsiveContainer>
  );
};

export default PageRead;
