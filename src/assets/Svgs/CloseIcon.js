const CloseIcon = (props) => {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.293 18.707a1 1 0 0 1 0-1.414l12-12a1 1 0 1 1 1.414 1.414l-12 12a1 1 0 0 1-1.414 0Z"
        fill="#9F9F9F"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.293 5.293a1 1 0 0 1 1.414 0l12 12a1 1 0 0 1-1.414 1.414l-12-12a1 1 0 0 1 0-1.414Z"
        fill="#9F9F9F"
      />
    </svg>
  );
};

export default CloseIcon;
