import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const production = import.meta.env.PROD;
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Error - Something went wrong</h1>
      {!production && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  )
}
