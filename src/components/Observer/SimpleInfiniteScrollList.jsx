import { useEffect, useRef, useState } from "react";
import { BaseLayout } from "../layouts/BaseLayout";
import axios from "axios";
import { getInitials } from "../../utils/Freelancer";

export default function SimpleInfiniteScrollList() {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState(0);
  const usersAlowed = users.slice(0, visibleUsers);
  const loadMoreRef = useRef(null);
  
  // Lấy API USERS
  useEffect(() => {
    const fetchUsers = async () => {
      const controller = new AbortController();
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal },
        );
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  // Observer Users
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (visibleUsers >= users.length) return;
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          setVisibleUsers((prev) => prev + 2);
        }, 500);
      }
    });

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [visibleUsers, users.length]);

  return (
    <BaseLayout title="INFINITY SCROOL">
      <div className="mt-5 flex flex-col gap-2 justify-center items-center">
        {usersAlowed.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-sm p-4 rounded-xl w-full flex gap-4"
          >
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-md">
              {getInitials(user.name)}
            </div>
            <div className="flex flex-col text-sm">
              <div className="flex gap-2">
                <p className="font-medium text-[16px]">{user.name}</p>
                <span>-</span>
                <p className="text-gray-500">({user.email})</p>
              </div>
              <div className="text-gray-500">Phone: {user.phone}</div>
              <div className="text-gray-500">
                City: {user.address.city} - ({user.address.street})
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleUsers < users.length && (
        <div
          ref={loadMoreRef}
          className="mt-5 flex gap-2 items-center justify-center"
        >
          <div className="w-5 h-5 border-3 border-blue-600 border-t-transparent  rounded-full animate-spin"></div>
          <span>Loading Users...</span>
        </div>
      )}
    </BaseLayout>
  );
}
