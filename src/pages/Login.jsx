import React , {useState} from 'react'
import {  Row , Col , Form , FormGroup, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import "../styles/Login.css"
import Creenimage from "../assets/images/ic_launcher.png"
import Friendsimage from "../assets/images/photo_2022-10-21_19-08-06.jpg"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [loading , setloading]=useState(false)
    const [email , setemail]=useState([])
    const [password , setpassword]=useState([])
    const navigate=useNavigate()
    const Login=async(e)=>{
  e.preventDefault()
  setloading(true)
  try{ const response = await fetch ('https://creen-program.com/api/login', {
    method: 'POST',
    body: JSON.stringify({
      'email': email,
      'password': password,
      
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
    });
    const data = await response.json();
    console.log(data)
    setloading(false)
    if(data.status === true){
      toast.success("You_have_successfully_Logged_in")
      navigate('/')
    }
    
    

}catch(error){
  setloading(false)
  toast.error(error)

    }}
  return (
    <section>
    <Container className='Container' style={{maxWidth:'100% !important'}}>
    <Row>
      {
        loading?(<Col lg='12' className='text-center'><h5 className='fw-bold'>Loading.....</h5></Col>):(
          <>
          <Col lg='6' className='text-end'>

<h2 className='fw-bold mb-4' style={{fontSize:'44px',
    fontWeight: '600',
    color: '#0b7c6f',
    marginTop: '60px'}}>!أهلا بك</h2>
<p> !creen قم بإنشاء حساب  </p>
<Form className='auth_form' onSubmit={Login}>
  <FormGroup className='form_group'>
    <input type="email" placeholder=' البريد الألكتروني' value={email} onChange={e=>setemail(e.target.value)} />
  </FormGroup>

  <FormGroup className='form_group'>
    <input type="password" placeholder='كلمة المرور' value={password} onChange={e=>setpassword(e.target.value)} />
  </FormGroup>
  <div className="forget d-flex justify-content-between">
    <Link to={'/forgot-password'} style={{textDecoration:'none',color:'#0b7c6f'}}>هل نسيت كلمة المرور؟</Link>
    <FormGroup style={{    display: 'flex',
    alignItems:' center',
    gap:' 8px',
    flexDirection: 'row-reverse'}}>
    <input type="checkbox"
                                style={{width:"24px",height:"24px",borderRadius:"5px",alignItems:'center',cursor:'pointer'}}
                                name="remember-device" id="remember-device"  />
                            <label for="remember-device">تذكر هذا الجهاز </label>
    </FormGroup>
  </div>
  <button type='submit' className="buy_btn auth_btn text-center">تسجيل الدخول</button>
  <p className='text-center mt-3'>ليس لديك حساب؟ <Link style={{textDecoration:'none',color:'#0b7c6f'}} to={'/signup'}>التسجيل</Link></p>
</Form>
</Col>
<Col lg='6' className='login-right'>
 <Link to={"../pages/Login.jsx"}>
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

export default Login