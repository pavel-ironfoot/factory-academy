import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Preloader } from "../Preloader";
import { ChoosePage } from "../ChoosePage";
import { PaintingArea } from "../PaintingArea";
import { WelderArea } from "../WelderArea";
import { DetailShowPage } from "../PaintingArea/DetailShowPage";

export const MainRoutes = () => {
    
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/' element={<Preloader />} />
                    <Route path='/Painting-Area' element={<PaintingArea />} />
                    <Route path='/All-Factory' element={<ChoosePage />} />
                    <Route path='/Welder-Area' element={<WelderArea />} />
                    <Route path='/painting/:detail' element={<DetailShowPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}