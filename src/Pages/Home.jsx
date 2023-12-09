import React from "react";
import { SceneCard } from "../Components";

const Home = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="grid grid-cols-3 w-10/12 justify-items-center">
        <SceneCard title="Apollo" link="/apollo" />
        <SceneCard title="Athena" />
        <SceneCard title="Aphrodite" />
      </div>
    </div>
  );
};

export default Home;
