import axios from "axios";
import React, { Suspense } from "react";
import Cards from "./Cards";

const dataPromise = axios.get("data.json");
const DigitalTools = () => {
  return (
    <section className="w-10/12 mx-auto">
      <Suspense
        fallback={
          <span className="loading loading-bars loading-xl mx-auto flex items-center justify-center mt-18"></span>
        }
      >
        <Cards dataPromise={dataPromise}></Cards>
      </Suspense>
    </section>
  );
};

export default DigitalTools;
