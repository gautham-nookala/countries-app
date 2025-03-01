interface CardProps {
  title: string;
  value?: string;
  image?: string;
  alt?: string;
  countryName?: string;
  className?: string;
}

export const Card = ({
  title,
  value,
  image,
  alt,
  countryName,
  className = "",
}: CardProps) => (
  <div
    className={`
      bg-white 
      rounded-xl 
      shadow-card 
      p-6
      ${image ? "flex flex-col gap-8 w-full md:w-80" : ""}
      ${className}
    `}
  >
    <div className="w-full">
      <p className="text-base font-normal text-header-text mb-8">{title}</p>
    </div>

    {image ? (
      <img
        src={image}
        alt={alt || `Flag of ${countryName}`}
        className="w-full h-auto rounded-xl"
      />
    ) : (
      <p className="font-normal text-3xl text-column-text leading-6">{value}</p>
    )}
  </div>
);

export default Card;
