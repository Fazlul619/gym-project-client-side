import useAllNewsletterSubscriber from "../../../hooks/useAllNewsletterSubscriber";
import usePaymentInfo from "../../../hooks/usePaymentInfo";
import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const colors = ["#8884d8", "#82ca9d"];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// Aggregate data

const Balance = () => {
  const [allNewsletterSubscriber] = useAllNewsletterSubscriber();
  const [allPaymentInfo] = usePaymentInfo();

  const totalNewsletterSubscribers = allNewsletterSubscriber.length;
  const totalPaidMembers = allPaymentInfo.length;

  const chartData = [
    { name: "Newsletter Subscribers", count: totalNewsletterSubscribers },
    { name: "Paid Members", count: totalPaidMembers },
  ];
  console.log(allPaymentInfo);
  let sum = 0;

  allPaymentInfo.map((info) => (sum = sum + info.price));

  return (
    <div className="font-semibold text-3xl text-center">
      <div>
        <h2>Total Balance: {sum}</h2>
      </div>

      {allPaymentInfo.slice(0, 6).map((info) => {
        return (
          <div key={info._id}>
            <h3>{info.userName}</h3>
            <p>{info.userEmail}</p>
            <p>{info.package}</p>
            <div>
              <p>{info.slot}</p>
              <span>{info.time}</span>
            </div>
            <p>Trainer Name: {info.trainerName}</p>
            <p>{info.price}</p>
          </div>
        );
      })}

      <div>
        <div
          className="bg-[#13131308] rounded-xl my-10"
          style={{ width: "100%", height: 522 }}
        >
          <ResponsiveContainer>
            <BarChart
              width={1600}
              height={522}
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar
                dataKey="count"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Balance;
