import Head from "next/head";
import Layout from "../../components/Layout";
import Link from "next/link";

export default function Projects() {
  return (
    <Layout projects>
      <Head>Projects</Head>
      <h1 className="text-2xl leading-normal font-bold font-sans py-4 text-center">
        College Projects
      </h1>
      <div>
        <h4 className="pb-4 font-semibold  text-xl">Furnishare</h4>
        <ul className="text-lg list-disc">
          <li>
            Lead team of 22 developing a marketplace app over the course of 8
            weeks
          </li>
          <li>
            <strong>Tools Used:</strong> React Native, Firebase, Figma, GitHub,
            Expo Go
          </li>
        </ul>
      </div>
      <br />
      <div>
        <h4 className="pb-4 font-semibold  text-xl">Weather Application</h4>
        <ul className="text-lg list-disc">
          <li>
            Created a Weather App which advises users on weather and air quality
            conditions for the coming 5 days, advises on clothes to wear/pack
          </li>
          <li>
            <strong>Tools Used:</strong> OpenWeatherMap API, Express,
            JavaScript, Vue.js
          </li>
        </ul>
      </div>
      <br />
      <div>
        <h4 className="pb-4 font-semibold  text-xl">
          Dublin Bikes Application
        </h4>
        <ul className="text-lg list-disc">
          <li>
            Created a Dublin Cycling App, which shows user location, and the
            public bikes available to the user, directions can be requested to a
            location, and the app will show the user walking directions to the
            closest bike and cycling directions to the destination. The app
            uploads user data to Cloud Firestore in real time.
          </li>
          <li>
            <strong>Tools Used:</strong> APIs, React Native, JavaScript,
            Firebase, Cloud Firestore, Expo Go
          </li>
        </ul>
      </div>
      <br />
      <div>
        <h4 className="pb-4 font-semibold  text-xl">
          Teaching Morse Code via Game using Pi Pico and ARM Assembly
        </h4>
        <Link href="https://drive.google.com/file/d/1iUPKXk5Ci0WRTKb8-vNAySn2O84ZSWW-/view?usp=sharing">
          <a className="text-xl hover:underline text-blue-500 pt-4">
            Video of Demonstration
          </a>
        </Link>
        <br />
        <br />
        <ul className="text-lg list-disc">
          <li>
            <strong>Tools Used:</strong> C, ARM Assembly, Raspberry Pi Pico,
            Doxygen
          </li>
        </ul>
      </div>
    </Layout>
  );
}
