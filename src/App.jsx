import { RouterProvider } from "react-router-dom";
//custom
import { router } from "./routes";
import { ToastContainer } from "react-toastify";

//style
import "react-toastify/dist/ReactToastify.css";

//react query
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RouterProvider router={router} />
        <ToastContainer autoClose={3000} />
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
