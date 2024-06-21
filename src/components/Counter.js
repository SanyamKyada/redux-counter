import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter-slice";

const Counter = () => {
  /*When you use useSelector, react-redux will automatically setup a subscription to redux store for this 
    component. so your component will be updated and will recive the latest counter automatically whenever that
    data changes in the redux store. If you ever un-mount this component, react-redux will automatically clear
    the subscription.*/
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseDispatch = () => {
    dispatch(counterActions.increase(10));
    /*{ type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
      this object will be sent to action parameter of increase reducer.
      And the name payload is not upto you.*/
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseDispatch}>Increse by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
