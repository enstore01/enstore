interface BannerProps {
  src: string;
  title: string;
  description?: string;
}

const Banner: React.FC<BannerProps> = ({ src, title, description }) => {
  return (
    <div
      className="relative bg-no-repeat bg-cover bg-center h-[500px] flex justify-center items-center"
      style={{ backgroundImage: `url(${src})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative text-center text-white px-8 md:w-[70%] xl:w-[60%] mx-auto">
        <h2 className="top-header text-white py-2">{title}</h2>
        {description && <p className="lg:text-[18px] mt-2">{description}</p>}
      </div>
    </div>
  );
};

export default Banner;
