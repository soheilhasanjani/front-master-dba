import { Loader } from "react-feather";

export default function Loading() {
  return (
    <div className="flex justify-center">
      <Loader className="animate-spin text-primary" />
    </div>
  );
}
