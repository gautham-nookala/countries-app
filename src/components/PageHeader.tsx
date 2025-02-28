interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => (
  <>
    <h1 className="font-inter text-5xl font-semibold leading-tight mb-3 text-left text-heading-color">
      {title}
    </h1>
    <h2 className="font-inter text-base font-normal mb-11 text-subtitle-color">
      {subtitle}
    </h2>
  </>
);

export default PageHeader;
