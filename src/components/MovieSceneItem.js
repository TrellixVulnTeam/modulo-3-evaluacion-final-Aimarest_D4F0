import "../styles/MovieSceneItem.scss";

function MovieSceneItem(props) {
  return (
    <navLink to="#" className="MovieScene__Item">
      <img
        src={props.movieScene.poster}
        className="MovieScene__card__image"
        alt={`Poster de la película ${props.movieScene.name}`}
        title={`Poster de la película ${props.movieScene.name}`}
      />
      <h2 className="MovieScene__card__name">{props.movieScene.name}</h2>
      <p className="MovieScene__card__fullLine">{props.movieScene.fullLine}</p>
      <p className="MovieScene__card__year">{props.movieScene.year}</p>
    </navLink>
  );
}

export default MovieSceneItem;
