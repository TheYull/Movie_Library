import React from "react";
import { useParams } from "react-router-dom";
// import s from "./CardDetailed.module.scss";
import { useFetchDetails } from "../../../hooks/useFetchDetails";
import { CardHeader } from "./CardHeader/CardHeader";
import { CardInfo } from "./CardInfo/CardInfo";
import { CardActors } from "./CardActors/CardActors";
import { CardVideo } from "./CardVideo/CardVideo";
import DataStatus from "../../common/DataStatus"
export const CardDetailed = () => {
  const { id, type } = useParams();
  const { data, loading, error } = useFetchDetails(id, type);

  
  return (
    <DataStatus loading={loading} error={error} data={data}>
    <div className="container media">
      <CardHeader
        title={data?.title}
        name={data?.name}
        backdrop={data?.backdrop_path}
        poster={data?.poster_path}
        vote={data?.vote_average}
        tagline={data?.tagline}
        overview={data?.overview}
      />

      <CardInfo
        language={data?.original_language}
        budget={data?.budget}
        revenue={data?.revenue}
        countries={data?.production_countries}
        companies={data?.production_companies}
        genres={data?.genres}
        homepage={data?.homepage}
        duration={data?.runtime}
        date={data?.release_date}
      />

      <CardActors actors={data?.credits?.cast || []} />
      <CardVideo type={type} id={id} />
    </div>
    </DataStatus>
  );
};