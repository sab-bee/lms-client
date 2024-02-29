import { Link, useLocation } from "react-router-dom";

const Tablink = ({ children, to, className }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={to}
      className={`${pathname === to && "bg-white"
        } ${className}  transition-all ease-linear px-4 rounded-lg py-[3px] block`}
    >
      {children}
    </Link>
  );
};

export default Tablink;