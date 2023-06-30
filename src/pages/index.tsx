/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { type ChangeEvent, useState } from "react";

import { useMultiStepForm } from "~/hooks/useMultiStepForm";
import { api } from "~/utils/api";

import LoginIcon from "@mui/icons-material/Login";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      {/* Document Head: Contains Metadata */}
      <Head>
        {/* Primary Meta Tags */}
        <title>GMU | UTA Application Portal</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="GMU | UTA Application Portal" />
        <meta
          name="description"
          content="Apply to be an Undergraduate Teaching Assistant at George Mason University."
        />
        <meta
          name="author"
          content="Hayden Hanson, Barkev Reisig, Thomas Copas"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* < Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="GMU | UTA Application Portal" />
        <meta
          property="og:description"
          content="Apply to be an Undergraduate Teaching Assistant at George Mason University."
        />
        <meta property="og:image" content="images/preview.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content="GMU | UTA Application Portal" />
        <meta
          property="twitter:description"
          content="Apply to be an Undergraduate Teaching Assistant at George Mason University."
        />
        <meta property="twitter:image" content="images/preview.png"></meta>
      </Head>
      {/* Main: Main Content rendered in the HTML Body*/}
      <main>
        {/* User Logged In: Display Main App Content */}
        {sessionData !== null && <MainContent />}

        {/* User Not Logged In: Display Login Page */}
        {sessionData === null && <LoginPage />}
      </main>
    </>
  );
};

export default Home;

/**
 * EFFECTS: Displays a fixed nav element to the top of the screen.
 * @returns TSX Template
 */
