import React from "react";
import { SceneCard } from "../Components";

const Home = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="grid grid-cols-3 w-10/12 justify-items-center">
        <SceneCard
          title="Apollo"
          desc="In the dull factory, subdued colors reign as sunlight sneaks through the doorway, offering a glimmer of brightness amidst the industrial gloom."
          route="/apollo"
          img="/apollo-preview.png"
          alt="Apollo Design Preview"
        />
        <SceneCard
          title="Aphrodite"
          desc="In a dim room, two pink screens glow softly, adding a touch of mystique to the space. They beckon with a curious allure, promising digital escapades in the midst of shadows."
          route="/aphrodite"
          img="/aphrodite-preview.png"
          alt="Aphrodite Design Preview"
        />
        <SceneCard title="Athena" desc="Scene Coming Soon." />
      </div>
    </div>
  );
};

export default Home;
