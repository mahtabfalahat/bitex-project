import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { account ,trades , founds , home} from "./Path";
import Spinner from "./../components/Spinner/Spinner";
const Home = lazy(() => import("../views/Home/Home"));
const Trades = lazy(() => import("../views/Trades/Trades"));
const Account = lazy(() => import("../views/Account/Account"));
const Founds = lazy(() => import("../views/Founds/Founds"));
const Navogation = lazy(() => import("../components/Navigation/Navigation"));

const MainRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Navogation />
          <Routes>
            <Route path={account} element={<Account />} />
            <Route path={founds} element={<Founds />} />
            <Route path={trades} element={<Trades />} />

            <Route  path="*" element={<main style={{ padding: "1rem" }}> {" "}   <p>There's nothing here!</p>{" "}</main> }/>
            <Route path={home} element={<Home />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};
export default MainRoutes;
