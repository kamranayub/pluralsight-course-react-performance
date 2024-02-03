import createSharedStateHook from "@/hooks/createSharedStateHook";

const useSharedCounter = createSharedStateHook(0);

export default function Counter() {
  return (
    <>
      <CounterDisplay />
      <CounterButton />
    </>
  );
}

const CounterDisplay = () => {
  const [count] = useSharedCounter();
  return <div>Count: {count}</div>;
};

const CounterButton = () => {
  const [count, setCount] = useSharedCounter();
  return (
    <button
      className="bg-blue-500 text-white p-1 rounded hover:bg-blue-400"
      onClick={() => setCount(count + 1)}
    >
      Increment
    </button>
  );
};
