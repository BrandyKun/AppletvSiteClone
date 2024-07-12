import {
  movies,
  randomMoviesSet1,
  randomMoviesSet2,
  Movie,
} from "../../movies";

export const VideoCarousel = () => {
  return (
    <div className="bg-background p-8">
      <div className="overflow-clip">
        <div className="mb-5 flex -translate-x-1/2 gap-5">
          <div className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl">
            <img
              className="h-full w-full object-cover"
              src={movies[0].poster}
              alt={movies[0].name}
            />
          </div>
          <div className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl">
            <img
              className="h-full w-full object-cover"
              src={movies[1].poster}
              alt={movies[1].name}
            />
          </div>
          <div className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl">
            <img
              className="h-full w-full object-cover"
              src={movies[2].poster}
              alt={movies[2].name}
            />
          </div>
        </div>
        <div className="space-y-3">
          <SmallVideoCarousel movies={randomMoviesSet1} />

          <div className="[--duration:75s] [--carousel-offset:-32px]">
              <SmallVideoCarousel movies={randomMoviesSet2} />
          </div>
        </div>
      </div>
    </div>
  );
};

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="overflow-clip">
        <div className="flex realtive gap-3 animate-carousel-move left-[var(--carousel-offset,0px)]">
          {movies.map((movie, index) => (
            <div className="w-[23vw] shrink-0" key={index}>
              <img
                className="aspect-video h-full w-full rounded-xl object-cover"
                src={movie.poster}
                alt={movie.name}
              />
            </div>
          ))}
        </div>
    </div>
  );
};
