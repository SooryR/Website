
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header.js'
import { Home } from '../pages/Home.js'
import { WorkPage } from '../pages/Work.js'
import { Projects } from '../pages/Projects.js'
import { ContactInfo } from '../pages/ContactInfo.js'

function Router() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path = "/" element={<Header/>}>
                    <Route index element={<Home/>} />
                    <Route path = "/work" element={<WorkPage/>}/>
                    <Route path = "/projects" element={<Projects/>}/>
                    <Route path = "/contact" element={<ContactInfo/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export {Router}
