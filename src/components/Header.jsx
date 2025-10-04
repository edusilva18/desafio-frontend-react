import logoImage from '../assets/logo.svg'
import ToteImage from '../assets/Tote.svg'
import { Cart } from './Cart'

import dados from '../dados';
console.log( 'message ; dados.produtos' );


export function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="./index.html">
          <img className="header__logo" src={logoImage} alt="logo CoffeeSpresso" />
        </a>
        <a href="#" className="link__quantity">
          <img src={ToteImage} alt="Carrinho" />
          <span className="badge__quantity">1</span>
        </a>
      </div>
      <Cart />
    </header>
  )
}
