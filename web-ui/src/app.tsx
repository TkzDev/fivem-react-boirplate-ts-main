import { React, useEffect, useState } from "react";
import { fetchNui } from "./utils/fetchNui";
import { ListExample } from "./pages/list-example";
import "./global.css"
import { ThemeProvider } from "./pages/theme-provider";

interface BoirplateInfosProps {
  action: string;
}

export function close(setClientData:  any) {
  fetchNui("close", {});
}

export function App() {
  const [clientData, setClientData] = useState<BoirplateInfosProps>({ action: "" });
  const [showInterface, setShowInterface] = useState<boolean>(true);

  useEffect(() => {
    const eventListener = ({ data }: { data: BoirplateInfosProps }) => {
      setClientData(data);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        close(setClientData);
      }
    };

    window.addEventListener("message", eventListener);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("message", eventListener);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  
  useEffect(() => {
    if (clientData.action === "closeNui") {
      setShowInterface(false);
    } else {
      setShowInterface(true);
    }
  }, [clientData]);

  console.log(clientData.action)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      { showInterface && clientData.action === "showNui" && <ListExample/> }
    </ThemeProvider>
  );
}