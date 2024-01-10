import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  const { state } = useNavigation();
  const loadingState = state === "loading";


  return (
    <>
      <Navbar />
      {loadingState && <div className="loading-spinner"></div>}
      <div className={`${loadingState ? "loading" : ""} container`}>
        <Outlet />
      </div>
    </>
  );
}
