// HomePage.tsx
import * as React from "react";
import { CarouselPlugin } from "../components/CarouselPlugin";// Adjust the import path as necessary

export default function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to the Home Page</h1>
      <CarouselPlugin />
    </div>
  );
}