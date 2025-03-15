import React from "react";

export const About = () => {
  return (
    <section id="about" className="second-section h-screen bg-black relative">
      {/* glowing background */}
      <div className="h-[500px]  w-full bg-red-800 animate-pulse rotate-[10deg] skew-x-12"></div>
      {/* text */}
      <div className="absolute top-[15%] sm:right-20 md:right-[300px] text-white">
        <h1 className="text-5xl font-bold font-rubix">Enlighten Me</h1>
        <p className="w-[500px] font-semibold pt-10">
          Did you know these sneakers are designed to look just like the real
          thing? With top-quality materials like rubber, plastic, and
          fabric—just like the originals—they offer style, comfort, and
          confidence without the hefty price tag! From a distance, no one will
          be able to tell the difference, and up close, they still look amazing.
          Rock your stylish kicks with pride, knowing you've made a smart,
          budget-friendly choice. And who knows? One day, you might grab a pair
          of the originals—but until then, keep stepping out in style with these
          awesome lookalikes!
        </p>
        <div className="grid md:grid-cols-2 gap-2 text-black font-rubix font-bold mt-4">
          <span className="bg-red-500 text-white text-lg rounded-full px-3">
            Good
          </span>
          <span className="bg-purple-500 text-lg text-white rounded-full px-3">
            Real
          </span>
        </div>
      </div>
    </section>
  );
};
