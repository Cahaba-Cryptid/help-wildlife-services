import * as React from 'react';
import { Link } from 'react-router-dom';

export interface INavbarProps { };

const Home: React.SFC<INavbarProps> = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark row">
                <nav className="navbar navbar-light">
                    <a className="navbar-brand" href="/">
                        {/* <img src="/images/WNTLogo.png" width="30" height="30" className="d-inline-block align-top" alt="Where Next Logo" /> */}
                        Help! Wildlife Services
                    </a>
                </nav>
                {/* <Link className="navbar-brand" to='/'>Where Next?</Link> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/* Client wants link to Google form while custom form details are solidified. Hiding temporarily. */}
                        {/* <Link className="nav-item nav-link" to='/travelform'>Plan Your Trip</Link> */}
                        <a className="nav-item nav-link" href="https://docs.google.com/forms/d/e/1FAIpQLSc0vzqbNPQ0FmBkn0fWJJm-_yv_SHUu-YU98X5BI8PmqTIY-Q/viewform" target="_blank">about us</a>
                        <Link className="nav-item nav-link" to='/blogs'>our services</Link>
                        <Link className="nav-item nav-link" to='/aboutme'>request a quote</Link>
                        {/* <Link className="nav-item nav-link" to='https://www.instagram.com/wherenext_travel/'>Instagram</Link> */}
                        {/* <a className="nav-item nav-link" href="https://www.instagram.com/wherenext_travel/" target="_blank">Instagram</a> */}
                    </div>
                </div>
            </nav>
        </>
            )
        }
        
export default Home;