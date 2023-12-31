import React , {useState} from 'react'
import { motion } from 'framer-motion'
import { Link, /*NavLink ,*/ /*useNavigate */} from 'react-router-dom'
import { toast } from 'react-toastify'
import user_icon from "../../assets/images/user-icon.png"
import logo from "../../assets/images/ic_launcher.png"
import "./header.css"



const Header = () => {
  const [tab,settab]=useState('main')

  return (
    <header className='header'>
      
          <div className="nav_wrapper">
            <div className="icons_left">
            <div className='profile'> <motion.img whileTap={{scale:1.2}} src={ /*currentUser? currentUser.photoURL :*/ user_icon}  alt="" /*onClick={toggleProfileActions}*/ /></div>
            <span><i class="ri-live-line"></i></span>
            <span><i class="ri-message-2-line"></i></span>
            <span><i class="ri-play-circle-line"></i></span>
            </div>
            
            
            <div class="search_box">
              <input type="text" placeholder="إبحث عن أعضاء, #هاشتاغ" />
              <span><i class="ri-search-line"></i></span>
              </div>
            
            <div className="icons_right">
              <Link><span className={ `${tab==='add'?'active_tab': ''}  add`} onClick={()=>settab('add')}  ><span>إنشاء</span><i class="ri-add-circle-line"></i></span></Link>
              <Link><span className={ `${tab==='main'?'active_tab': ''}  main`} onClick={()=>settab('main')}><span>الصفحه الرئيسية </span><i class="ri-mail-open-line"></i></span></Link>
              <Link><span ><i class="ri-notification-line"></i></span></Link>
              <Link style={{display:'none'}} className='icon_mobile'><span><i class="ri-align-justify"></i></span></Link>
              <Link to={"/"}><div className="logo"><motion.img whileTap={{scale:1.2}} src={ /*currentUser? currentUser.photoURL :*/ logo}  alt="" /*onClick={toggleProfileActions}*/ /></div></Link>
              
            </div>
          </div>
      
    </header>
  )
}

export default Header