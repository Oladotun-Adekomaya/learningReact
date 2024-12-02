import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";

export default function App() {
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="app">
      <Header />

      <Main></Main>
    </div>
  );
}
