//ไฟล์นี้ เป็น ไฟล์ JSX คือ javascript ที่สามรถใส่ code html เข้าไปได้โดยตรง
import { useState } from 'react';
import './App.css';  //ไฟล์ App.css เพื่อใช้ตกแต่ง เฉพาะไฟล์ App นี้เท่านั้น
import AppSearch from './components/AppSearch';
import Header from './components/Header';
import NatureItem from './components/NatureItem'; //เรียกใช้ไฟล์ NatureItem.js
import NaturePost from './components/NaturePost'; //เรียกใช้ไฟล์ NaturePost.js
import Navbar from './components/Navbar';
import natures from './data/natures';
import About from './components/About';


function App() {
    const [selectedNature, setSelectedNature] = useState(null);
    const [searchText, setSearchText] = useState('');

    function onNatureOpenClick(nature) {
        setSelectedNature(nature);
    }

    function onNatureCloseClick() {
        setSelectedNature(null);
    }

    const natureItems = natures.filter((nature) => {
        return nature.title.includes(searchText);
    }).map((nature, index) => {
        return <NatureItem key={index} nature={nature} onNatureClick={onNatureOpenClick} />;
    });

    let naturePost = null;
    if (!!selectedNature) {
        naturePost = <NaturePost nature={selectedNature} onBgClick={onNatureCloseClick} />;
    }

    return (
        <div className="app">
            <Navbar />
            <Header />
            <div class="w3-content w3-padding" >
                <div class="w3-container w3-padding-32" id="projects">
                    <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Photos</h3>
                </div>
            </div>
            <section className="app-section">
                <div className="app-container">
                    <AppSearch value={searchText} onValueChange={setSearchText} />
                    <div className="app-grid">
                        {natureItems}
                    </div>
                </div>
            </section>
            {naturePost}

            <div class="w3-container w3-padding-32" id="about">
                <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <About />
            

        </div>
    );
}

export default App;