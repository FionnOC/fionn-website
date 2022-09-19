import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function WorkExperience() {
  return (
    <Layout>
      <Head>
        <title>Experience</title>
      </Head>
      <h1>Work Experience</h1>
      <h4>
        Jun 2022 - Jul 2022:<br></br>EY Tech Consulting, Harcourt St, Dublin 2
      </h4>
      <ul>
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
      <h4>
        May 2021 - Sept 2021: <br></br>Ticketing Supervisor, Reservations-
        Westport House Estate, Westport
      </h4>
      <ul>
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

      {/* <h2>
        <Link href="/">Back to home</Link>
      </h2> */}
    </Layout>
  );
}
