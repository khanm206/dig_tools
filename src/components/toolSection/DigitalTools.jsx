import axios from "axios";
import React, { Suspense, useState } from "react";
import Cards from "./Cards";
import ToolSectionHeader from "./ToolSectionHeader";
import Chart from "./Chart";

const dataPromise = axios.get("/data.json");
const DigitalTools = ({ chart, setChart }) => {
  const [selectedBtn, setSelectedBtn] = useState("products");
  return (
    <section className="w-10/12 mx-auto my-40">
      <ToolSectionHeader
        chart={chart}
        selectedBtn={selectedBtn}
        setSelectedBtn={setSelectedBtn}
      ></ToolSectionHeader>

      {selectedBtn === "products" ? (
        <Suspense
          fallback={
            <span className="loading loading-bars loading-xl mx-auto flex items-center justify-center mt-18"></span>
          }
        >
          <Cards
            dataPromise={dataPromise}
            chart={chart}
            setChart={setChart}
          ></Cards>
        </Suspense>
      ) : (
        <Chart chart={chart} setChart={setChart}></Chart>
      )}
    </section>
  );
};

export default DigitalTools;
