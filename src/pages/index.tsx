import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
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
      </main>
    </>
  );
};

export default Home;
