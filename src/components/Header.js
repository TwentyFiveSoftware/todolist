import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDoorOpen} from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/logo.png';

const Header = ({loginPage = false, signOut}) => (
    <div className={'header'}>
        <img alt={''} src={logo}/>
        {!loginPage && <FontAwesomeIcon icon={faDoorOpen} className={'header__icon'} onClick={() => signOut()}/>}
    </div>
);

export default Header;
