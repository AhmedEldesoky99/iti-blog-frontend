import { RouterProvider } from "react-router-dom";
//custom
import { router } from "./routes";
import { ToastContainer } from "react-toastify";

//style
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
