import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import Articles from "./components/Articles"
import Users from "./components/Users"
import FullArticle from './components/FullArticle'
import { UserAccountProvider } from './contexts/UserAccount'

function App() {

  return (
    <div className="App">
      <UserAccountProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="articles/:article_id" element={<FullArticle />}></Route>
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </UserAccountProvider>
    </div>
  );
}

export default App
