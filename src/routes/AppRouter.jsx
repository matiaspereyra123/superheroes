import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import DCPage from '../pages/DCPage'
import HomePage from '../pages/HomePage'
/* import LoginPage from '../pages/LoginPage' */
import MarvelPage from '../pages/MarvelPage'
import HeroPage from '../pages/HeroPage'
import SearchPage from '../pages/SearchPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="dc" element={<DCPage />} />
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="hero/:heroId" element={<HeroPage />} />

            {/* Redirecciona cualquier url que no exista a esta */}
            <Route path="/*" element={<Navigate to='login' />} />

            {/* Renderiza un componente pero mantiene la url que no existe */}
            {/* <Route path="/*" element={<LoginPage/>} /> */}
        </Routes>
    )
}

export default AppRouter