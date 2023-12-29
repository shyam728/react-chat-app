export const Navbar = () =>{
    return(<>
        <div className="navbar">
           <span className="logo">React chat app</span>
           <div className="user">
            <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  alt=""/>
            <span>John</span>
            <button>Logout</button>
           </div>
        </div>
    </>)
}