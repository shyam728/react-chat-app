import attach from "../img/attach.png"
import addimage from "../img/addpng.png"


export const Input = () =>{
    return(<>
      <div className="input">
           <input type="text" placeholder="Type Something..." />
           <div className="send">
            <img src={attach} alt="" />
            <input type="file" style={{display:"none"}}  id="file"/>
            <label htmlFor="file">
            <img src={addimage} alt="" style={{width:80, height:50}} />
        
            </label>
            <button>Send</button>
           </div>
      </div>
    </>)
}