const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <nav className="navbar z-50 bg-base-200 bg-opacity-20 p-2 backdrop-blur-3xl sm:p-4">
      <div className="flex-1">
        <a className="btn-disabled btn-ghost btn-md btn text-lg normal-case sm:text-xl">
          {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        </a>
      </div>
      <div className="flex-end">
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              <img
                src={sessionData?.user?.image || ""}
                alt={`${sessionData?.user?.name || ""}'s profile picture`}
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-sm mt-3 w-32 bg-base-100 p-2 shadow"
          >
            <li>
              <a className="justify-between sm:text-lg">Profile</a>
            </li>
            <li>
              <a className="sm:text-lg" onClick={() => void signOut()}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

/**
 * EFFECTS: Displays a full-height page.
 *          This is where the main app content is displayed and able to be interacted with.
 * @returns TSX Template
 */
const MainContent = () => {
  return (
    <>
      <Header />
      <section className="grid min-h-[80vh] w-full place-items-center bg-base-100">
        <div className="flex max-w-4xl flex-col items-center gap-12">
          <MultiStepForm />
        </div>
      </section>
    </>
  );
};

/**
 * EFFECTS: Displays a full-height login page that has the capability to redirect the user to sign in.
 * @returns TSX Template
 */
const LoginPage = () => {
  return (
    <>
      {/* Login Header */}
      <header className="navbar bg-base-200 bg-opacity-20 p-2 backdrop-blur-3xl sm:p-4">
        <div className="flex-1">
          <a className="btn-disabled btn-ghost btn-md btn text-lg normal-case sm:text-xl">
            Application Portal
          </a>
        </div>
        <div className="flex-end">
          <a
            className="btn-ghost btn text-lg normal-case text-secondary sm:text-xl"
            href="#"
          >
            Docs <LaunchIcon style={{ width: "24px", height: "24px" }} />
          </a>
        </div>
      </header>
      {/* Login Header */}
      <section className="grid min-h-[80vh] w-full place-items-center bg-base-100">
        <div className="flex flex-col items-center gap-12 p-4">
          {/* Overview Text */}
          <div className="flex max-w-4xl flex-col">
            <h1 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-4xl">
              {`Undergraduate Teaching Assistantships`}
            </h1>
            <p className="max-w-3xl pt-6 indent-6 text-sm sm:text-lg">{`Undergraduate Teaching Assistants are current undergraduate students who assist in courses they've successfully completed at Mason. It is an enriching way to hone your skills, help others survive and thrive, and get paid a bit along the way. Our UTAs are a large part of our students' success in early courses. We welcome current undergraduate students to apply after completing CS courses here at Mason!`}</p>
            <br />
            <b className="text-center text-sm sm:text-lg">{`Now Accepting Summer and Fall 2023 Applications!`}</b>
          </div>
          {/* Overview Text */}
          {/* Login Card */}
          <div className="card h-60 w-full max-w-sm bg-base-200 bg-opacity-20 backdrop-blur-3xl">
            <div className="card-body items-center gap-8">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-3xl">
                Login with GitHub
              </h2>
              <h3 className="text-3xl text-secondary">
                <GitHubIcon style={{ width: "34px", height: "34px" }} />
              </h3>
              <button
                className="btn-outline btn max-w-md"
                onClick={() => void signIn()}
              >
                Login <LoginIcon />
              </button>
            </div>
          </div>
          {/* Login Card */}
        </div>
      </section>
    </>
  );
};

const MultiStepForm = () => {
  const { steps, step, currentStepIndex, firstStep, lastStep, back, next } =
    useMultiStepForm([
      <GeneralForm key={1} />,
      <GradesForm key={2} />,
      <TimesForm key={3} />,
    ]);

  return (
    <section className="grid place-content-center place-items-center">
      <div className="relative">
        <span className="absolute right-2 top-2">
          {currentStepIndex + 1} / {steps.length}
        </span>
        {step}
        <div className="grid grid-flow-col justify-items-stretch p-4">
          {!firstStep && (
            <button
              className="btn-outline btn-sm btn justify-self-start"
              onClick={back}
              type="button"
            >
              Back
            </button>
          )}
          {!lastStep && (
            <button
              type="button"
              className="btn-outline btn-sm btn justify-self-end"
              onClick={next}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

const GeneralForm = () => {
  const [success, setSuccess] = useState(false);

  const [details, setDetails] = useState({
    first: "",
    last: "",
    email: "",
    message: "",
    newUTA: "",
  });

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="grid place-content-center pt-12">
      <h1 className="pb-12 text-center text-4xl font-bold md:text-5xl">{`General Info:`}</h1>
      {/* Form Container */}
      <form className="flex w-[100vw] max-w-3xl flex-col gap-2 p-2">
        <div className="flex flex-row gap-1">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
        </div>
        <div className="flex flex-row gap-1">
          <input
            name="gnumber"
            type="text"
            placeholder="G-Number"
            onChange={handleChange}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
          <input
            name="phoneNumber"
            type="text"
            placeholder="Phone Number"
            onChange={handleChange}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
        </div>
        <input
          name="masonEmail"
          type="email"
          placeholder="Mason Email"
          onChange={handleChange}
          className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
        />
        <span className="divider"></span>
        <div className="flex flex-row gap-1">
          <input
            name="major"
            type="text"
            placeholder="Major"
            onChange={handleChange}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
          <input
            name="graduationDate"
            type="text"
            placeholder="Expected Graduation Date"
            onChange={handleChange}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
        </div>
        <div className="flex flex-row gap-1">
          <input
            name="overallGPA"
            type="float"
            placeholder="Overall GPA"
            onChange={handleChange}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
          <input
            name="prevSemGPA"
            type="float"
            placeholder="Previous Semester GPA"
            onChange={handleChange}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
          <input
            name="creditsLastSem"
            type="float"
            placeholder="# Credits Last Semester"
            onChange={handleChange}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
        </div>
        <span className="divider"></span>
        <div className="flex w-full flex-col gap-1">
          <label className="label">
            <span className="label-text">Have you been a UTA before?</span>
          </label>
          <select
            name="newUTA"
            onChange={handleChange}
            className="select-bordered select-primary select w-full rounded-none font-medium placeholder-base-content"
          >
            <option className="selected disabled">{`Please select an answer.`}</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        {/* This will be displayed if they have been a UTA before */}
        {details.newUTA == "Yes" && (
          <div className="flex w-full flex-col gap-2">
            <span className="divider" />
            <div className="flex flex-row gap-1">
              <input
                name="prevUTAType"
                type="text"
                placeholder="What type of UTA were you?"
                onChange={handleChange}
                className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
              />
              <input
                name="prevUTACourses"
                type="text"
                placeholder="What courses have you been a UTA for?"
                onChange={handleChange}
                className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
              />
            </div>
          </div>
        )}
        {/* This will be displayed if the user has not */}
        {details.newUTA == "No" && (
          <div className="flex flex-col gap-2">
            <span className="divider"></span>
            <input
              name="recomender"
              type="text"
              placeholder="Which professor is recommending you?"
              onChange={handleChange}
              className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
            />
            <textarea
              name="message"
              onChange={handleChange}
              className="input-bordered input-primary input textarea w-full rounded-none font-medium placeholder-base-content"
              placeholder="Why do you want to be a UTA?"
            ></textarea>
          </div>
        )}
        <div className="flex w-full flex-col gap-2">
          <span className="divider"></span>
          <input
            name="preferedProfs"
            type="text"
            placeholder="Please list your preferred professors."
            onChange={handleChange}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
        </div>
        <div>
          <button
            type="submit"
            className={`btn w-full rounded-none font-sans font-medium normal-case ${
              details.first === "" &&
              details.last === "" &&
              details.email === ""
                ? "btn-disabled cursor-no-drop"
                : "btn"
            }`}
          >
            {details.first === "" && details.last === "" && details.email === ""
              ? "Start typing..."
              : "Submit"}
          </button>
        </div>
      </form>
      {/* Form Container */}
    </div>
  );
};

const GradesForm = () => {
  const [success, setSuccess] = useState(false);

  const [details, setDetails] = useState({
    first: "",
    last: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="grid place-content-center pt-12">
      <h1 className="pb-12 text-center text-4xl font-bold md:text-5xl">{`Grades:`}</h1>
      {/* Form Container */}
      <form className="flex max-w-2xl flex-col gap-2 p-2">
        <div className="flex flex-row gap-1">
          <input
            name="first"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
          <input
            name="last"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
        </div>
        <div>
          <textarea
            name="message"
            onChange={handleChange}
            className="input-bordered input-primary input textarea w-full rounded-none font-medium placeholder-base-content"
            placeholder="New Applicants: Why do you want to be a UTA?"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className={`btn w-full rounded-none font-sans font-medium normal-case ${
              details.first === "" &&
              details.last === "" &&
              details.email === ""
                ? "btn-disabled cursor-no-drop"
                : "btn"
            }`}
          >
            {details.first === "" && details.last === "" && details.email === ""
              ? "Start typing..."
              : "Submit"}
          </button>
        </div>
        {success && (
          <p className="text-md p-2 text-center font-medium sm:text-lg">{`Sent.`}</p>
        )}
      </form>
      {/* Form Container */}
    </div>
  );
};

const TimesForm = () => {
  const [success, setSuccess] = useState(false);

  const [details, setDetails] = useState({
    first: "",
    last: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="grid place-content-center pt-12">
      <h1 className="pb-12 text-center text-4xl font-bold md:text-5xl">{`Times:`}</h1>
      {/* Form Container */}
      <form className="flex max-w-2xl flex-col gap-2 p-2">
        <div className="flex flex-row gap-1">
          <input
            name="first"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
          <input
            name="last"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
        </div>
        <div>
          <textarea
            name="message"
            onChange={handleChange}
            className="input-bordered input-primary input textarea w-full rounded-none font-medium placeholder-base-content"
            placeholder="New Applicants: Why do you want to be a UTA?"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className={`btn w-full rounded-none font-sans font-medium normal-case ${
              details.first === "" &&
              details.last === "" &&
              details.email === ""
                ? "btn-disabled cursor-no-drop"
                : "btn"
            }`}
          >
            {details.first === "" && details.last === "" && details.email === ""
              ? "Start typing..."
              : "Submit"}
          </button>
        </div>
        {success && (
          <p className="text-md p-2 text-center font-medium sm:text-lg">{`Sent.`}</p>
        )}
      </form>
      {/* Form Container */}
    </div>
  );
};
