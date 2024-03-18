
import { Link, useLocation } from "react-router-dom";

const Dashlink = ({ children, to, className }) => {
  const { pathname } = useLocation();


  return (
    <Link
      to={to}
      className={`${pathname === to && "bg-neutral-100 dark:bg-neutral-500 dark:text-white"
        } ${className}  transition-all ease-linear px-4 rounded-lg py-[6px] block`}
    >
      {children}
    </Link>
  );
};

export default Dashlink;