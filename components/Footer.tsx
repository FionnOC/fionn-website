import Image from "next/image";
import Link from "next/link";
import React from "react";

type FooterProps = {
  children?: React.ReactNode;
};

export const Footer = ({ children }: FooterProps) => {
  return (
    <Link href="https://github.com/FionnOC">
      <a className="text-xl hover:underline text-blue-500 pt-8">GitHub</a>
    </Link>
  );
};
