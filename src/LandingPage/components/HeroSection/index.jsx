import image from "../../../assets/Landing.jpg";
import Button from "../../../components/button";


const HeroSection = () => {
  return (
    <section className="">
      <div className="h-[calc(100vh-6.375rem)] relative">
        <img
          className="w-full object-cover h-full"
          src={image}
          alt="current-item"
        />
        <div className="absolute inset-0 bg-[white] opacity-3"></div>
        <div className="container">
          <div className="absolute bottom-40 flex flex-col gap-8 items-start">
            <h4 className="text-5xl uppercase font-normal">Enamel Pins</h4>
            <Button className="py-3 min-w-[14rem]" variant="secondary">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
