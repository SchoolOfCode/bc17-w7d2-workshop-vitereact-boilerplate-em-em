import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";

function App() {
  return (
    <>
        <Header />
        <Main />
        <footer className="site-footer grid">
            <div className="find-us flex">
                <p>Find us on:</p>
                <p>
                    Facebook<br />
                    Instagram<br />
                    Tiktok<br />
                </p>
            </div>
            <div className="copyright-info flex">
                <p>©️ Fireplace Palace</p>
                <p><a href="mailto:info@firepalace.co.uk">info@firepalace.co.uk</a></p>
            </div>
        </footer>
        </>
  )
}

export default App
