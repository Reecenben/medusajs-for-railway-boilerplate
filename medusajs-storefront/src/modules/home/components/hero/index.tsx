import { Button } from "@medusajs/ui";

const Hero = () => {
  return (
    <div
      className="h-[75vh] w-full relative"
      style={{
        backgroundImage: 'url("https://res.cloudinary.com/dgitafnnb/image/upload/v1720499961/greg-raines-C-mxLOk6ANs-unsplash_t525i6.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 z-10 flex justify-center items-center">
        <Button
          as="a"
          href="/store"
          className="bg-white text-black py-2 px-4 rounded"
        >
          Go to Store
        </Button>
      </div>
    </div>
  );
};

export default Hero;
