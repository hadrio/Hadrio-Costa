import { AiFillCaretDown, AiOutlinePoweroff } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className='conteudo'>
                <div className="informations">
                    Informações
                </div>
                <div className='userBox'>
                    <NavItem icon={<AiFillCaretDown />}>
                        <DropdownMenu />
                    </NavItem>
                </div>
            </div>
        </div>
    )
};

function DropdownMenu() {

    function DropdownItem(props) {
        return (
            <Link to='/algumLugar' className="menu-item">
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
            </Link>
        )
    }
    return(
        <div className="dropdown">
            <DropdownItem leftIcon={<FaUserCircle/>}><p>Meu perfil</p></DropdownItem>
            <DropdownItem leftIcon={<AiOutlinePoweroff/>}><p>Sair</p></DropdownItem>
        </div>
    )
}

function NavItem(props){
    const [open, setOpen] = useState(false);

    return(
        <div>
            <li className='nav-item'>
                <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
                    Usuário {props.icon}
                </a>
                {open && props.children}
            </li>
        </div>
    )
};

export default Header;

