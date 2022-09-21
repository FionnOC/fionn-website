import Image from "next/image";
import Link from "next/link";
import React from "react";

type FooterProps = {
  children?: React.ReactNode;
};

export const Footer = ({ children }: FooterProps) => {
  return (
    <div className="flex flex-row gap-20 pb-8">
      <Link href="https://github.com/FionnOC">
        <a className="text-xl hover:underline text-blue-500 ">GitHub</a>
      </Link>
      <Link href="https://www.linkedin.com/in/fionn-o-connor-1762a3241/">
        <a className="text-xl hover:underline text-blue-500 ">LinkedIn</a>
      </Link>
    </div>
  );
};
