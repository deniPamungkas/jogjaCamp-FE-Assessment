import React from "react";
import Card from "../components/card";

const TestLayout = () => {
  return (
    <div className="flex flex-col gap-y-5 py-5 text-black font-bold text-3xl px-5 xl:px-52">
      <section className="w-full h-fit">
        <div className="w-full h-[200px] md:h-[400px] xl:h[500px] rounded-xl bg-orange-800">
          <img src="" alt="" />
        </div>
      </section>
      <section className="w-full h-fit grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
};

export default TestLayout;
