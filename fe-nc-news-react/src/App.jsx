import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Topics from "./components/Topics"
import Articles from "./components/Articles"
import Users from "./components/Users"

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      </div>
  )
}

export default App
