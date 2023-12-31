import React , {useEffect, useState} from 'react'
import Header from '../components/Header/Header'
import Links from '../assets/data/Links'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import "../styles/Home.css"


const Home = () => {
  const [tab,settab]=useState('group')
  const[data,setdata]=useState([])
 useEffect(()=>{
  try{
  
    const getData=async()=>{
      const response = await fetch('https://creen-program.com/api/blogs',{
        method:"post"
      })
      const data = await response.json();
      setdata(data.data.data)
    }
    getData()
  }catch(error){}
 })

 console.log(data)
  return (
    <>
    <Header/>
    <section  style={{width:"100%",display:'flex',justifyContent:"space-between"}}>
      <section className='chat_home'>
        <div className="header_chat">
          <div className="icons">
            <span><i class="ri-settings-4-line"></i></span>
            <span><i class="ri-user-add-line"></i></span>
          </div>
          <span>الأصدقاء المتصلين</span>
        </div>
        <div className="buttons">
          <Link><span className={ `${tab==='group'?'chat_active': ''} `} onClick={()=>settab('group')}><i class="ri-team-line"></i></span></Link>
          <Link><span className={ `${tab==='contacts'?'chat_active': ''} `} onClick={()=>settab('contacts')}><i class="ri-contacts-line"></i></span></Link>
        </div>
<div className="content">
  {
    tab === 'group'?<div className="group">group</div>: <div className="contacts">contacts</div>
  }
</div>
<div className="search_box">
<input type="text" placeholder="إبحث عن مستخدمين" />
</div>
      </section>
      <section className='center' style={{width:"59%",display:"flex",justifyContent:"space-between",gap:"5px"}}>
        <div className="left" style={{width:"35%", display:"flex",flexDirection:"column",gap:".5rem"}}>
                <div className="card" style={{backgroundImage:"#fff",    boxShadow:" 0 1px 2px rgba(0, 0, 0, 0.2)"}}>
                  <div className="image"  style={{   height:'60px' , background:" linear-gradient(180deg, #102b1d, #57ed94)"}}>
                    
                  </div>
                  <div className="log_info">
                    <img src="" alt="" />
                    <Link>kareem badawy (kisho)</Link>
                    <span style={{    color:" #bababa"}}>@b39850837</span>
                  </div>
                  <div className="log_followers">
                    <Link><span><b>المشاركات</b></span>
                    <span style={{    color: "#bababa"}}>0</span></Link>
                    <Link><span><b>متابَعون</b></span>
                    <span style={{    color: "#bababa"}}>0</span></Link>
                    <Link>
                    <span><b>متابِعون</b></span>
                    <span style={{    color: "#bababa"}}>0</span></Link>
                  </div>
                </div>
                <div className="group"style={{background:"#fff" , borderRadius:"5px",padding:'10px'}}>
                  <div className="header" style={{textAlign:"end",fontSize:"14.5px"}} ><span><b>!الهاشتاغات النشطة</b></span></div>
                </div>
                <div className="featured-users">
                  <div className="header">
                    <span style={{fontSize:"14px"}}>الأعضاء المحترفون</span>
                    <span>
                    <i class="ri-vip-crown-line"></i>
                      <span style={{   fontWeight:"bold",fontSize:"13px",color: "#666"}}>ضعني هنا</span>
                    </span>
                  </div>
                </div>
                <div className="users_know">
                  <div className="header">
                    <span><i class="ri-restart-line"></i></span>
                    <span>مستخدمين قد تعرفهم</span>
                  </div>
                </div>
                <div className="online">
                  <span><i class="ri-group-fill"></i></span>
                  <span><span>2</span>المستخدمين متصلين</span>
                </div>
                <div className="email">
                <span><i class="ri-mail-open-fill" style={{    color: "orange",fontSize: "40px"}}></i></span>
                        <span style={{    color: "#986600"}}>دعوة اصدقائك</span>
                        <form>
                            
                            <div class="buttons" style={{display:"flex"}}>
                            <button>
                                <i class="ri-send-plane-2-fill"></i>
                                </button>
                              <input type="text" placeholder="البريد الألكتروني" />
                            </div>

                        </form>
                </div>
                <div className="products">
                  <div className="header" style={{textAlign:"end"}}>
                    <span>أخر المنتجات</span>
                  </div>
                </div>
                <div className="activities">
                  <div className="header" style={{textAlign:"end"}}>
                    <span>أخر النشاطات</span>
                  </div>
                </div>
                </div>
      <div className="right" style={{width:"65%",display:"flex",flexDirection:"column",gap:"10px"}}>
        <div className="story">
          <div className="Cases">
            <ul>
              <li>
                <div className="case"></div>
                <span>kareem</span>
              </li>
              <li>
              <div className="case"></div>
                <span>mohamed</span>
              </li>
              <li>
              <div className="case"></div>
                <span>adam</span>
              </li>
              <li>
              <div className="case"></div>
                <span></span>
              </li>
              <li>
              <div className="case"></div>
                <span></span>
              </li>
              <li>
              <div className="case"></div>
                <span></span>
              </li>
              <li>
              <div className="case"></div>
                <span></span>
              </li>
              <li>
              <div className="case"></div>
                <span></span>
              </li>
              <li>
              <div className="case"></div>
                <span></span>
              </li>
              <li>
              <div className="case"></div>
                <span></span>
              </li>
              <li>
              <div className="case"></div>
                <span></span>
              </li>
              <li>
              <div className="case"></div>
                <span></span>
              </li>
              <li>
              <div className="case"></div>
                <span></span>
              </li>
              <li>
              <div className="case"></div>
                <span></span>
              </li>
              <li>
              <div className="case"></div>
                <span></span>
              </li>
              <li>
              <div className="case"></div>
                <span></span>
              </li>
              <li>
              <div className="case"></div>
                <span></span>
              </li>
              <li>
              <div className="case"></div>
                <span></span>
              </li>
              <li>
              <div className="case"></div>
                <span></span>
              </li>
              <li>
              <div className="case"></div>
                <span></span>
              </li>
              <li>
              <div className="case"></div>
                <span></span>
              </li>
              <li>
              <div className="case"></div>
                <span></span>
              </li>
              <li>
              <div className="case"></div>
                <span></span>
              </li>
              <li>
              <div className="case"></div>
                <span></span>
              </li>
              <li>
              <div className="case"></div>
                <span></span>
              </li>
            </ul>          
          </div>
          <div className="add_story">
            <span><i class="ri-add-line"></i></span>
            <span>أضافة</span>
          </div>
        </div>
        <div className="story_Proposed">
<ul>
  <li>
    <img src="" alt="" />
    <img src="" alt="" />
  </li>
  <li>
  <img src="" alt="" />
    <img src="" alt="" />
  </li>
  <li>
  <img src="" alt="" />
    <img src="" alt="" />
  </li>
  <li>
  <img src="" alt="" />
    <img src="" alt="" />
  </li>
  <li>    <img src="" alt="" />
    <img src="" alt="" /></li>
  <li>    <img src="" alt="" />
    <img src="" alt="" /></li>
  <li>    <img src="" alt="" />
    <img src="" alt="" /></li>
  <li>    <img src="" alt="" />
    <img src="" alt="" /></li>
  <li>    <img src="" alt="" />
    <img src="" alt="" /></li>
  <li>    <img src="" alt="" />
    <img src="" alt="" /></li>
  <li>    <img src="" alt="" />
    <img src="" alt="" /></li>
  <li>    <img src="" alt="" />
    <img src="" alt="" /></li>
</ul>
        </div>
        <div className="add_post">
          <div className="header">
            <span><i class="ri-emotion-happy-line" style={{fontSize:"1.2rem"}}></i></span>
            <div className="info_user">
              <span>UserName</span>
              <img src="" alt="" />
            </div>
          </div>
          <div className="textarea">
          <textarea name="" id="" rows="5" placeholder="ما الذي يحصل الآن ؟ #هاشتاغ .. @إشارة"></textarea>
          </div>
          <div class="footer">
                            <div class="buttons">
                                <div class="img">
                                    <span style={{fontSize:"14px"}}>تحميل الصورة</span>
                                    <span><i class="ri-image-fill" style={{fontSize:"1.2rem",color: "#0dcaf0"}}></i></span>
                                    <input type="file" name="" id=""/>
                                </div>
                                <div class="create_img">
                                    <span style={{fontSize:"14px"}}>توليد الصورة</span>
                                    <span><i class="ri-image-add-fill" style={{fontSize:"1.2rem",color: "green"}}></i></span>
                                </div>
                                <div class="create_job">
                                    <span style={{fontSize:"14px"}}>أنشاء وظيفة</span>
                                    <span><i class="ri-article-line" style={{fontSize:"1.2rem",color:"crimson"}}></i></span>
                                </div>
                                <div class="plus">
                                    <span style={{fontSize:"14px"}}>أكثر</span>
                                    <span><i class="ri-add-circle-fill" style={{fontSize:"1.2rem"}}></i></span>

                                </div>
                            </div>

                        </div>        
                        </div>
                        <div className="add_post_click">
         <div className="con">
         <div className="header">
            <span><i class="ri-emotion-happy-line" style={{fontSize:"1.2rem"}}></i></span>
            <div className="info_user">
              <span>UserName</span>
              <img src="" alt="" />
            </div>
          </div>
          <div className="textarea">
          <textarea name="" id="" rows="5" placeholder="ما الذي يحصل الآن ؟ #هاشتاغ .. @إشارة"></textarea>
          </div>
          <div class="footer">
                            <div class="buttons">
                                <div class="img">
                                    <span style={{fontSize:"14px"}}>تحميل الصورة</span>
                                    <span><i class="ri-image-fill" style={{fontSize:"1.2rem",color: "#0dcaf0"}}></i></span>
                                    <input type="file" name="" id=""/>
                                </div>
                                <div class="create_img">
                                    <span style={{fontSize:"14px"}}>توليد الصورة</span>
                                    <span><i class="ri-image-add-fill" style={{fontSize:"1.2rem",color: "green"}}></i></span>
                                </div>
                                <div class="create_job">
                                    <span style={{fontSize:"14px"}}>أنشاء وظيفة</span>
                                    <span><i class="ri-article-line" style={{fontSize:"1.2rem",color:"crimson"}}></i></span>
                                </div>
                                <div class="plus">
                                    <span style={{fontSize:"14px"}}>أكثر</span>
                                    <span><i class="ri-add-circle-fill" style={{fontSize:"1.2rem"}}></i></span>

                                </div>
                            </div>
                            <div className="button_share">
                              <button className='btn_add_post' >شارك</button>
                              
                              
                            </div>

                        </div>
          </div>        
                        </div>

                        
                          {
                            data.map((data , index)=>(
                              <div className="post" key={index}>
                                <div className="header">
                              <div className="left">
                                <span><i class="ri-arrow-down-s-line" style={{fontSize:"1.2rem"}}></i></span>
                              </div>
                              <div className="right">
                                <div className="left">
                                  <span><b>{data.user.name}</b></span>
                                  <div className="time">
                                    <span style={{direction:"rtl"}}>22ساعة</span>
                                    <span className='privacy'>
                                    <i class="ri-global-line"></i>
                                    <span className='arrow'></span>
                                    </span>
                                  </div>
                                </div>
                                <div className="right">
                                  <img src="" alt="" />
                                </div>
                              </div>
                            </div>
                            
                            <div className='content'>
                              {
                                data.images_count === 1 ? <><img src={data.image}></img>
                                <p>{data.content}</p></> : 
                                data.content !== null ?<>
                                <p style={{direction:"rtl"}}>{data.content}</p> 
                                <img src={data.image} alt="" /></>: 
                                data.youtube !== "" ?  <iframe id="ytplayer" type="text/html" width="100%" height="340"
                                src={data.youtube} frameborder="0"
                                webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe> : ""
                              
                              }</div>
                        <div className="footer">
                          <div className="num_comments">
                            <span style={{display:"flex",alignItems:"center",gap:"5px"}}>
                              <span>{data.comments_count}</span>
                              <i class="ri-message-3-line" style={{fontSize:"1.2rem"}} ></i>
                              </span>
                          <button>متابعه</button>
                          </div>
                          <div className="buttons_action">
                            <span className='external_share'><i class="ri-share-line"></i></span>
                            <span className='internal_share'><i class="ri-share-forward-line"></i></span>
                            <span className='retweet'><i class="ri-repeat-2-line"></i></span>
                            <span className='comment'><i class="ri-message-3-line"></i></span>
                            <span className='heart'><i class="ri-heart-line"></i></span>
                          </div>
                          {
                            data.comments_count !== 0 ? <div className="comments">
                            <div className="left">
                              <div className="header">
                                <div className="left">
                                  <span><i class="ri-delete-bin-line"></i></span>
                                  <span><i class="ri-pencil-line"></i></span>
                                </div>
                                <div className="right">{}</div>
                              </div>
                              <div className="content"><p>{}</p></div>
                            </div>
                            <div className="right"><img src="" alt="" /></div>
                          </div>
:<></>
                          }
                          <div className="add_comment">
                            <input type="text" placeholder="اكتب تعليق وأضغط أنتر .." />
                            <img src="" alt="" />
                          </div>
                          <div className="send_comment">
                            <span><i class="ri-send-plane-2-line"></i></span>
                            <div className="file">
                              <span><i class="ri-image-2-line"></i></span>
                              <input type="file" />
                            </div>
                          </div>
                                                  </div>

                              </div>
                              


                            ))
                          }  
                          
                          </div>
                    
      </section>
      <section className='links_home'>
        {
          Links.map((link)=>(
            
            <Link  to={link.src} key={link.id}><motion.span whileTap={{scale:1.2}}>{link.name}</motion.span></Link>
          ))
        }
      </section>
    </section>
    
    </>
  )
}

export default Home