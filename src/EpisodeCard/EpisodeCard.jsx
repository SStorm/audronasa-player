function EpisodeCard({ name, callback, isCurrent }) {
  return (
    <div
      className="w-full border-solid border-2 p-4 w-full max-w-xl"
      onClick={callback}
    >
      <h2>
        {name}{" "}
        {isCurrent && (
          <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            Now Playing
          </span>
        )}
      </h2>
    </div>
  );
}

export default EpisodeCard;
