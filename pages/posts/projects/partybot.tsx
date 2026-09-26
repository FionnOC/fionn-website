import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";

const pipeline = [
  "A player picks or uploads a banned-word list in the React UI, which saves it to an S3 bucket",
  "The upload triggers Lambda #1, which sends the list off to have the speech model rebuilt with the new words",
  "The rebuilt model is uploaded to a second S3 location, triggering Lambda #2",
  "Lambda #2 pushes the new model to the ESP32-S3-Korvo-2 through AWS IoT Core over MQTT",
  "When the board detects a banned word, it publishes an MQTT message that is stored in S3",
  "Each stored message triggers Lambda #3, which tallies how often each player says a banned word for live game stats",
];

export default function PartyBot() {
  return (
    <Layout projects>
      <Head>
        <title>PartyBot – Fionn O&apos;Connor</title>
      </Head>
      <article className="text-lg">
        <h1 className="text-2xl leading-normal font-bold font-sans py-4 text-center">
          PartyBot: My Contribution
        </h1>

        <p className="my-4">
          PartyBot was a final-year Internet of Things project at Trinity
          College Dublin, built by a team of six. It&apos;s a party game: the
          device listens to conversation, and when someone says a word from
          the banned list, a buzzer sounds and a motor-driven arrow turns to
          point at whoever said it. Four microphones on a second ESP32 find the
          direction of the loudest voice.
        </p>
        <p className="my-4">
          My role had two parts: getting speech recognition working well on
          the device, and building the cloud integration that connects the
          device to the web UI.
        </p>

        <h2 className="text-xl font-semibold pt-6 pb-2">
          1. On-device speech recognition
        </h2>
        <p className="my-4">
          Early on, the team chose to run recognition on the board rather than
          stream conversation audio to the cloud. Keeping audio local avoids
          sending identifiable speech over the network (a GDPR concern) and
          cuts the delay between a word being said and the game reacting.
        </p>
        <ul className="list-disc">
          <li>
            Tested Espressif&apos;s audio examples across three development
            boards with two teammates, which led us to choose the
            ESP32-S3-Korvo-2 for its support of the more capable speech models
          </li>
          <li>
            Fixed a defect where the English command-word model (MultiNet)
            always fell back to Mandarin regardless of configuration, by
            changing the model&apos;s default language in the codebase
          </li>
          <li>
            Built and tested the custom command-word list that became the
            banned-word list, and compared MultiNet 6 against MultiNet 7.
            MultiNet 6 matches on graphemes (spelling) and often missed words;
            MultiNet 7 matches on phonemes (sounds) and was far more accurate.
            Writing out each word&apos;s phoneme sequence in the command file
            improved accuracy and speed further
          </li>
          <li>
            Replaced the wake-word trigger (WakeNet only knows a handful of
            fixed words like &ldquo;Alexa&rdquo;) with a timeout, so the model
            listens to natural conversation continuously
          </li>
        </ul>

        <h2 className="text-xl font-semibold pt-6 pb-2">
          2. Cloud integration on AWS (built solo)
        </h2>
        <p className="my-4">
          I designed and built the AWS side end to end: three event-driven
          Lambda functions and two S3 buckets, connected to the device through
          AWS IoT Core, which handles device authentication and access
          policies.
        </p>
        <ol className="list-decimal">
          {pipeline.map((step) => (
            <li key={step} className="py-1">
              {step}
            </li>
          ))}
        </ol>
        <p className="my-4">
          The ideal version would rebuild the model entirely in the cloud, but
          that would have used up our AWS credits. Instead, the rebuild step
          runs on a laptop and the rest of the pipeline stays event-driven.
        </p>

        <h2 className="text-xl font-semibold pt-6 pb-2">
          What I&apos;d do next
        </h2>
        <p className="my-4">
          Pointing at the loudest direction breaks down at a real party, where
          music or background chatter can be louder than the players. Voice
          activity detection on an S3-class board would filter that out. The
          same pipeline could also turn PartyBot into a vocabulary game for
          language learners, scoring players for using target words instead
          of penalising them.
        </p>

        <p className="my-4">
          <strong>Tools Used:</strong> ESP32-S3-Korvo-2, ESP-IDF / ESP-ADF,
          WakeNet, MultiNet 7, AWS (IoT Core, Lambda, S3), MQTT, React
        </p>

        <div className="pt-4 text-xl hover:underline text-blue-700">
          <Link href="/posts/projects">
            <a>← Back to projects</a>
          </Link>
        </div>
      </article>
    </Layout>
  );
}
