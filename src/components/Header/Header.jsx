import "./Header.css";

const reactDescription = ["Fundamental", "Crucial", "Core"];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const Header = () => {
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescription[getRandomInt(2)]} React concepts you will need for
          almost any app you are going to build!
        </p>
      </header>
      ;
    </div>
  );
};

export default Header;
