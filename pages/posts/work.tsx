import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function WorkExperience() {
  return (
    <Layout>
      <Head>
        <title>Experience</title>
      </Head>
      <h1 className="text-2xl leading-normal font-bold font-sans py-4 text-left">
        Work Experience
      </h1>
      <div className="py-4">
        <h4 className="pb-4 font-semibold italic text-xl">
          Aug 2022 - Sept 2022:
          <br />
          Mawla Agency
        </h4>
        <ul className="text-lg">
          <li>
            Gained experience working with Next.js, and Typescript to make React
            Components for web applications
          </li>
          <li>
            Took part in attending design meetings and gave feedback on
            wireframe designs
          </li>
          <li>
            Created documentation to help assist in training clients on how to
            use the Mawla Engine
          </li>
        </ul>
      </div>
      <div className="py-4">
        <h4 className="pb-4 font-semibold italic text-xl">
          Jun 2022 - Jul 2022:
          <br />
          EY Tech Consulting, Harcourt St, Dublin 2
        </h4>
        <ul className="text-lg">
          <li>Assist in PMO work as part of a multi team project</li>
          <li>
            Recieved official training to prepare to take PSM 1 and PSPO 1
            certificate exams
          </li>
          <li>
            Worked alongside Solution Architect to prepare Confluence
            documentation for team to use ahead of project
          </li>
          <li>
            Attended daily scrum, weekly working group, and other client
            meetings
          </li>
        </ul>
      </div>
      <div className="py-4">
        <h4 className="pb-4 font-semibold italic text-xl">
          May 2021 - Sept 2021: <br />
          Ticketing Supervisor, Reservations- Westport House Estate, Westport
        </h4>
        <ul className="text-lg">
          <li>Liase with customers upon entry to park</li>
          <li>Handle complaints and resolve issues</li>
          <li>
            Lead staff teams of up to 10 employees, providing increased
            communication and insight
          </li>
          <li>
            Receive and control stock levels through communication with internal
            and external stakeholders
          </li>
        </ul>
      </div>

      {/* <h2>
        <Link href="/">Back to home</Link>
      </h2> */}
    </Layout>
  );
}
