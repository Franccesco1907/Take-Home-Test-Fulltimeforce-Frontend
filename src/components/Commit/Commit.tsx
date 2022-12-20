import "./Commit.css";
import { GithubCommit } from "../../interfaces/github-commit.interface";

export const Commit = (props: { commit: GithubCommit }) => {
  return (
    <li className="mb-10 ml-6">
      <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <img
          className="rounded-full shadow-lg"
          src={props.commit.author.avatar_url}
          alt="Logo de Github"
        />
      </span>
      <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
        <div className="justify-between items-center mb-3 sm:flex">
          <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
            {new Date(props.commit.commit.author.date).toLocaleDateString()} |{" "}
            {new Date(props.commit.commit.author.date).toLocaleTimeString()}
          </time>
          <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
            <a href={props.commit.author.html_url}>
              {" "}
              {props.commit.author.login}{" "}
            </a>
            <span> has committed on</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {" "}
              <a href="https://github.com/Franccesco1907/Take-Home-Test-Fulltimeforce-Backend">
                Take-Home-Test-Fulltimeforce-Backend
              </a>
            </span>
          </div>
        </div>
        <a href={props.commit.html_url}>
          <div className="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
            ({props.commit.sha.substring(0, 7)}) {props.commit.commit.message}
          </div>
        </a>
      </div>
    </li>
  );
};
