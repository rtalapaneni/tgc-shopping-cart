import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../store/counterSlice";

const Home = () => {
  const x = useSelector((state) => {
    console.log("counter:", state.counter);
    return state.counter;
  });

  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Home</h1>
      <p>Counter: {x.value}</p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <button onClick=
        {() => {
          dispatch(decrement());
        }}>
        decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Home;
