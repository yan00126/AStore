import React from "react";
import { Button } from "@/components/ui/button";
const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">HoemPage</h1>
      <Button variant="default" size="lg" className="capitalize m-8">
        Click Me
      </Button>
    </div>
  );
};

export default HomePage;
