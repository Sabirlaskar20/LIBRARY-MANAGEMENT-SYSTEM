function PageTitle({ title, description }) {
  return (
    <div className="page-title-wrap">
      <h1>{title}</h1>
      {description && <p className="page-subtitle">{description}</p>}
    </div>
  );
}

export default PageTitle;