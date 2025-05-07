import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";

function App() {
  useEffect(() => {
    WebApp.ready(); // Сообщаем Telegram, что всё загружено
  }, []);

  const handleClick = () => {
    WebApp.sendData("Hello bro");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Привет, {WebApp.initDataUnsafe?.user?.first_name || "гость"}!</h1>
      <button onClick={handleClick}>Отправить в бота</button>
    </div>
  );
}

export default App;