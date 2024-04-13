import React from "react";
import { IconChevronsLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <button
      className="absolute bg-black z-50 mt-12 ml-12 border-white text-white hover:bg-white hover:text-black"
      onClick={handleBack}
    >
      <IconChevronsLeft size={"20px"} />
      Back
      <IconChevronsLeft size={"20px"} />
    </button>
  );
};

export default BackButton;
