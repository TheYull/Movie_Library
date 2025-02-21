import { createBrowserRouter, Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { HomePage } from "../pages/HomePage/HomePage";
import { FilterPage } from "../pages/FilterPage/FilterPage";
import { CardDetailed } from "../components/Card/CardDetailed/CardDetailed";
import { PersonPage } from "../pages/PersonPage/PersonPage";
import { MorePage } from "../pages/MorePage/MorePage";
import { UserPage } from "../pages/UserPage/UserPage";
import { PersonDetailed } from "../components/Card/PersonDetailed/PersonDetailed";
import SearchPage from "../pages/SearchPage/SearchPage";
import OnTVPage from "../pages/OnTVPage/OnTVPage";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },{
          path: ":type/:id",
          element: <CardDetailed/>
        },{
          path: "filter/:type/:category?",
          element: <FilterPage />
        },{
          path: "tv/on_the_air/:id?",
          element: <OnTVPage />
        },{
          path: "person",
          element: <PersonPage />
        },{
          path: "person/:id",
          element: <PersonDetailed />
        },{
          path: "more",
          element: <MorePage />
        },{
          path: "user",
          element: <UserPage />
        },{
          path: "search",
          element: <SearchPage />
        }
      ],
    },
  ],
  { basename: "/Movie_Library/" }
);

export default router;
