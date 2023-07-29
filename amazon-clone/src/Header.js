import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStatevalue } from './StateProvider';
import { auth } from './firebase';

function Header() {

  const login = () =>{
    auth.signOut();
  }
  
  const [{basket,user}] = useStatevalue();

  console.log(basket);

  return (
    <nav className="header">
      {/* logo on left */}
      <Link to="/">
        <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
      </Link>
      {/* search box */}

        <div className="header__search">
            <input className="header__searchInput" type="text" name=""/>
            <SearchIcon className="header__searchIcon"/>
        </div>

      {/* three links */}

        <div className="header__nav">
            {/*1st link  */}
            <Link className="header__link" to={!user && "/login"}>
              <div onClick={login} className="header__option">
                <span className="header__optionLineOne">Hello {user?.email}</span>
                <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign in'}</span>
              </div>
            </Link>
            {/*2nd link  */}
            <Link className="header__link" to="/">
              <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
              </div>
            </Link>

            {/*3rd link  */}

            <Link className="header__link" to="/">
              <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
              </div>
            </Link>

            {/*4th link  */}
            <Link to="/checkout" className="header__link">
              <div className="header__optionBasket">
                {/* Shopping Basket Icon */}
                <ShoppingBasketIcon/>
                {/* Number of items in the basket */}
                <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
              </div>
            </Link>
        </div>

      
    </nav>
  )
}

export default Header
