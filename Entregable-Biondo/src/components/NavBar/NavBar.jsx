import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='header'>
        <h3>Muebles de Nahuel</h3>
        <ul>
            <li><a href="">Inicio</a><a href="">Productos</a><a href="">Contacto</a><a href="">Ubicación</a><a href="">Nosotros</a></li>
        </ul>
        <CartWidget/>
    </div>
  )
}

export default NavBar