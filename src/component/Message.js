



export const Message = (props) =>{
    return(<>
        <div className="message ">
         <div className="messageInfo">
            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Just Now</span>
         </div>
         <div className="messageContent">
            <p>{props.text}</p>
            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

         </div>

            </div>
        <div className="message owner">
         <div className="messageInfo">
            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Just Now</span>
         </div>
         <div className="messageContent">
            <p>{props.text}</p>
            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

         </div>

            </div>
       
    </>)
}