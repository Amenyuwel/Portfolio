"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

const KavePharmacyPage = () => {
  return (
    <main className="flex h-screen w-full flex-col bg-[var(--background)]">
      <Header />
      <section className="flex w-full flex-1 flex-col items-center">
        <div className="w-[45%] p-8">
          <h1 className="text-3xl font-semibold">Kave Pharmacy</h1>
          <section className="flex h-full w-full flex-col bg-blue-600 p-8"></section>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default KavePharmacyPage;
