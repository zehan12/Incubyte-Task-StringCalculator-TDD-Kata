import Button from "./components/button/Button";

function App() {
  const handleClick = () => {
    alert("You have clicked the button!");
  };
  return (
    <main role="main">
      <h1 className="text-center text-4xl font-bold text-zinc-800/90">String Calculator</h1>
      <Button label="Click" onClick={handleClick} />
    </main>
  );
}

export default App;