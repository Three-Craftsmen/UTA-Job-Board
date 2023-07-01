import { signIn } from "next-auth/react";

import LoginIcon from "@mui/icons-material/Login";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

export const Login = () => {
  return (
    <>
      <Header />
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

const Header = () => {
  return (
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
  );
};
