import { HttpStatusCode } from "solid-start/server";

const NotFound = () => {
  return (
    <div>
      <HttpStatusCode code={404} />
      Story not found.
  </div>
  )
}

export default NotFound;