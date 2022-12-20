import githubLogo from "../../assets/images/githubLogo_white.png";
import "../../index";
export const MainLayout = () => {
  return (
    <>
      <div className="min-h-full">
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src={githubLogo}
                    alt="FULLTIMEFORCE GITHUB COMMIT"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4 text-white">
                    Github Commit History
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-white-900">
              Github Commit History
            </h1>
          </div>
        </header>
      </div>
    </>
  );
};
