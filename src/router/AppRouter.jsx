import { Navigate, Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/MainPage"
import { CharacterPage } from "../pages/CharacterPage"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to={"/"}/>} />
            <Route path="/" element={<MainPage />} />
            <Route path="character/:id" element={<CharacterPage />} />
        </Routes>
    )
}
