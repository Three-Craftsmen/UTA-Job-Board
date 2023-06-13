import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { api } from "~/utils/api";
import LoginIcon from "@mui/icons-material/Login";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  return (
    <>
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

      {/* User Logged In */}
      {sessionData !== null && <MainContent />}

      {/* User Not Logged In */}
      {sessionData === null && <Login />}
    </>
  );
};

export default Home;

/**
 * EFFECTS: Displays a full-height page.
 *          This is where the main app content is displayed and able to be interacted with.
 * @returns TSX Template
 */
const MainContent = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
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
  );
};

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

/**
 * EFFECTS: Displays a full-height login page that has the capability to redirect the user to sign in.
 * @returns TSX Template
 */
const Login = () => {
  return (
    <>
      <LoginHeader />
      <main className="grid min-h-screen w-screen place-items-center bg-base-100">
        <div className="flex max-w-6xl flex-col gap-12 p-4 lg:flex-row lg:gap-20">
          <div className="grid w-full max-w-lg place-items-center">
            <h1 className="pt-12 text-center text-3xl md:text-4xl">
              Sign up and become a UTA today.
            </h1>
          </div>
          {/* Login Card */}
          <div className="card h-60 w-full max-w-sm bg-base-200 bg-opacity-20 backdrop-blur-3xl">
            <div className="card-body items-center gap-8">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
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
      </main>
    </>
  );
};

/**
 * EFFECTS: Displays a fixed nav element to the top of the screen.
 * @returns TSX Template
 */
const LoginHeader = () => {
  return (
    <nav className="navbar fixed z-50 bg-base-200 bg-opacity-20 p-4 backdrop-blur-3xl">
      <div className="flex-1">
        <a className="btn-ghost btn text-xl normal-case">Application Portal</a>
      </div>
      <div className="flex-end">
        <a className="btn-ghost btn text-xl normal-case" href="#">
          Docs <LaunchIcon />
        </a>
      </div>
    </nav>
  );
};
