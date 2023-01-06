import React, { useEffect } from "react";
import './LoginPage.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CookieIcon from '@mui/icons-material/Cookie';
import FaceIcon from '@mui/icons-material/Face';
import { Link } from "react-router-dom";
import Face4Icon from '@mui/icons-material/Face4';


const loginpage = () => {

    return <>
        <div className='loginpage'>
        <h2>로그인</h2>
        <div>
          아이디
          <div><input type="text" /></div>
        </div>
        <div>
          비밀번호
          <div><input type="password" /></div>
        </div>
        <div className='bottom'>
          <button><AcUnitIcon /></button>
          <Link to="/more"><CookieIcon /></Link>
        <Link to="/jung"><Face4Icon/></Link>
          <button><FaceIcon /></button>
        </div>

      </div>
    </>
}

export default loginpage