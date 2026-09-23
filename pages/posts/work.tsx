import Head from "next/head";
import Layout from "../../components/Layout";

export default function WorkExperience() {
  return (
    <Layout work>
      <Head>
        <title>Experience</title>
      </Head>
      <h1 className="text-2xl leading-normal font-bold font-sans py-4 text-center">
        Work Experience
      </h1>
      <div className="py-4">
        <h4 className="pb-4 font-semibold text-xl">
          Mar 2025 - Present:
          <br />
          AI Engineer, Siemens Healthineers
        </h4>
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
            Built statistical anomaly and drift detection on field instrument
            trace data to flag irregular behaviour and degradation, and
            presented the findings to managers and cross-functional teams
          </li>
          <li>
            Developing a custom spaCy NER model to detect PII in field service
            notifications for EU compliance, with ~400 manually labelled samples
          </li>
        </ul>
      </div>
      <div className="py-4">
        <h4 className="pb-4 font-semibold text-xl">
          Aug 2024 - Mar 2025:
          <br />
          Research Assistant, Trinity College Dublin
        </h4>
        <ul className="text-lg list-disc">
          <li>Carried out EEG experiments as part of a PhD research project</li>
          <li>Aided with data preprocessing using MATLAB</li>
        </ul>
      </div>
      <div className="py-4">
        <h4 className="pb-4 font-semibold text-xl">
          Aug 2022 - Oct 2022:
          <br />
          Software Engineering Intern, Mawla Agency
        </h4>
        <ul className="text-lg list-disc">
          <li>
            Built React/Next.js and TypeScript components for client web
            applications; contributed to design reviews and client-facing
            documentation
          </li>
        </ul>
      </div>
      <div className="py-4">
        <h4 className="pb-4 font-semibold text-xl">
          Jun 2022 - Jul 2022:
          <br />
          Tech Consultant, EY, Dublin
        </h4>
        <ul className="text-lg list-disc">
          <li>
            Supported the project management workstream on a multi-team client
            engagement; prepared Confluence documentation alongside the Solution
            Architect
          </li>
        </ul>
      </div>
      <div className="py-4">
        <h4 className="pb-4 font-semibold text-xl">Earlier Experience</h4>
        <ul className="text-lg list-disc">
          <li>
            Ticketing Supervisor, Westport House Estate (2021): led staff teams
            of up to 10
          </li>
          <li>
            Software Engineering Intern, FINEOS (2017): tested software packages
            for healthcare providers
          </li>
          <li>Pro Shop Assistant, Portmarnock Hotel and Golf Links (2017-2018)</li>
        </ul>
      </div>

      <h1 className="text-2xl leading-normal font-bold font-sans py-4 text-center">
        Education
      </h1>
      <div className="py-4">
        <h4 className="pb-4 font-semibold text-xl">
          Sept 2019 - May 2024:
          <br />
          MEng Computer Engineering, Trinity College Dublin
        </h4>
        <ul className="text-lg list-disc">
          <li>First Class Honours (1.1)</li>
          <li>
            Modules included deep learning, probability and statistics,
            information retrieval, and knowledge and data engineering
          </li>
        </ul>
      </div>
      <div className="py-4">
        <h4 className="pb-4 font-semibold text-xl">
          Feb 2023 - Jul 2023:
          <br />
          Erasmus Exchange, MSc Artificial Intelligence, KU Leuven, Belgium
        </h4>
        <ul className="text-lg list-disc">
          <li>First Class Honours (1.1)</li>
          <li>
            Modules included speech recognition, artificial neural networks,
            SVMs, biometrics, and computer vision
          </li>
        </ul>
      </div>
    </Layout>
  );
}
