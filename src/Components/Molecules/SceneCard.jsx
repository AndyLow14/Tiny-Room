import { IconChevronsRight } from "@tabler/icons-react";
import React from "react";

const SceneCard = ({ title, route, img, alt }) => {
  const handleRedirect = (path) => {
    window.location.href = path;
  };

  return (
    <div class="max-w-sm bg-white border-black border-4 shadow-[10px_10px_0px_0px_rgba(0,0,0)]">
      <img
        class="border-white object-cover"
        src={img || "/coming-soon.png"}
        alt={alt || "Coming Soon"}
      />
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
        <p class="mb-4 font-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          praesentium incidunt ducimus corporis maiores debitis ratione quas
          voluptas perspiciatis dolorum?
        </p>
        <button
          className="px-3 py-2"
          onClick={() => handleRedirect(route)}
          disabled={!route}
        >
          <IconChevronsRight size={"20px"} />
          View
          <IconChevronsRight size={"20px"} />
        </button>
      </div>
    </div>
  );
};

export default SceneCard;
