import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';

import { Navegador } from './navegacion/navegador';
import { Search } from './pages/search';
import { MyFotos } from './pages/myFotos';


function App() {
    return (
        <div className="App">
            <Router>
                <Navegador />

                <Routes>
                    <Route exact path="/" element={<Search/>} />
                    <Route path="/myFoto" element={<MyFotos/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
