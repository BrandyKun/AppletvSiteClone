import { Button } from "./button";
import Container from "./container";

export const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast z-20 relative text-white">
        <Container className="flex items-center min-h-[--header-row-height] ">
          <a href="/" className="-ml-6 flex h-[--header-row-height] items-center px-6 text-xl ">
             <span className="sr-only">back to homepage</span>
          </a>
        </Container>
      </header>

      <div className="bg-backgroundContrast sticky z-20 top-0 items-center  text-white">
        <Container className="flex justify-between items-center min-h-[--header-row-height]"><p className="text-xl font-semibold">Apple TV+</p>
          <Button size="small">Stream Now</Button>
        </Container>
      </div>
    </>
  );
};
