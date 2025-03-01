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
      flex 
      flex-col 
      h-full
      ${className}
    `}
  >
    <div className="w-full mb-8">
      <p className="text-base font-normal text-header-text">{title}</p>
    </div>

    {image ? (
      <div className="w-full flex justify-center">
        <img
          src={image}
          alt={alt || `Flag of ${countryName}`}
          className="w-64 h-full rounded-xl object-fit"
          loading="lazy"
        />
      </div>
    ) : (
      <p className="font-normal text-xl lg:text-3xl text-column-text leading-tight capitalize">
        {value}
      </p>
    )}
  </div>
);

export default Card;
