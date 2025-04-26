import { useEffect ,useState} from "react"
import {Link} from "react-router-dom";
export default function Intro(){

    const [showGif, setGif] = useState(true);


useEffect(()=>{

const time = setTimeout(()=>{
    setGif(false);
},3000)

},[])






    return(
    
           <div className="row  ">
            <div id="col1" className="col-2">
           {showGif &&  <img  style={{ width: "200px", height: "auto" }} className="side" src="media/image/rob.gif"/>}
            </div>
            <div style={{marginTop:"8rem"}}  id="kk" className="col-5 p-5 ">
            <img className="img1" src="media/image/prf.jpg"/>
      
            </div>
            <div style={{marginTop:"13rem" }}  id="kd" className="col-5  ">
  <h2>Hello, I' m <br /> Yadhu Krishna</h2>

     <p>I'm a web developer specializing in mern <br /> web applications</p>
    <Link to="skills" >  <button style={{width:"7rem", marginTop:"1rem"}} type="button" class="btn btn-primary ">View Skills</button></Link>
            </div>
          
        </div>
    
    )
}