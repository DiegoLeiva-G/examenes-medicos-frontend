import { type ErrorResponse, isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError() as ErrorResponse;

  if (isRouteErrorResponse(error)) {
    // if (error.status === 404) {
    //   return <div>This page doesn't exist!</div>;
    // }
    //
    // if (error.status === 401) {
    //   return <div>You aren't authorized to see this</div>;
    // }
    //
    // if (error.status === 503) {
    //   return <div>Looks like our API is down</div>;
    // }
    //
    // if (error.status === 418) {
    //   return <div>🫖</div>;
    // }
  }

  return (
    <>
      <nav style={{ marginTop: '-158px' }} className="pb-8"></nav>
      <main className="flex-1 pb-8">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow">
            <div className="py-6">
              <div className="mx-auto px-6 lg:px-8">
                <div className="text-center">
                  <p className="text-base font-semibold text-indigo-600">{error.status}</p>
                  <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                    {error.data}
                  </h1>
                  <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">{error.statusText}</p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      ← Volver
                    </a>
                    <a href="#" className="text-sm font-semibold text-gray-900">
                      Contact support <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
