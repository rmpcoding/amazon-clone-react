import React from 'react';
// import NavBar from '../NavBar/NavBar'
import SearchIcon from '@material-ui/core/SvgIcon'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
        <SearchIcon className="header__searchIcon" />
            <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon logo"
            />
            <div className="header__search">
                <input className="header__searchInpug" type="text"></input>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>

                <div className="header__option">
                    {' '}
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    {' '}
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                {/* <NavBar/> */}
            </div>
        </div>
    );
};

export default Header;
