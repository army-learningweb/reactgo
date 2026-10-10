import { useParams } from "react-router";
import { Link } from "react-router";
import { Freelancers } from "../../data/Freelancer";
import { MoveLeft } from "lucide-react";
import { getInitials } from "../../utils/Freelancer";
export default function FreelancerDetails() {
  const { id } = useParams();
  const user = Freelancers.find((user) => user.id == id);
  
  return (
    <div className="p-3 h-fit">
      <Link to="/" className="text-sm text-blue-600 flex items-center gap-2">
        <MoveLeft size={17} className="mt-0.75" />
        <span>Quay về danh sách</span>
      </Link>

      <div className="border border-gray-300 p-4 rounded-xl text-sm mt-5 bg-white">
        <div className="flex justify-between w-full">
          <div className="flex gap-4 items-center">
            {/* avatar */}
            {user.avatar ? (
              <img
                src={user.avatar}
                alt=""
                className="w-16 h-16 rounded-full border-3 border-blue-600/50"
              />
            ) : (
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center font-medium  border-blue-600/50 border-2">
                {getInitials(user.name)}
              </div>
            )}

            {/* info */}
            <div className="flex flex-col gap-0.5 ">
              <Link
                to={`/FreelancerDetails/${user.id}`}
                className="font-medium hover:underline"
              >
                {user.name}
              </Link>
              <p>Age: {user.age}</p>
              <p>Live: {user.live}</p>
            </div>
          </div>
          <div>
            <button className="py-1 px-3 bg-blue-600/10 text-blue-600 border-blue-600/50 border rounded-md cursor-pointer">
              Message...
            </button>
          </div>
        </div>

        {/* skill */}
        {user.skills?.length > 0 && (
          <ul className="flex gap-2 px-2 mt-4 text-xs font-medium">
            {user.skills.map((skill, index) => (
              <li
                key={index}
                className="px-2 bg-blue-600/10 text-blue-600 py-1 rounded-md"
              >
                {skill}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
