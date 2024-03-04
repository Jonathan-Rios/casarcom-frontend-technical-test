import "./styles/global.css";
import { Router } from "./Router";
import { AppProvider } from "./context";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Loading } from "./components/Loading";

function App() {
  return (
    <AppProvider>
      <Router />
      <ToastContainer />
      <Loading />
    </AppProvider>
  );
}

export default App;
