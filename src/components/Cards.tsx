interface CardProps {
  title: string;
  value: string;
  className?: string;
}

interface ImageCardProps {
  svg?: string;
  png?: string;
  alt?: string;
  countryName: string;
}

export const Card = ({ title, value, className = "" }: CardProps) => (
  <div
    className={`bg-white rounded-xl shadow-card p-6 font-assistant captialize ${className}`}
  >
    <p className="text-base font-normal text-header-text mb-8">{title}</p>
    <p className="font-normal text-3xl text-column-text leading-6">{value}</p>
  </div>
);

export const ImageCard = ({ svg, png, alt, countryName }: ImageCardProps) => (
  <div className="bg-white rounded-xl shadow-card p-6 flex flex-col gap-8 w-full md:w-80 font-assistant">
    <div className="w-full">
      <p className="text-base font-normal text-header-text mb-2">
        Country Flag
      </p>
    </div>
    {(svg || png) && (
      <img
        src={svg || png}
        alt={alt || `Flag of ${countryName}`}
        className="w-full h-auto rounded-xl"
      />
    )}
  </div>
);
