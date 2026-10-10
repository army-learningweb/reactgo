function SectionPage({ title, children }) {
  return (
    <>
      <h1 className="text-5xl font-black tracking-tight">{title}</h1>
      <div className="text-justify px-10">{children}</div>
    </>
  );
}

export { SectionPage };
