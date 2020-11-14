import React from 'react';

import { Navbar, Nav, NavItem } from "reactstrap"
import { Link, NavLink } from "react-router-dom"
import { GoogleLogout } from 'react-google-login';
import { connect } from "react-redux"
import config from "../config"
import { logOutUser } from '../redux/actions/userActions';
const MTubeNavbar = ({ user, logOutUser }) => {
    const handleLogoutFailure = (err) => {
        console.error(err)
    }
    const handleLogoutSuccess = res => {
        alert("Logged Out SuccessFully");
        console.log(res)
        logOutUser();
    }

    return (
        <Navbar color="light" light expand="md">
            <Link to="/">reactstrap</Link>
            <Nav className="mr-auto" navbar>
                {!user ?
                    (<NavItem>
                        <NavLink to="/login">Login</NavLink>
                    </NavItem>
                    ) : (<>
                        <NavItem>
                            <NavLink to="/profile/">Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/playlists/">My Playlists</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/subscriptions/">My subscriptions</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/likedVideos/">My Videos</NavLink>
                        </NavItem>
                        <GoogleLogout clientId={config.CLIENT_ID} buttonText="Logout" onLogoutSuccess={handleLogoutSuccess} onFailure={handleLogoutFailure} />
                    </>)}
            </Nav>
        </Navbar>
    )
}
const mapStateToProps = storeState => {
    return {
        user: storeState.userState.user
    }
}

export default connect(mapStateToProps, { logOutUser })(MTubeNavbar)
