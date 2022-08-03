import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import DCPage from '../pages/DCPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import MarvelPage from '../pages/MarvelPage'
import HeroPage from '../pages/HeroPage'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="dc" element={<DCPage />} />
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="hero/:id" element={<HeroPage />} />

            {/* Redirecciona cualquier url que no exista a esta */}
            <Route path="/*" element={<Navigate to='login' />} />

            {/* Renderiza un componente pero mantiene la url que no existe */}
            {/* <Route path="/*" element={<LoginPage/>} /> */}
        </Routes>
    )
}

export default AppRouter