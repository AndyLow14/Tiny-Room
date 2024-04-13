import { IconChevronsRight } from "@tabler/icons-react";
import React from "react";

const SceneCard = ({ title, desc, route, img, alt }) => {
  const handleRedirect = (path) => {
    window.location.href = path;
  };

  return (
    <div className="flex flex-col h-full max-w-sm bg-white border-black border-4 shadow-[10px_10px_0px_0px_rgba(0,0,0)]">
      <img
        className="border-white object-cover"
        src={img || "/coming-soon.png"}
        alt={alt || "Coming Soon"}
      />
      <div className="p-6 flex flex-col justify-between h-full">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
        <p className="mb-4 font-normal">{desc}</p>
        <button
          className="px-3 py-2 w-2/5"
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
