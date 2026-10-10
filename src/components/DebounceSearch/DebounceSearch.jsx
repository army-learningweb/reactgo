import { BaseLayout } from "../layouts/BaseLayout";
import { useEffect, useRef, useState } from "react";

export default function DebounceSearch() {
  const [search, setSearch] = useState("");
  const [searchDebounce, setSearchDebounce] = useState("");
  const ipRef = useRef(null);
  const searchDebounceID = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && (event.key == "k" || event.key == "K")) {
        event.preventDefault();
        ipRef.current.focus();
      }
    };

    // Sự kiện phím tắt
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSetSearch = (e) => {
    setSearch(e.target.value);

    if (searchDebounceID.current) clearTimeout(searchDebounceID.current);
    searchDebounceID.current = setTimeout(() => {
      setSearchDebounce(e.target.value)
    }, 500);
  };

  const handleClearSearch = () => {
    setSearch("");
    setSearchDebounce("");
  }

  return (
    <BaseLayout title="Debounce Search">
      <div className="mt-5">
        <form action="">
          <div className="relative border border-gray-300 rounded-md focus-within:outline-blue-600 focus-within:outline-2 bg-white">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Tìm kiếm tại đây..."
              value={search}
              ref={ipRef}
              className="px-3 py-2 w-full rounded-md text-sm focus:outline-0"
              onChange={handleSetSearch}
            />
            {search && (
              <span
                onClick={handleClearSearch}
                className="absolute top-1.5 right-1.5 text-xs bg-red-600/10 text-red-600 p-1 rounded-md font-semibold cursor-pointer"
              >
                Xóa
              </span>
            )}
          </div>
        </form>

        <div className="flex gap-3 justify-center mt-5 items-center">
          <span>Press</span>
          <span className="px-2 py-1 bg-gray-500/10 border-gray-400 border rounded-md text-xs font-semibold">
            Ctrl + k
          </span>
          <span>to search</span>
        </div>

        {searchDebounce && (
          <div className="mt-5 flex justify-center text-gray-500 italic p-4 bg-white rounded-lg shadow-md">
            Bạn đang tìm kiếm "{searchDebounce}"
          </div>
        )}
      </div>
    </BaseLayout>
  );
}
