import React from 'react';
import BackgroundSlider from 'react-background-slider'
function Navbar() {
    return (
        <>
            <header className="header"  >
            <BackgroundSlider
            images={["https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", "https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500","https://images.pexels.com/photos/1402923/pexels-photo-1402923.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500","https://images.pexels.com/photos/1402923/pexels-photo-1402923.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"]}
            duration={1} transition={1} />
            <div className="wrapper__header">
            <input type="checkbox" id="menu" />
            <label htmlFor="menu" className="iconBar" >
                <div className="menu"></div>
            </label>
            <nav>
                <ul>
                    <li>IEI</li>
                   
                    <li>
                        <i className="material-icons">
                            backup
                        </i>About Us
                    </li>
                    <li>
                        <i className="material-icons">
                            collections
                        </i>Gallery
                    </li>
                    
                    <li>
                        <i className="fas fa-hard-hat display"></i> AArohan
                    </li>
                    <li>
                        <i class="fas fa-business-time display"></i>Sponsership
                    </li>
                    <li>
                        <i className="fas fa-registered display"></i>Team
                    </li>
                    <li>
                        <i className="material-icons">call_end</i>Contact Us
                    </li>
                </ul>
            </nav>
             </div>
            <section className="enter text-align">
                <h1>Institution Of Engineers (INDIA)<br/><span> BIT MESRA</span>
                </h1>
                <p></p><br />
                <p> </p>
                <div className="buttons">
                    <button>Know Us</button>
                    <button>Register For Events</button>
                </div>
            </section>
    </header>
        </>
    )
}

export default Navbar
