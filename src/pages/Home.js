
import { Chat } from "../component/Chat"
import { SideBar } from "../component/SideBar"

export const Home = () =>{
    return(<>
        <div className="home">
            <div className="container">
             <SideBar/>
            <Chat/>
            </div>
        </div>
    </>)
}