import { MessageCircleMore } from "lucide-react";
import { getAgeText, getInitials } from "../../utils/user";
import users from "../../data/user";

function UserProfile() {
  return (
    <>
      {users?.length > 0 ? (
        users.map((user) => (
          <div
            key={user.id}
            className="min-w-125 mb-2 bg-white border border-gray-200 rounded-xl shadow-sm p-4"
          >
            <div className="flex justify-between">
              <div className="flex gap-4 items-center">
                {/* avatar */}
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt=""
                    className="w-15 h-15 object-cover rounded-full"
                  />
                ) : user.name ? (
                  <div className="w-15 h-15 rounded-full bg-gray-800 text-white flex justify-center items-center text-lg font-medium">
                    {getInitials(user.name)}
                  </div>
                ) : (
                  <div className="w-15 h-15 rounded-full bg-gray-800 text-white flex justify-center items-center text-lg font-medium">
                    ?
                  </div>
                )}

                {/* info */}
                <div className="flex flex-col">
                  <p className="font-medium ">{user.name || "Ẩn danh"}</p>
                  {user.birthYear ? (
                    <p className="text-gray-600">
                      BirthYear: {user.birthYear} - (
                      {getAgeText(user.birthYear)} tuổi)
                    </p>
                  ) : (
                    <p className="text-gray-500">Chưa cập nhật tuổi</p>
                  )}

                  {user.live ? (
                    <p className="text-gray-600">Live in: {user.live}</p>
                  ) : (
                    <p className="text-gray-500">Chưa cập nhật nơi ở</p>
                  )}
                </div>
              </div>

              {/* button message */}
              {user.name && (
                <div>
                  <div className="flex items-center gap-1 px-2 py-1.5 rounded-md text-gray-600 border border-gray-200 cursor-pointer hover:border-blue-600 hover:bg-blue-600/10 hover:text-blue-600 active:text-blue-800">
                    <MessageCircleMore size={15} />
                    <span className="font-medium text-xs">Message...</span>
                  </div>
                </div>
              )}
            </div>

            {/* skill */}
            {user.skills?.length > 0 ? (
              <>
                <ul className="mt-3 flex gap-2 items-center">
                  <p className="font-medium">Skills:</p>
                  {user.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-indigo-500/10 text-indigo-500 font-medium text-xs py-1 px-2 rounded-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-gray-500 mt-3 bg-gray-100 w-fit px-2 py-1 rounded-sm">
                Chưa cập nhật kĩ năng !
              </p>
            )}
          </div>
        ))
      ) : (
        <div className="text-gray-500">Hiện chưa có User nào</div>
      )}
    </>
  );
}

export default UserProfile;
