import { createBrowserRouter, Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Home } from "../pages/Home/Home";
import { FilterPage } from "../pages/FilterPage/FilterPage";
import { CardDetailed } from "../components/Card/CardDetailed/CardDetailed";
import { PersonPage } from "../pages/PersonPage/PersonPage";
import { MorePage } from "../pages/MorePage/MorePage";
// import { SearchResults } from "../components/Search/SearchResults";


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
          element: <Home />,
        },{
          path: "card/:type/:id",
          element: <CardDetailed/>
        },{
          path: "filter/:type/:category",
          element: <FilterPage />
        },{
          path: "person",
          element: <PersonPage />
        },{
          path: "more",
          element: <MorePage />
        },
      ],
    },
  ],
  { basename: "/Movie_Library/" }
);

export default router;
