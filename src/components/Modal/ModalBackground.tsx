import React from "react";

import bgPatternPNG from "../../assets/bg-pattern.png";
import FlagSVG from "../../assets/icons/flag.svg";

export const ModalBackground = React.memo(() => {
  return (
    <div style={{ background: `url(${bgPatternPNG})` }} className="absolute top-0 left-0 w-[216px] h-[216px] -z-10">
      <div className="mt-6 ml-6 w-12 h-12 border border-gray-light-200 rounded-lg inline-flex items-center justify-center">
        <FlagSVG />
      </div>
    </div>
  );
});

// ----------------------------------------------------------------

if (process.env.NODE_ENV !== "production") {
  ModalBackground.displayName = "ModalBackground";
}
