import { ModalProvider } from "@saimin/react-modal-manager";
import Home from "./pages/Home";

function App() {
  return (
    <ModalProvider>
      <Home />
    </ModalProvider>
  );
}

export default App;
