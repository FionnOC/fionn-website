import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function WorkExperience() {
  return (
    <Layout>
      <Head>
        <title>Experience</title>
      </Head>
      <h1 className="text-3xl leading-normal font-bold font-sans py-4 text-left">
        Work Experience
      </h1>
      <div className="pb-4">
        <h4 className="pb-4 font-semibold italic text-2xl">
          Jun 2022 - Jul 2022:
          <br />
          EY Tech Consulting, Harcourt St, Dublin 2
        </h4>
        <ul className="text-xl">
          <li>Assist in PMO work as part of a multi team project</li>
          <li>
            Recieved official training to prepare to take PSM 1 and PSPO 1
            certificate exams
          </li>
          <li>
            Worked alongside Solution Architect to prepare Confluence
            documentation for team to use ahead of project
          </li>
        </ul>
      </div>
      <div className="py-4">
        <h4 className="pb-4 font-semibold italic text-2xl">
          May 2021 - Sept 2021: <br />
          Ticketing Supervisor, Reservations- Westport House Estate, Westport
        </h4>
        <ul className="text-xl">
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
