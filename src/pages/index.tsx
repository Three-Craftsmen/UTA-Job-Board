import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>UTA Job Application</title>
        <meta
          name="description"
          content="Sign in and apply to be a UTA at mason!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        data-theme="gmuTheme"
        className="flex min-h-screen flex-col items-center justify-center bg-base-100 bg-gradient-to-b"
      >
        <h1 className="text-3xl">UTA Job Board</h1>
        <a href="" className="btn-primary btn w-40">
          Primary
        </a>
        <a href="" className="btn-secondary btn w-40">
          Secondary
        </a>
        <a href="" className="btn-accent btn w-40">
          Accent
        </a>
        <a href="" className="btn-neutral btn w-40">
          Nuetral
        </a>
        <div className="divider"></div>
        <a href="" className="btn-info btn w-40">
          Info
        </a>
        <a href="" className="btn-success btn w-40">
          Success
        </a>
        <a href="" className="btn-warning btn w-40">
          Warning
        </a>
        <a href="" className="btn-error btn w-40">
          Error
        </a>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
          <AuthShowcase />
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
