import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResultPage from './pages/ResultPage'
import AccountPage from './pages/AccountPage'
import CharactersPage from './pages/CharactersPage'
import NavBar from './components/NavBar'

const ApplicationRouter = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route exact path="/" element={<ResultPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/character/:mal_id" element={<CharactersPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default ApplicationRouter
