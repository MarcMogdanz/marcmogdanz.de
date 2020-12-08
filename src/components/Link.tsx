import { Link } from "gatsby";
import React from "react";

const StyledLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): JSX.Element => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:text-gray-400"
  >
    {children}
  </a>
);

const LocalStyledLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}): JSX.Element => (
  <Link to={to} className="text-blue-500 hover:text-gray-400">
    {children}
  </Link>
);

export { StyledLink, LocalStyledLink };
