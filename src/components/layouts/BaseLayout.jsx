function BaseLayout({ children, title }) {
  return (
    <div className="w-130 mx-auto">
      <h1 className="text-center text-4xl font-black text-gray-800 mt-10">{title}</h1>
      <div className="mt-5 flex flex-col justify-center">
          {children}
      </div>
    </div>
  );
}

export { BaseLayout };
