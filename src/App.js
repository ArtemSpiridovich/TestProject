import React from 'react';
import Header from "./components/Header/Header";
import MainScreen from "./components/mainScreen/MainScreen";
import './App.css';
import Images from "./components/images-blocks/images";

const App = () => {
  return (
    <>
      <Header/>
      <MainScreen/>
      <Images/>
    </>
  );
}

export default App;
