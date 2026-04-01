import React, { use } from "react";
import Card from "./Card";

const Cards = ({ dataPromise, chart, setChart }) => {
  const data = use(dataPromise);
  const tools = data.data;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Card key={tool.id} tool={tool} chart={chart} setChart={setChart} />
        ))}
      </div>
    </>
  );
};

export default Cards;
