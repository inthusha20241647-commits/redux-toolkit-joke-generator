import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJoke } from "./jokeSlice";

function App() {
  const [category, setCategory] = useState();

  const joke = useSelector(function (state) {
    return state.joke.joke;
  });
  const dispatch = useDispatch();

  function handleCategory(e) {
    setCategory(e.target.value);
  }
  function handleFetch() {
    dispatch(fetchJoke(category));
  }

  return (
    <div>
      <input onChange={handleCategory}></input>
      <button onClick={handleFetch}>Get jokes</button>
      <h1>{joke}</h1>
    </div>
  );
}
export default App;