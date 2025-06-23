import React from "react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/home/Hero";
import FeatureProducts from "@/components/home/FeatureProducts";
const HomePage = () => {
  return (
    <>
      <h1 className="text-3xl">HomePage</h1>
      <Hero />
      <FeatureProducts />
    </>
  );
};

export default HomePage;
