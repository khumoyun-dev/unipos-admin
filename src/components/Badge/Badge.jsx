import "./Badge.scss";

const Badge = ({ type, children }) => {
  return <div className={`badge badge--${type}`}>{children}</div>;
};

export default Badge;
