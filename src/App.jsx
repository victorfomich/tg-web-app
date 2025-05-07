import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";
import "./App.css";

function App() {
  const [username, setUsername] = useState("...");

  useEffect(() => {
    WebApp.ready();
    if (WebApp.initDataUnsafe?.user?.username) {
      setUsername(WebApp.initDataUnsafe.user.username);
    }
  }, []);

  return (
    <div className="game-container">
      <h2 className="username">👤 @{username}</h2>
      <div className="moving-box"></div>
    </div>
  );
}

export default App;