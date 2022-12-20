import { useEffect, useState } from "react";
import { Commit } from "../../components/Commit/Commit";
import { GithubCommit } from "../../interfaces/github-commit.interface";
import certifyAxios from "../../utils/axios";

interface Error {
  statusCode: number;
  message: string;
  error: string;
}

function Commits() {
  const [commits, setCommits] = useState<GithubCommit[]>([]);
  const [error, setError] = useState<Error>();
  const [message, setMessage] = useState("");

  const handleChange = (event: any) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setMessage(message);
    getCommitsByMessage(message);
  };

  const getCommits = async () => {
    try {
      let response: any = await certifyAxios.get("/commit");
      let data: GithubCommit[] = response.data;
      if (data) {
        setCommits(data);
      }
    } catch (e: any) {
      console.log(`The following error has occurred: ${e.message}`);
      setError(e);
    }
  };

  const getCommitsByMessage = async (message: string) => {
    try {
      let response: any = await certifyAxios.post("/commit/filter", {
        message,
      });
      let data: GithubCommit[] = response.data;
      if (data) {
        setCommits(data);
      }
    } catch (e: any) {
      console.log(`The following error has occurred: ${e.message}`);
      setError(e);
    }
  };

  useEffect(() => {
    getCommits();
  }, []);

  return (
    <main>
      <div className="mx-auto max-w-7xl py-6 px-8 sm:px-10 lg:px-12">
        <div className="relative mb-10">
          <input
            type="text"
            id="large-input"
            placeholder="Search by commit message"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            name="message"
            value={message}
          ></input>
          <button
            type="submit"
            className="absolute top-0 right-0 p-4 h-full text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800"
            onClick={handleClick}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {commits.map((commit: GithubCommit) => (
            <Commit key={commit.sha} commit={commit}></Commit>
          ))}
        </ol>
        {error !== undefined && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">
              <p> Error: {error?.error}! </p>
            </strong>
            <span className="block sm:inline">
              {" "}
              Message: {error?.message}.{" "}
            </span>
          </div>
        )}
      </div>
    </main>
  );
}

export default Commits;
