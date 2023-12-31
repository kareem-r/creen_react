/* eslint-disable react-hooks/rules-of-hooks */
import React , {useEffect, useState} from 'react'
import {  Row , Col , Form , FormGroup, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import "../styles/Signup.css"
import Creenimage from "../assets/images/ic_launcher.png"
import Friendsimage from "../assets/images/photo_2022-10-21_19-08-06.jpg"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const signup = () => {
  const navigate=useNavigate();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading , setloading]=useState(false)
    const [email , setemail]=useState([])
    const [password , setpassword]=useState()
    const [country , setcountry]=useState([])
    const[countryName,setcountryName]=useState([])
    const [cities , setcities]=useState([])
    const [city , setcity]=useState([])
    const [phone , setphone]=useState([])
    const [username, setusername]=useState([])
    const[countries,setcountries]=useState([]);
    const [id]=country;
    useEffect(()=>{
        try {
            const fetchCountry = async () => {
            const response = await fetch ('https://creen-program.com/api/countries');
            const data = await response.json();
            setcountries(data.data)
          }
            

            const postcountryid=async()=>{
              if(id !== 0){

                
                  const response = await fetch ('https://creen-program.com/api/countries/cities', {
                    method: 'POST',
                    body: JSON.stringify({
                    'country_id':id,
                    }),
                    headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    },
                    });
                const data = await response.json();
                setcities(data.data)
                setcountryName(country.slice(1))
                
          
                
              }
              
        
            }
            fetchCountry()
            postcountryid()
            
            } catch (e) {
            console.log(e);
            }
    }, [id , country]);
    const SignUp=async(e)=>{
      e.preventDefault()
    
    try{
      console.log(email , password , countryName , city , phone , username)

      const response = await fetch ('https://creen-program.com/api/register', {
        method: 'POST',
        body: JSON.stringify({
          'name':username ,
          'mobile':phone,
          'email': email,
          'password': password,
          'address': countryName,
          'city_id': city,
  
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
        });
        const data = await response.json();
        console.log(data)
      if(data.status === true){
        setloading(true)
        toast.success('Account created')

        navigate('/login')
      }
     
      else if(data.status === false){
        toast.error(response.message.email)
      }
      setloading(false)

    }catch(error){
      setloading(false)
      toast.error('Something went wrong')
    }
    }
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
<Form className='auth_form' onSubmit={SignUp}>
<FormGroup className='form_group'>
<select value={country} onChange={e=>setcountry(e.target.value)}>
    <option value="الدولة"   selected >الدولة</option>
    {
     countries.map((country)=>(
<option value={ `${country.id}   ${country.name}`}  key={country.id} >{country.name}</option>
     ))
    }
    
</select>
 </FormGroup>
 <FormGroup className='form_group'>
 <select value={city} onChange={e=>setcity(e.target.value)}>
    <option value="المدينة"  selected >المدينه</option>
    {
     cities.map((city)=>(
<option value={city.value}  key={city.id}  >{city.name}</option>
     ))
    }
    
    
</select>
 </FormGroup>
 <FormGroup>
    <input type='text' placeholder='الهاتف الجوال' value={phone} onChange={e=>setphone(e.target.value)} />
 </FormGroup>
 <FormGroup>
    <input type='text' placeholder='الأسم'  value={username} onChange={e=>setusername(e.target.value)}/>
 </FormGroup>
  <FormGroup className='form_group'>
    <input type="email" placeholder=' البريد الألكتروني' value={email} onChange={e=>setemail(e.target.value)} />
  </FormGroup>

  <FormGroup className='form_group'>
    <input type="password" placeholder='كلمة المرور' value={password} onChange={e=>setpassword(e.target.value)} />
  </FormGroup>
  <div className="forget d-flex justify-content-end">
    <FormGroup style={{    display: 'flex',
    alignItems:' center',
    gap:' 8px',
    flexDirection: 'row-reverse'}}>
    <input type="checkbox"
                                style={{width:"24px",height:"24px",borderRadius:"5px",alignItems:'center',cursor:'pointer'}}
                                name="remember-device" id="remember-device"  />
                            <label for="remember-device"><label for="remember-device"> قبل إنشاء الحساب الخاص بك، فإنك توافق على
                                <Link style={{    textDecoration: 'none',color: '#0b7c6f'}}>شروط الاستخدام</Link> &amp; <Link style={{    textDecoration: 'none',color: '#0b7c6f'}}>سياسة الخصوصية</Link>
                            </label></label>
    </FormGroup>
  </div>
  <button type='submit' className="buy_btn auth_btn text-center">تسجيل </button>
  <p className='text-center mt-3'>هل لديك حساب؟ <Link style={{textDecoration:'none',color:'#0b7c6f'}} to={'/login'}>تسجيل الدخول</Link></p>
</Form>
</Col>
<Col lg='6' className='signup-right'>
 <Link to={"../pages/signup.jsx"}>
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

export default signup