
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react'
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Posts from './components/Posts';
import Notfound from './components/Notfound';
import Postsid from './components/Postsid';
import Users from './components/Users';
import Usersid from "./components/Usersid";
import CreatPost from "./components/CreatPost";
import Editpost from "./components/Editpost";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users/>} />
          <Route exact path="/users/:id" element={<Usersid />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/createpost" element={<CreatPost />} />
          <Route exact path="/posts/:id" element={<Postsid />} />
          <Route exact path="/posts/edit/:id" element={<Editpost />} />
          <Route path="*" element={<Notfound />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
