import Head from "next/head";
import Layout from "../../components/Layout";

export default function WorkExperience() {
  return (
    <Layout work>
      <Head>
        <title>Experience &amp; Education – Fionn O&apos;Connor</title>
      </Head>
      <h1 className="text-2xl leading-normal font-bold font-sans py-4 text-center">
        Work Experience
      </h1>
      <div className="py-4">
        <h2 className="pb-4 font-semibold text-xl">
          Mar 2025 - Present:
          <br />
          AI Engineer, Siemens Healthineers
        </h2>
        <ul className="text-lg list-disc">
          <li>
            Re-architected a serial inference pipeline into a parallelised
            Pandas workflow, cutting end-to-end runtime (file read, processing,
            ONNX inference) by ~9.1x for a 200-file batch (38.6s to 4.2s)
          </li>
          <li>
            Owned two epics to capture and analyse new trace data from field
            instruments, closing a 20-year data gap; selected as subject matter
            expert
          </li>
          <li>
            Integrating automated tests into Ignition (SCADA) work
            instructions, scripting one-click test triggers and tester prompts
            in Python to give engineering live status on a mandatory 2-3 day
            test stage that logs none today
          </li>
          <li>
            Built statistical anomaly and drift detection on instrument trace
            data, now run as a daily job by a team tracking instruments through
            manufacturing and in the field; it has caught both sudden spikes and
            slow field drifts, supporting issue diagnosis. Presented the
            methodology to managers and cross-functional teams
          </li>
          <li>
            Developing a custom spaCy NER model to detect PII in field service
            notifications for EU compliance, with ~400 manually labelled samples
          </li>
        </ul>
      </div>
      <div className="py-4">
        <h2 className="pb-4 font-semibold text-xl">
          Aug 2024 - Mar 2025:
          <br />
          Research Assistant, Trinity College Dublin
        </h2>
        <ul className="text-lg list-disc">
          <li>
            Ran EEG experiments with 20+ participants for a PhD research
            project
          </li>
          <li>
            Processed the recorded signals in MATLAB, marking trigger onsets
            for analysis
          </li>
        </ul>
      </div>
      <div className="py-4">
        <h2 className="pb-4 font-semibold text-xl">
          Aug 2022 - Oct 2022:
          <br />
          Software Engineering Intern, Mawla Agency
        </h2>
        <ul className="text-lg list-disc">
          <li>
            Built React/Next.js and TypeScript components for client web
            applications; contributed to design reviews and client-facing
            documentation
          </li>
        </ul>
      </div>
      <div className="py-4">
        <h2 className="pb-4 font-semibold text-xl">
          Jun 2022 - Jul 2022:
          <br />
          Technology Consulting Intern, EY, Dublin
        </h2>
        <ul className="text-lg list-disc">
          <li>
            Supported the project management workstream on a multi-team client
            engagement; prepared Confluence documentation alongside the Solution
            Architect
          </li>
        </ul>
      </div>
      <div className="py-4">
        <h2 className="pb-4 font-semibold text-xl">Earlier Experience</h2>
        <ul className="text-lg list-disc">
          <li>
            Ticketing Supervisor, Westport House Estate (2021): led staff teams
            of up to 10
          </li>
          <li>
            Software Testing Trainee, FINEOS (2017): tested software packages
            for healthcare providers
          </li>
          <li>Pro Shop Assistant, Portmarnock Hotel and Golf Links (2018)</li>
        </ul>
      </div>

      <h1 className="text-2xl leading-normal font-bold font-sans py-4 text-center">
        Education
      </h1>
      <div className="py-4">
        <h2 className="pb-4 font-semibold text-xl">
          Sept 2019 - May 2024:
          <br />
          MEng Computer Engineering, Trinity College Dublin
        </h2>
        <ul className="text-lg list-disc">
          <li>First Class Honours (1.1)</li>
          <li>
            Modules included deep learning, probability and statistics,
            information retrieval, and knowledge and data engineering
          </li>
        </ul>
      </div>
      <div className="py-4">
        <h2 className="pb-4 font-semibold text-xl">
          Feb 2023 - Jul 2023:
          <br />
          Erasmus Exchange, MSc Artificial Intelligence programme, KU Leuven,
          Belgium
        </h2>
        <ul className="text-lg list-disc">
          <li>
            Modules included speech recognition, artificial neural networks,
            SVMs, biometrics, and computer vision
          </li>
        </ul>
      </div>
    </Layout>
  );
}
