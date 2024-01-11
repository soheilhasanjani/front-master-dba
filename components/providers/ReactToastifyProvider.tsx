import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReactToastifyProvider = () => {
  return (
    <ToastContainer
      position="bottom-right"
      rtl
      pauseOnFocusLoss
      toastClassName="font-azar-mehr"
    />
  );
};

export default ReactToastifyProvider;
