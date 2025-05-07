import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";
import "./App.css";

function App() {
  const [showMarket, setShowMarket] = useState(false);
  const [username, setUsername] = useState("...");

  useEffect(() => {
    WebApp.ready();
    if (WebApp.initDataUnsafe?.user?.username) {
      setUsername(WebApp.initDataUnsafe.user.username);
    }
  }, []);

  return (
    <div className="app-container">
      <h2 className="username">👤 @{username}</h2>

      {/* Двигающийся шар */}
      <div className="circle"></div>

      {/* Нижняя кнопка */}
      <div className="bottom-menu">
        <button className="market-button" onClick={() => setShowMarket(true)}>Маркет</button>
      </div>

      {/* Модальное окно */}
      {showMarket && (
        <div className="modal">
          <div className="modal-content">
            <h3>🛍️ Добро пожаловать в маркет!</h3>
            <p>Здесь ты сможешь покупать усиления и массу 🐾</p>
            <button onClick={() => setShowMarket(false)}>Назад</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;