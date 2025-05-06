import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOnTvShows } from "../../features/ontvshows/onTvApi";
import { OnTvCard } from "../../features/ontvshows/OnTvCard";

const OnTVPage = () => {
  const dispatch = useDispatch();
  const { onTvShows, status, error } = useSelector((state) => state.onTv);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchOnTvShows());
    }
  }, [status, dispatch]);

  return (
    <div className="container">
      <h1 className="headline">On The Air</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      <div className="subheader">
    {onTvShows && Array.isArray(onTvShows) && onTvShows.length > 0 ? (
        onTvShows.map((tvShow) => ( // Змінено tv на tvShow для кращої читабельності
            <OnTvCard key={tvShow.id} tv={tvShow} /> // Передаємо tvShow, а не tv
        ))
    ) : (
        <p>{status === "loading" ? "Loading..." : "No shows found."}</p>
    )}
</div>
    </div>
  );
};

export default OnTVPage;
