import axios from "axios";
import React, { Suspense } from "react";
import Cards from "./Cards";
import ToolSectionHeader from "./ToolSectionHeader";

const dataPromise = axios.get("data.json");
const DigitalTools = ({ chart, setChart }) => {
  return (
    <section className="w-10/12 mx-auto my-40">
      <ToolSectionHeader></ToolSectionHeader>

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
    </section>
  );
};

export default DigitalTools;
