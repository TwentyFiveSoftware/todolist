import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'

import Header from '../components/Header';

const LoginPage = ({signIn}) => (
    <div className={'page'}>
        <Header loginPage={true}/>
        <div className={'content'}>
            <div className={'google-button'} onClick={() => signIn()}><FontAwesomeIcon icon={faGoogle}/>Sign in with Google</div>
        </div>
    </div>
);

export default LoginPage;
