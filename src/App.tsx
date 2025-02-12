import Button from "./components/button/Button";

function App() {
  const handleClick = () => {
    alert("You have clicked the button!");
  };
  return (
    <main role="main">
      <Button label="Click" onClick={handleClick} />
    </main>
  );
}

export default App;