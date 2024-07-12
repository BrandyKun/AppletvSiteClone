import {
  movies,
  randomMoviesSet1,
  randomMoviesSet2,
  Movie,
} from "../../movies";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import { useWindowSize } from "react-use";

export const VideoCarousel = () => {
  const { width, height } = useWindowSize();
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start end", "end start"],
  });
  const maximumScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.6667;
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);
  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximumScale * 1.1, maximumScale, 1],
  );

  const posterOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
  const posterTranslateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-20, 0],
  );
  const posterTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [20, 0],
  );
  return (
    <div className="bg-background p-8">
      <div
        ref={carouselWrapperRef}
        className="mt-[-100vh] h-[300vh] overflow-clip"
      >
        <div className="sticky top-0 flex h-screen items-center">
          <div className="relative left-1/2 mb-5 flex -translate-x-1/2 gap-5">
            <motion.div
              style={{ opacity: posterOpacity, x: posterTranslateXLeft }}
              className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl"
            >
              <img
                className="h-full w-full object-cover"
                src={movies[0].poster}
                alt={movies[0].name}
              />
            </motion.div>
            <motion.div
              style={{ scale }}
              className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl"
            >
              <img
                className="h-full w-full object-cover"
                src={movies[1].poster}
                alt={movies[1].name}
              />
            </motion.div>
            <motion.div
              style={{ opacity: posterOpacity, x: posterTranslateXRight }}
              className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl"
            >
              <img
                className="h-full w-full object-cover"
                src={movies[2].poster}
                alt={movies[2].name}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <SmallVideoCarousel movies={randomMoviesSet1} />

        <div className="[--carousel-offset:-32px] [--duration:75s]">
          <SmallVideoCarousel movies={randomMoviesSet2} />
        </div>
      </div>
    </div>
  );
};

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="overflow-clip">
      <div className="realtive left-[var(--carousel-offset,0px)] flex animate-carousel-move gap-3">
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
