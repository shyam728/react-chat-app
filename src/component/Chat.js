import camera from "../img/camera.png"
import add from "../img/add.png"
import more from "../img/more.png"
import { Messages } from "./Messages"
import { Input } from "./Input"


export const Chat = () =>{
    return(<>
        <div className="chat">
           <div className="chatInfo">
             <span>Jane</span>
             <div className="chatIcons">
               <img src={camera} alt=""/>
               <img src={add} alt=""/>
               <img src={more} alt=""/>
             </div>
           </div>
           <Messages/>
           <Input/>
        </div>
    </>)
}