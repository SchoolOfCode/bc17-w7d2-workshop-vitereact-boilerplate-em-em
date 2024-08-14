// import { useState } from 'react'
import Header from './components/header/header.jsx';
import Main from './components/Main/Main.jsx';


import './App.css'

function App() {

  return ( 
    <>
				
        <Header/>
        
        <Main/>
        
        <footer className="site-footer">
            <div className="find-us">
                <p>Find us on:</p>
                <p>
                    Facebook<br />
                    Instagram<br />
                    Tiktok<br />
                </p>
            </div>
            <div className="copyright-info">
                <p>©️ Fireplace Palace</p>
                <p><a href="mailto:info@firepalace.co.uk">info@firepalace.co.uk</a></p>
            </div>
        </footer>
			</>
	);
}

export default App
