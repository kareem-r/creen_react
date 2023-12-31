import React , {useState} from 'react'
import {  Row , Col , Form , FormGroup, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import "../styles/ForgotPassword.css"
import Creenimage from "../assets/images/ic_launcher.png"
import Friendsimage from "../assets/images/photo_2022-10-21_19-08-06.jpg"
//import { toast } from 'react-toastify'
//import { useNavigate } from 'react-router-dom'
const forgotpassword = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading , setloading]=useState(false)
  return (
    <section>
    <Container className='Container' style={{maxWidth:'100% !important'}}>
    <Row>
      {
        loading?(<Col lg='12' className='text-center'><h5 className='fw-bold'>Loading.....</h5></Col>):(
          <>
          <Col lg='6' className='text-end ' style={{margin:'auto'}}>

<h2 className='fw-bold mb-4' style={{fontSize:'44px',
    fontWeight: '600',
    color: '#0b7c6f',
    marginTop: '60px'}}>?هل نسيت كلمه المرور</h2>

<Form className='auth_form' /*onSubmit={signIn}*/>
  <FormGroup className='form_group'>
    <input type="email" placeholder=' البريد الألكتروني' /*value={email} onChange={e=>setemail(e.target.value)}*/ />
  </FormGroup>

  
  

  <button type='submit' className="buy_btn auth_btn text-center">تسجيل الدخول</button>
  <p className='text-center mt-3'>ليس لديك حساب؟ <Link style={{textDecoration:'none',color:'#0b7c6f'}} to={'/login'}>تسجيل الدخول</Link></p>
</Form>
</Col>
<Col lg='6' className='forgotpassword-right'>
 <Link to={""}>
  <img src={Creenimage} alt=""  style={{maxWidth:'200px'}}/>
 </Link>
 <h1>!تواصل مع الأصدقاء</h1>
 <p>.شارك الحظات الجديدة في حياتك مع أصدقائك</p>
 <div className="image">
  <img src={Friendsimage} alt="" />
 </div>
</Col>
          </>

        
        )
      }
      </Row>

    </Container>
       
  </section>

  )
}

export default forgotpassword