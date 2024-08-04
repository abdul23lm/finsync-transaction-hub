"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        duration={2}
        separator="."
        decimals={2}
        decimal=","
        prefix="Rp "
        end={amount}
      />
    </div>
  );
};

export default AnimatedCounter;
