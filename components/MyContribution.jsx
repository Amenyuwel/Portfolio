import React from "react";
import ContributionsGrid from "./ContributionsGrid";

const MyContribution = () => {
  return (
    <main className="bg-main mb-8 grid h-full w-full flex-grow grid-cols-1 gap-4 rounded-lg md:grid-cols-1">
      <ContributionsGrid/>
    </main>
  );
};

export default MyContribution;
