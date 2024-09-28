import Badge from "./Badge";
import toast, { Toaster } from "react-hot-toast";

function Badges() {
  const sizes = ["sm", "md", "lg"];
  const colors = ["neutral", "error", "warning", "success", "brand"];

  const handleCopy = (classes) => {
    navigator.clipboard
      .writeText(classes)
      .then(() => {
        toast("Classes copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  };

  return (
    <>
      <div className="h-fit w-60 mx-auto grid grid-cols-badges gap-6 items-center justify-start">
        {colors.map((color) =>
          sizes.map((size) => (
            <Badge
              key={`${size}/${color}`}
              size={size}
              color={color}
              onCopy={handleCopy}
            >
              Label
            </Badge>
          ))
        )}
      </div>
      <Toaster />
    </>
  );
}

export default Badges;
