import { Message } from "./Message"


export const Messages = () =>{
    return(<>
        <div className="messages">
         <Message text="hello"/>
         <Message text="hey"/>
         <Message text="how are you"/>
         <Message text="I am fine"/>
            </div>
    </>)
}