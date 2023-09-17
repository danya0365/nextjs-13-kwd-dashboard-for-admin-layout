export default async function Index() {
  return (
    <>
      <div className="flex h-full min-h-screen flex-1 flex-col items-center justify-center overflow-y-auto overflow-x-hidden p-4">
        <h1 className="mb-4 text-center text-2xl font-semibold md:text-3xl">
          Mini + One Columns Sidebar
        </h1>
        <div className="mb-4">
          <div className="dark:bg-darker relative flex h-72 w-80 space-x-1 bg-white p-1 shadow-md">
            <div className="dark:bg-dark h-full w-6 bg-gray-200" />
            <div className="dark:bg-dark h-full w-16 bg-gray-200" />
            <div className="dark:bg-dark h-full flex-1 bg-gray-100" />
          </div>
        </div>
        <div>
          <p className="text-center">See full project</p>
          <a
            href="https://kamona-wd.github.io/kwd-dashboard/"
            target="_blank"
            className="text-base text-blue-600 hover:underline"
          >
            Live
          </a>
          <a
            href="https://github.com/Kamona-WD/kwd-dashboard"
            target="_blank"
            className="ml-4 text-base text-blue-600 hover:underline"
          >
            Github repo
          </a>
        </div>
      </div>
    </>
  );
}
