import {Card, CardHeader, CardBody, Spinner } from "@nextui-org/react";
import React, {Suspense} from "react";
import trailers from '../data/trailers'
import ReactPlayer from 'react-player';
import {useSearch} from "../context/searchContext.jsx";

const LazyReactPlayer = React.lazy(() => import('react-player'));


export default function TrailersPage() {
  const {searchQuery} = useSearch();
  const filteredTrailers = trailers.filter((trailer) =>
      trailer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="flex flex-row flex-wrap">
    {filteredTrailers.map((trailer) => (
    <Card style={{width: 310, margin: "5px 10px"}} className="py-4 bg-transparent text-white">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <small className="text-default-500">{trailer.premiereDate}</small>
        <h4 className="font-bold text-large">{trailer.name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
      <Suspense fallback={<Spinner size="lg" color="primary" />}>
      <ReactPlayer 
          controls
          url={trailer.videoLink}
          width={285}
          height={200}
        />
        </Suspense>
      </CardBody>
    </Card>
  )) }  
  </div>
);
}