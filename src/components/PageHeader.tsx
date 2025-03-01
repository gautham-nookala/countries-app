interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => (
  <div className="font-inter">
    <h1 className="text-5xl font-semibold leading-tight mb-3 text-left text-heading-color">
      {title}
    </h1>
    <h2 className="text-base font-normal mb-11 text-subtitle-color">
      {subtitle}
    </h2>
  </div>
);

export default PageHeader;
