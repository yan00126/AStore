import React from "react";
// import { Button } from "@/components/ui/button";
import Hero from "@/components/home/Hero";
import FeatureProducts from "@/components/home/FeaturedProducts";
import { Suspense } from "react";
import LoadingContainer from "@/components/global/LoadingContainer";
const HomePage = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeatureProducts />
      </Suspense>
    </>
  );
};

export default HomePage;
