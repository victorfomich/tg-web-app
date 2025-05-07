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

    const moveCatRandomly = () => {
      const cat = document.getElementById("cat");
      if (!cat) return;

      const screenWidth = window.innerWidth - 64; // ширина минус размер кота
      const screenHeight = window.innerHeight - 64 - 70; // высота минус размер кота и кнопка

      const newX = Math.random() * screenWidth;
      const newY = Math.random() * screenHeight;

      cat.style.transform = `translate(${newX}px, ${newY}px)`;
    };

    // первое движение + повтор каждые 2 секунды
    moveCatRandomly();
    const interval = setInterval(moveCatRandomly, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <h2 className="username">👤 @{username}</h2>

      {/* Кот */}
      <img id="cat" src="/cat.png" className="cat" alt="cat" />

      {/* Нижняя кнопка */}
      <div className="bottom-menu">
        <button className="market-button" onClick={() => setShowMarket(true)}>Маркет</button>
      </div>

      {/* Модалка */}
      {showMarket && (
        <div className="modal">
          <div className="modal-content">
            <h3>🛍️ Маркет</h3>
            <p>Скоро тут будут товары</p>
            <button onClick={() => setShowMarket(false)}>Назад</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;