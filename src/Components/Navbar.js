import React from 'react';
function Navbar() {
    return (
        <>
            <header className="header"  >
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
                           home
                        </i>Home
                    </li>
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
                        <i className="fas fa-calendar-week"></i>  PastEvents
                    </li>
                    <li>
                        <i className="fas fa-hard-hat"></i> AArohan
                    </li>
                    <li>
                        <i className="fas fa-registered"></i> Register
                    </li>
                    <li>
                        <i className="material-icons">call_end</i> Contact Us
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