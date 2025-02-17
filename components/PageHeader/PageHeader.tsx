interface PageHeaderProps {
  src: string;
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ src, title, description }) => {
  return (
    <div
      className="relative bg-no-repeat bg-cover bg-center py-16 md:py-24"
      style={{ backgroundImage: `url(${src})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}
      <div className="relative text-center text-white px-8 md:w-[70%] xl:w-[60%] mx-auto">
        <h2 className="top-header">{title}</h2>
        {description && <p className="lg:text-[18px] mt-2">{description}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
