import toast, { Toaster } from "react-hot-toast";

export default function ToasterCustom() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          padding: "12px",
          borderRadius: "8px",
          fontSize: "13px",
          fontWeight: "500",
        },
      }}
    />
  );
}
