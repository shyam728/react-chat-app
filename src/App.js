import Register from "./pages/Register"
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import '../src/style.scss'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
   <>

   {/* <Register/> */}
   {/* <Login/> */}
   {/* <Home/> */}

  

   <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              // <ProtectedRoute>
                <Home />
              // </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>



   </>
  );
}

export default App;
