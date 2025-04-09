import React from "react";
import "./App.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    prreturnice: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  <main className="menu">
    {pizzaData.length > 0 ? (
      <>
        <h2>Our Menu</h2>
        <p>
          Authentic Italian Cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza item={pizza} key={pizza.name} />
          ))}
        </ul>
      </>
    ) : (
      <p>We are still working on our menu. Please come back later.</p>
    )}
  </main>;
};

const Pizza = ({ item }) => {
  const { name, ingredients, price, photoName, soldOut } = item;

  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>Ingredients: {ingredients}</p>
        <span>{soldOut ? "Sold Out" : `$${price}`}</span>
      </div>
    </li>
  );
};

function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 11;
  const closingHour = 22;
  const isOpen = currentHour >= openHour && currentHour < closingHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closingHour={closingHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closingHour}
          :00.
        </p>
      )}
    </footer>
  );
}

function Order({ closingHour }) {
  return (
    <div className="order">
      <p>We're open until {closingHour}:00. Come visit us or order online!</p>
      <button className="btn">Order</button>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
