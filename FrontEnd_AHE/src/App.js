import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Admin from "./pages/admin/admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AvailableServices from "./pages/user/availableservice";
import Signup from "./pages/user/signup";
import Signin from "./pages/user/signin";
import ForgotPassword from "./pages/user/forgotpassword";
import Service from "./pages/admin/services";
import AddService from "./pages/admin/addservice";
import ServiceList from "./pages/admin/servicelist";
import Home from "./pages/home";
import UpdateService from "./pages/admin/updateservice";
import BookService from "./pages/user/bookservice";
import UserDetails from "./pages/user/userdetails";
import UpdateUser from "./pages/user/updateuser";
import UploadImage from "./pages/admin/uploadimage";


import UpcomingServices from "./pages/user/upcomingservices";
import ResetPassword from "./pages/user/resetpassword";
import Search from "./pages/search";
import OfferZone from "./Offer/OfferZone";
import UpdateEmployee from "./pages/admin/updatemp";
import ShowAllBookedServices from "./pages/admin/showallbookedservices";
import CustOrder from "./pages/user/custorder";

import EmpList from "./pages/admin/emplist";
import AboutUs from "./pages/aboutus";
import ContactUs from "./pages/contactus";
import Employee from "./pages/admin/employee";
import AddEmp from "./pages/admin/addemp";
import ShowPending from "./pages/admin/showpending";
import ShowCompleted from "./pages/admin/showcompleted";
import UsrList from "./pages/admin/showallUsers";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<ProtectedRoutes><Admin /></ProtectedRoutes>} />
        <Route path="/services" element={<ProtectedRoutes><Service /></ProtectedRoutes>} />
        <Route path="/add-services" element={<ProtectedRoutes><AddService /></ProtectedRoutes>} />
        <Route path="/services-list" element={<ProtectedRoutes><ServiceList /></ProtectedRoutes>} />
        <Route path="/uploadimage/:id" element={<ProtectedRoutes><UploadImage /></ProtectedRoutes>} />
        <Route path="/updateservice/:id" element={<ProtectedRoutes><UpdateService /></ProtectedRoutes>} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/available-services" element={<AvailableServices />} />
        <Route path="/availableservice/:id" element={<AvailableServices />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/bookservice/:id" element={<BookService />} />
        <Route path="/userdetails/:id" element={<UserDetails />} />
        <Route path="/updateuser/:id" element={<UpdateUser />} />

        {/* new-added */}
        {/* new-added */}
        <Route path="/employees" element={<ProtectedRoutes><Employee /></ProtectedRoutes>} />
        <Route path="/add-employee" element={<ProtectedRoutes><AddEmp /></ProtectedRoutes>} />
        <Route path="/list-employee" element={<ProtectedRoutes><EmpList /></ProtectedRoutes>} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/upcoming-services" element={<UpcomingServices />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/search" element={<Search />} />
        <Route path="/offerzone" element={<OfferZone />} />
        <Route path="/updateemp/:id" element={<ProtectedRoutes><UpdateEmployee /></ProtectedRoutes>} />
        <Route path="/showallUsers" element={<UsrList />} />
        <Route path="/showallbookedservices" element={<ProtectedRoutes><ShowAllBookedServices /></ProtectedRoutes>} />
        <Route path="/showpending" element={<ProtectedRoutes><ShowPending/></ProtectedRoutes>}/>
        <Route path="/showcompleted" element={<ProtectedRoutes><ShowCompleted/></ProtectedRoutes>}/>
        <Route path="/custorder/:id" element={<CustOrder/>}/>

      </Routes>

      <ToastContainer position="top-center" autoClose={1500} />
    </BrowserRouter>
  );
}
export function ProtectedRoutes(props) {
  if (sessionStorage.getItem("user")) {
    return props.children;
  } else {
    return <Navigate to="/signin" />;
  }
}

export default App;
