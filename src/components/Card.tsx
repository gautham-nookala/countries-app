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
      ${image ? "items-center" : ""}
      ${className}
    `}
  >
    <div className="w-full mb-4">
      <p className="text-base font-normal text-header-text">{title}</p>
    </div>

    {image ? (
      <div className="w-full flex justify-center">
        <img
          src={image}
          alt={alt || `Flag of ${countryName}`}
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>
    ) : (
      <p className="font-normal text-xl lg:text-3xl text-column-text leading-tight">
        {value}
      </p>
    )}
  </div>
);

export default Card;
