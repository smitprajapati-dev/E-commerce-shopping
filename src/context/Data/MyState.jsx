import React, { useState } from "react";
import MyContext from "./MyContext";
import { Timestamp } from "firebase/firestore";

function MyState(props) {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [loading, setLoading] = useState(false);

  const [prodcts, setProducts] = useState({
    title: null,
    price: null,
    imgUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });
  const addProduct = async () =>{
    
  }
  return (
    <MyContext.Provider value={{ mode, toggleMode, loading, setLoading }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
