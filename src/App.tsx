const user = 1;

function App() {
  async function handleClick() {
    try {
      const res = await fetch("http://localhost:3000/tictactoe", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        console.log(data.description);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="grid grid-cols-3 gap-4 text-center">
        <h1
          onClick={handleClick}
          className="rounded-lg text-6xl text-transparent border-4 border-sky-400"
        >
          "1"
        </h1>
        <h1 className="rounded-lg text-6xl text-transparent border-4 border-sky-400">
          02
        </h1>
        <h1 className="rounded-lg text-6xl text-transparent border-4 border-sky-400">
          03
        </h1>
        <h1 className="rounded-lg text-6xl text-transparent border-4 border-sky-400">
          04
        </h1>
        <h1 className="rounded-lg text-6xl text-transparent border-4 border-sky-400">
          05
        </h1>
        <h1 className="rounded-lg text-6xl text-transparent border-4 border-sky-400">
          06
        </h1>
        <h1 className="rounded-lg text-6xl text-transparent border-4 border-sky-400">
          07
        </h1>
        <h1 className="rounded-lg text-6xl text-transparent border-4 border-sky-400">
          08
        </h1>
        <h1 className="rounded-lg text-6xl text-transparent border-4 border-sky-400">
          09
        </h1>
      </div>
    </div>
  );
}

export default App;
