const _cache = {};

export default async function fetchTracks(page) {
  const response = await fetch(
    `https://api-v2.hearthis.at/radiovilnius/?type=tracks&count=20&page=${page}`
  );
  const tracks = [];
  const json = await response.json();
  json.forEach((track) => {
    if (track.uri.includes("audronasa")) {
      console.log(track.uri);
      tracks.push(track);
    }
  });
  return tracks;
}
