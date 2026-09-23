import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-row gap-8 md:gap-20 pb-8">
      <Link href="https://github.com/FionnOC">
        <a className="text-xl hover:underline text-blue-500 ">GitHub</a>
      </Link>
      <Link href="https://www.linkedin.com/in/fionn-o-connor-1762a3241/">
        <a className="text-xl hover:underline text-blue-500 ">LinkedIn</a>
      </Link>
      <a
        href="mailto:fionn010@gmail.com"
        className="text-xl hover:underline text-blue-500 "
      >
        Email
      </a>
    </div>
  );
};
