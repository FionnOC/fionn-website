import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function Projects() {
  return (
    <Layout projects>
      <Head>
        <title>Projects – Fionn O&apos;Connor</title>
      </Head>
      <h1 className="text-2xl leading-normal font-bold font-sans py-4 text-center">
        Projects
      </h1>

      <div className="py-4">
        <h2 className="pb-4 font-semibold text-xl">
          PartyBot: IoT Speech-Recognition Party Game
        </h2>
        <Link href="/posts/projects/partybot">
          <a className="text-xl hover:underline text-blue-700">
            My contribution
          </a>
        </Link>
        <ul className="text-lg list-disc pt-4">
          <li>
            A device that listens to conversation, detects banned words using
            on-device speech recognition, then sounds an alarm and points at
            whoever said it. Built by a team of 6
          </li>
          <li>
            Built the AWS cloud integration end-to-end: 3 event-driven Lambda
            functions and 2 S3 buckets pushing UI-selected word lists to
            on-device model updates over IoT Core/MQTT, plus live per-player
            detection stats
          </li>
          <li>
            Tuned on-device speech recognition (WakeNet, MultiNet), improving
            detection accuracy and fixing a default-language defect
          </li>
          <li>
            <strong>Tools Used:</strong> AWS (IoT Core, Lambda, S3), MQTT,
            ESP32, React
          </li>
        </ul>
      </div>

      <div className="py-4">
        <h2 className="pb-4 font-semibold text-xl">
          Masters Research: Humour Perception using EEG
        </h2>
        <ul className="text-lg list-disc">
          <li>
            Studied the neurophysiology of humour perception using EEG and
            Temporal Response Functions recorded while participants watched
            comedy shows
          </li>
          <li>
            <strong>Tools Used:</strong> MATLAB, EEG, Praat, Univariate and
            Multivariate Models
          </li>
        </ul>
      </div>

      <div className="py-4">
        <h2 className="pb-4 font-semibold text-xl">FurniShare</h2>
        <ul className="text-lg list-disc">
          <li>
            Led a team of 22 engineers developing a second-hand furniture
            marketplace app for iOS and Android over 8 weeks
          </li>
          <li>
            <strong>Tools Used:</strong> React Native, Firebase, Figma, GitHub,
            Expo Go
          </li>
        </ul>
      </div>

      <h2 className="text-xl leading-normal font-bold font-sans pt-8 pb-2 text-center">
        Earlier Student Projects
      </h2>

      <div className="py-4">
        <h3 className="pb-4 font-semibold text-lg">Weather Application</h3>
        <ul className="list-disc">
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

      <div className="py-4">
        <h3 className="pb-4 font-semibold text-lg">Dublin Bikes Application</h3>
        <ul className="list-disc">
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

      <div className="py-4">
        <h3 className="pb-4 font-semibold text-lg">
          Teaching Morse Code via Game using Pi Pico and ARM Assembly
        </h3>
        <a
          href="https://drive.google.com/file/d/1iUPKXk5Ci0WRTKb8-vNAySn2O84ZSWW-/view?usp=sharing"
          className="hover:underline text-blue-700"
        >
          Video of Demonstration
        </a>
        <ul className="list-disc pt-4">
          <li>
            <strong>Tools Used:</strong> C, ARM Assembly, Raspberry Pi Pico,
            Doxygen
          </li>
        </ul>
      </div>
    </Layout>
  );
}
