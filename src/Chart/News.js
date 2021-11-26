import React, { useContext } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import CoinContext from "../contexts/coinContext";

function Chart() {
  const coinCTX = useContext(CoinContext);
  console.log(coinCTX.Chartdata);

  // const data = [
  //   { name: "Page A", uv: 62389.05373707468 },
  //   { name: "Page B", uv: 62193.68335748939 },
  //   { name: "Page B", uv: 32036.303972440524 },
  //   { name: "Page B", uv: 50962.814229250136 },
  //   { name: "Page B", uv: 61999.57837579247 },
  // ];
  // console.log(data);

  const mydata = coinCTX.Chartdata;
  console.log(mydata);

  const newD = mydata.map((mdata) => ({
    name: new Date(mdata[0]).toLocaleDateString("en-US"),
    price: mdata[1],
  }));

  console.log(newD);

  const renderLineChart = (
    <LineChart
      width={600}
      height={300}
      data={newD}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
  return (
    <div>
      <div>{renderLineChart}</div>
    </div>
  );
}

export default Chart;

//width={10} height={10}
