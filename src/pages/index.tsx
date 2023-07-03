/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Head from "next/head";
import { type FormEvent, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";

import { useMultiStepForm } from "~/hooks/useMultiStepForm";
import { GeneralForm } from "~/components/forms/GeneralForm";
import { Login } from "~/components/Login";
import { GradesForm } from "~/components/forms/GradesForm";
import { TimesForm } from "~/components/forms/TimesForm";

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

        {/* User Not Logged In: Display Login */}
        {sessionData === null && <Login />}
      </main>
    </>
  );
};

export default Home;

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

type FormData = {
  /* General Form Data */
  firstName: string;
  lastName: string;
  gnumber: string;
  phoneNumber: string;
  masonEmail: string;
  major: string;
  graduationDate: string;
  overallGPA: string;
  prevSemGPA: string;
  creditsLastSem: string;
  newUTA: string;
  prevUTAType: string;
  prevUTACourses: string;
  recommender: string;
  essay: string;
  preferredProfs: string;
  /* Grades Form Data */

  /* Times Form Data */
};

const INITIALSTATE: FormData = {
  /* General Form Data */
  firstName: "",
  lastName: "",
  gnumber: "",
  phoneNumber: "",
  masonEmail: "",
  major: "",
  graduationDate: "",
  overallGPA: "",
  prevSemGPA: "",
  creditsLastSem: "",
  newUTA: "",
  prevUTAType: "",
  prevUTACourses: "",
  recommender: "",
  essay: "",
  preferredProfs: "",
  /* Grades Form Data */

  /* Times Form Data */
};

const MultiStepForm = () => {
  const [data, setData] = useState(INITIALSTATE);
  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const typeConversions = (
    newUTA: string,
    overallGPA: string,
    prevSemGPA: string,
    creditsLastSem: string
  ) => {
    let newUTAcopy = false;
    let overallGPAcopy = 0.0;
    let prevSemGPAcopy = 0.0;
    let creditsLastSemcopy = 0;
    if (newUTA === "Yes") {
      newUTAcopy = true;
    }
    overallGPAcopy = parseFloat(overallGPA);
    prevSemGPAcopy = parseFloat(prevSemGPA);
    creditsLastSemcopy = parseInt(creditsLastSem);

    return { newUTAcopy, overallGPAcopy, prevSemGPAcopy, creditsLastSemcopy };
  };

  /* Router function definitions: */
  const updateGeneralUser = api.general.updateUserData.useMutation();
  const updateGeneralApplication =
    api.general.updateApplicationData.useMutation();

  const { steps, step, currentStepIndex, firstStep, lastStep, back, next } =
    useMultiStepForm([
      <GeneralForm key={1} {...data} updateFields={updateFields} />,
      <GradesForm key={2} {...data} updateFields={updateFields} />,
      <TimesForm key={3} {...data} updateFields={updateFields} />,
    ]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!lastStep) {
      return next();
    }
    alert("Successful Submit");

    const { newUTAcopy, overallGPAcopy, prevSemGPAcopy, creditsLastSemcopy } =
      typeConversions(
        data.newUTA,
        data.overallGPA,
        data.prevSemGPA,
        data.creditsLastSem
      );
    /* Before we make updates, create an empty appication */

    updateGeneralUser.mutate({
      firstName: data.firstName,
      lastName: data.lastName,
      gnumber: data.gnumber,
      email: data.masonEmail,
    });

    updateGeneralApplication.mutate({
      phoneNumber: data.phoneNumber,
      major: data.major,
      graduationDate: data.graduationDate,
      overallGPA: overallGPAcopy,
      prevSemGPA: prevSemGPAcopy,
      newUTA: newUTAcopy,
      prevUTAType: data.prevUTAType,
      creditsLastSem: creditsLastSemcopy,
      recommender: data.recommender,
      essay: data.essay,
      preferredProfs: data.preferredProfs,
    });
    /* TODO: Send Grades data to tRPC */

    /* TODO: Send Times data to tRPC */
  };

  return (
    <form
      className="grid place-content-center place-items-center"
      onSubmit={onSubmit}
    >
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
              className="btn-outline btn-sm btn justify-self-end"
              onClick={next}
              type="button"
            >
              Next
            </button>
          )}
          {lastStep && (
            <button
              type="submit"
              className="btn-outline btn-sm btn justify-self-end"
            >
              {`Submit`}
            </button>
          )}
        </div>
      </div>
    </form>
  );
};
