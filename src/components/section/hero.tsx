import { Button } from "../button";
import Container from "../container";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const videoContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainer,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="bg-background relative text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainer}
        className="absolute -top-[--header-height] left-0 h-[200vh] w-full"
      >
        <img
          className="sticky top-0 h-screen w-full object-cover"
          src="/posters/napoleon.webp"
          alt=""
        />
      </motion.div>
      <Container className="relative z-10 h-[--hero-height] pb-7">
        <motion.div
        className="flex flex-col h-full items-start justify-end"
          variants={{
            hidden: { opacity: 0  },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.98 }}
        >
          <h1 className="mb-10 text-5xl font-bold">
            All Apple Oroginals. <br />
            only on apple TV+
          </h1>
          <Button className="mb-16" size="large">
            {" "}
            Stream Now
          </Button>
          <p className="font-semibold">Watch on the TV app</p>
        </motion.div>
      </Container>
    </div>
  );
};
