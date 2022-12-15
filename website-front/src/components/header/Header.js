import { logDOM } from '@testing-library/react'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'


import './Header.css'

const Header = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <div className='header' >
            <div className='container '>
                <img className='logo' src='logo.png' alt='' style={{ width: '25%' }} />
                <ul className={click ? 'contain active' : 'contain'}>
                    <li className='items'>
                        <a href='/'>الصفحه الرئيسيه</a>
                    </li>

                    <li className='items'>
                        <a href='/'>
                            عن Vamoos
                        </a>
                    </li>
                    <li className='itmes'  >
                        <BsFillCartFill className='icon' />
                    </li>
                    <li className='items'>
                        <a className='btn' href='/'>تسجيل الدخول</a>
                    </li>

                </ul>

                <div onClick={handleClick} className='con'>
                    {click ? (<AiOutlineClose className='icon' />) : (<AiOutlineMenu className='icon' />)}


                </div>

            </div>
        </div >
    )
}

export default Header