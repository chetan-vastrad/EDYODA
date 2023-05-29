import { useState } from "react";
import styles from "./Bottom.module.css";
import { BiRupee } from "react-icons/bi";
import { SlBookOpen } from "react-icons/sl";
import { MdOutlineWatchLater, MdLiveTv, MdNoAccounts } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import {AiOutlineFieldTime} from "react-icons/ai"
const Bottom = () => {
    const [data,setData]=useState("")
    const changeFirst = () =>{
    setData(179)        
    }
    const changeSecond =()=>{
       
        setData(149)
    }
    const changeThird =()=>{
        setColor()
        setData(99)
    }
  return (
    <div>
      <div className={styles.backcolor}>
        <div>
          <h1>
            Access curated courses worth <br />
            <BiRupee style={{ position: "relative", top: "7px" }} />
            <s style={{ stroke: "red" }}> 18500</s> at just
            <span style={{ color: "#0048FF" }}>
              <BiRupee style={{ position: "relative", top: "7px" }} />
              99
            </span>
            per year !
          </h1>
          <div style={{margin:"10px 0 0 0"}}>
          <SlBookOpen style={{color:"white"}}/>
          
            <span style={{ color: "#0048FF" }}>100+</span>
            <span style={{color:"white"}}> Job relevant courses
          </span>
          </div>
          <br />
          <div>
          <MdOutlineWatchLater style={{color:"white"}} />
          
            <span style={{ color: "#0048FF" }}> 20,000+</span>
            <span style={{color:"white"}}> Hours of content
          </span>
          </div>
          <br />
          <div>
          <MdLiveTv  style={{color:"white"}}/>
         
            <span style={{ color: "#0048FF" }}> Exclusive</span>
            <span style={{color:"white"}}> Webinar access
          </span>
          </div>
          <br />
          <div>
          <FaGraduationCap  style={{color:"white"}}/>
          <span style={{color:"white"}}>Scholership Worth</span>
          <span style={{ color: "#0048FF" }}>₹94,500</span>
          </div>
          <br />
         <div>
         <MdNoAccounts style={{color:"white"}}/>
          
            <span style={{ color: "#0048FF" }}> Ad Free</span> <span style={{color:"white"}}> learning
            experience
          </span>
         </div>
          <br />
        </div>

        <div className={styles.rightsidediv}>
            <div className={styles.numbers}>
               <p className={styles.number}>1</p>
               <p className={styles.number}>2</p>
            </div>
            <div className={styles.numbers}>
               <p>Sign Up</p>
               <p>Subscribe</p>
            </div>
            <h3 className={styles.subcriptiontag}>Select Your Subscription Plan</h3>
            <div>
             <span className={styles.offertag}>OfferExpired</span>
             <div className={styles.monthcard}>
            
                <div className={styles.insidemonth}>
                <input type="radio" checked className={styles.inputfirst}/>
                <span style={{color:"#BEBEBE",margin:"0 0 0 10px"}} >12 Month Subscrition</span>
                </div>
                <div>
                    <span style={{color:"#BEBEBE"}}>Total </span><span style={{color:"#BEBEBE"}}> ₹99</span><br/>
                    <span style={{color:"#BEBEBE"}}>₹8 m/o</span>
                </div>
             </div>
            </div>
            <div>
             <span className={styles.offertagtwo}>Recomded</span>
             <div className={styles.monthcardtwo}>
            
                <div className={styles.insidemonthtwo}>
                <input type="radio"  className={styles.inputsecond} onClick={changeFirst}/>
                <span style={{margin:"0 0 0 10px"}}>12 Month Subscrition</span>
                </div>
                <div>
                    <span >Total </span><span > ₹179</span><br/>
                    <span >₹15 m/o</span>
                </div>
             </div>
            </div>

            <div><br/>
             <div className={styles.monthcardthird}>
            
                <div className={styles.insidemonththird}>
                <input type="radio"  className={styles.inputthird} onClick={changeSecond}/>
                <span style={{margin:"0 0 0 10px"}}>6 Month Subscrition</span>
                </div>
                <div>
                    <span >Total </span><span > ₹149</span><br/>
                    <span >₹25 m/o</span>
                </div>
             </div>
            </div>

            <div><br/>
             <div className={styles.monthcardthird}>
            
                <div className={styles.insidemonththird}>
                <input type="radio"  className={styles.inputthird} onClick={changeThird}/>
                <span style={{margin:"0 0 0 10px"}}>3 Month Subscrition</span>
                </div>
                <div>
                    <span >Total </span><span > ₹99</span><br/>
                    <span >₹25 m/o</span>
                </div>
             </div>
            </div>
            <hr style={{margin:'20px 10px 0 10px'}}/>
            <div style={{display:"flex",justifyContent:"space-around",margin:"5px 0 10px 0"}}>
                <p>Subscription fee</p>
                <p>₹18500</p>
            </div>
            <div className={styles.alertcard}>
            
                <div className={styles.insidealert}>
               <p style={{color:"#DE4313"}}>Limited Time Offer</p>
                <AiOutlineFieldTime style={{color:"#DE4313"}}/><span style={{fontSize:"10px",color:"#DE4313",position:"relative",bottom:"5px"}}>Offer valid till 25th march 2023</span>
                </div>
                <div>
                    <span>₹18,401</span>                  
                </div>
             </div>
             
             <div style={{display:"flex",justifyContent:"space-around",margin:"5px 0 0 0"}}>
            <p>Total<span style={{fontSize:"12px"}}> (Incl.of 18% GST)</span></p>
            <p >₹{data}</p>
            </div>
            <div className={styles.buttons}>
                <button className={styles.cancelbtn}>CANCEL</button>
                <button className={styles.paybtn}>PROCEED TO PAY</button>
            </div>
        </div>

       
      </div>
    </div>
  );
};
export default Bottom;
