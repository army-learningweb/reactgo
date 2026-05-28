import navigations from "../../data/navigation";

function Header() {
  return (
    <>
      <header className="border-b border-gray-100">
        <nav className="flex justify-between items-center max-w-5xl mx-auto py-3">
          <div className="font-bold text-3xl tracking-tight">
            <span>webtalks</span>
          </div>
          <ul className="flex gap-10 mt-1">
            {navigations?.length > 0 &&
              navigations.map((item,index) => (
                <li key={index} className="cursor-pointer hover:underline">
                  {item.name}
                </li>
              ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;