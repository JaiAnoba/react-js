import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.8 3.6L3.6 18L10.8 32.4H25.2L32.4 18L25.2 3.6H10.8Z" fill="#FF2A36" />
        <path d="M18 10.8L14.4 18L18 25.2L25.2 18L18 10.8Z" fill="white" />
      </svg>
    </Link>
  );
};

export default Logo;