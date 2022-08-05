import React from "react";

function AddIcon(props) {
  return (
    <>
      <svg
        width="14"
        height="14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M13.913 7.13c0 .653-.522 1.174-1.174 1.174H8.043v4.435c0 .652-.521 1.174-1.173 1.174a1.169 1.169 0 0 1-1.174-1.174V8.304H1.26A1.169 1.169 0 0 1 .087 7.13c0-.652.522-1.173 1.174-1.173h4.435V1.26c0-.652.521-1.174 1.174-1.174.652 0 1.173.522 1.173 1.174v4.696h4.696c.652 0 1.174.521 1.174 1.173Z"
          fill="#fff"
        />
      </svg>
    </>
  );
}

export default AddIcon;
