import React, { useEffect, useState } from "react";
import Player from "./Player/Player";
import "./index.css";
import EpisodeCard from "./EpisodeCard/EpisodeCard";
import fetchTracks from "./fetch";
import Spinner from "./Spinner/Spinner";

function App() {
  const [page, setPage] = useState(0);
  const [tracks, setTracks] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const doFetch = async (force) => {
    if (!force && tracks.length > 0) {
      return;
    }
    setFetching(true);
    let fetched = [];
    const from = page;
    const to = from + 5;

    for (let x = from; x < to; x++) {
      const t = await fetchTracks(x);
      fetched = [...fetched, ...t];
      setPage(x + 1);
    }

    setTracks([...tracks, ...fetched]);
    setFetching(false);
  };

  useEffect(() => {
    doFetch();
  }, []);

  const renderPlayer = () => {
    let t = selectedTrack;
    if (!t && tracks.length > 0) {
      t = tracks[0];
      setSelectedTrack(t);
    }
    if (!t) {
      return null;
    }
    return <Player url={t.stream_url} image={t.artwork_url} title={t.title} />;
  };

  return (
    <div className="h-center flex items-center justify-center flex-col space-y-2">
      <div className="max-w-xl w-full">{renderPlayer()}</div>
      {tracks.map((t) => {
        return (
          <EpisodeCard
            name={t.title}
            key={t.id}
            callback={() => setSelectedTrack(t)}
            isCurrent={selectedTrack?.id === t.id}
          />
        );
      })}
      {fetching && (
        <div className="w-full p-2 max-w-xl">
          <Spinner />
        </div>
      )}
      <div
        className="w-full p-4 w-full max-w-xl border-solid border-2 rounded text-center"
        onClick={async () => await doFetch(true)}
      >
        <h2>Daugiau ...</h2>
      </div>
    </div>
  );
}

export default App;
