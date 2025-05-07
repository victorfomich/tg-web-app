import "./market.css";

const items = [
  { id: 1, ton: 0.75, mass: 1, price: 2, color: "blue" },
  { id: 2, ton: 0.5, mass: 0.5, price: 1, color: "purple" },
  { id: 3, ton: 0.25, mass: 0.25, price: 0.5, color: "yellow" },
  { id: 4, ton: 1, mass: 2, price: 3, color: "green" },
  { id: 5, ton: 0.1, mass: 0.1, price: 0.2, color: "gray" },
];

export default function Market({ onClose }) {
  return (
    <div className="market-overlay">
      <div className="market-container">
        <div className="market-header">
          <h3>Маркет</h3>
          <button onClick={onClose} className="close-button">✕</button>
        </div>

        <div className="market-items">
          {items.map((item) => (
            <div key={item.id} className="market-item">
              <div className={`item-image placeholder ${item.color}`}></div>
              <div className="item-info">
                <div className="reward">+{item.ton} TON<br />+{item.mass} $mASS</div>
                <div className="price">
                  <img src="/gem.png" alt="gem" />
                  <span>{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}