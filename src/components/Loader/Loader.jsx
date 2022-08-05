import React from "react";
import LoaderIcon from "../../assets/Svgs/Loader";

function Loader() {
  return (
    <div className="refresh-block">
      <span className="refresh-loader">
        <LoaderIcon />
      </span>
    </div>
  );
}

export default React.memo(Loader);
