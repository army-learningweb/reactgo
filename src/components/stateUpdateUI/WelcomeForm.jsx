import { useState } from "react";

function WelcomeForm() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  // const handleSetFirstName = (name) => {
  //   setfirstName(name)
  // }

  // const handleSetLastName = (name) => {
  //   setlastName(name)
  // }

  // const handleReset = () => {
  //   setfirstName("")
  //   setlastName("")
  // }

  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center min-h-screen">
        <div className="flex items-center gap-2">
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="border border-gray-200 py-1 px-2 rounded-md"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="border border-gray-200 py-1 px-2 rounded-md"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>

        <button
          onClick={() => {
            setfirstName("");
            setlastName("");
          }}
          className="bg-blue-600 text-white px-3 py-1 rounded-sm w-50"
        >
          Reset your name
        </button>

        {firstName && lastName && (
          <div className="text-3xl font-bold">
            Hi ! {firstName} {lastName}
          </div>
        )}
      </div>
    </>
  );
}

export default WelcomeForm;
