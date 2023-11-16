import React from "react";
import { useParams } from 'react-router-dom';
import ActorDetails from "../components/actorDetails/";
import PageTemplate from "../components/templateActorDetails";
import { getActor } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { get } from "react-hook-form";

const ActorPage = () => {
  const { id } = useParams();
  const { data: actor , error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    () => getActor(id)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
        <PageTemplate 
        title={"Actor Information"}>
        <ActorDetails actor={actor} />
        </PageTemplate>
    </>
  );
};

export default ActorPage;