import { useLoaderData } from "react-router-dom";
import { getUser } from "../functions/users";

export function User() {
  const user = useLoaderData();

  return (
    <>
      <div>
        <h1 className="page-title">{user.name}</h1>
        <div className="page-subtitle">{user.email}</div>
        <div>
          <b>Company:</b> {user.company.name}
        </div>
        <div>
          <b>Website:</b> {user.website}
        </div>
        <div>
          <b>Address:</b> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
        </div>
        {/* Add Posts section later */}
      </div>
    </>
  );
}

function loader({ request: { signal }, params: { userId } }) {
  return getUser(userId, { signal });
}

export const userRoute = {
  loader,
  element: <User />,
};