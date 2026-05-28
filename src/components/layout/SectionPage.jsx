import Header from "./Header";
import Footer from "./Footer";

function SectionPage({ title, children }) {
  return (
    <>
      <div className="min-h-screen flex flex-col text-sm text-gray-800">
        <Header />
        <main className="flex-1 min-w-5xl mx-auto py-5 flex flex-col items-center">
          <h1 className="py-3 text-6xl font-bold tracking-tight bg-linear-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
            {title}
          </h1>
          <div className="mt-5">
            {children}
          </div>
          
        </main>
        <Footer />
      </div>
    </>
  );
}

export default SectionPage;
