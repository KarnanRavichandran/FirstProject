import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Categories from '../Pages/Categories/Categories';
import AllCourse from '../Pages/AllCourse/Allcourse';
import AddCourse from '../Pages/AddCourse/AddCourse';
import Dashboard from '../Pages/Dashboard/dashboard';
import Editorform from '../Pages/AddCourse/Editorform';
import Entrollment from '../Pages/Entrollment/Entrollment';
import AllEntrollment from '../Pages/Entrollment/AllEntrollment';
import Entrollmentdetails from '../Pages/Entrollment/Entrollmentdetails';
import AddPartnerEdit from '../Pages/Partner/AddPartnerEdit';
import GalleryForm from '../Pages/Gallery/GalleryForm';
import Gdetails from '../Pages/Gallery/Gdetails';
import AllPartner from '../Pages/Partner/AllPartner';
import Partnerdetails from '../Pages/Partner/Partnerdetails';
import AddPartnernew from '../Pages/Partner/AddPartnernew';
import Userdetails from '../Pages/Users/Userdetails';
import Drag from '../Pages/Gallery/Drag';


export default function path() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/allcourse" element={<AllCourse />}/>
        <Route path="/addcourse" element={<AddCourse />}/>
        <Route path="/Categories" element={<Categories />}/>
        <Route path="/editorform" element={<Editorform />} />
        
        <Route path="/entrollment" element={<Entrollment />}/>
        <Route path="/allentrollment" element={<AllEntrollment />}/>
        <Route path="/entrollmentdetails" element={<Entrollmentdetails />}/>
        <Route path="/gallery" element={<GalleryForm />}/>
        <Route path="/gdetails" element={<Gdetails />}/>
        <Route path="/drag" element={<Drag />}/>

        <Route path="/addpartner/:id" element={<AddPartnerEdit />}/>
        <Route path="/allpartner" element={<AllPartner />}/>
        {/* <Route path="/partnerdetails" element={<Partnerdetails />}/> */}
        <Route path="/addPartnernew" element={<AddPartnernew />}/>
        <Route path="/userdetails" element={<Userdetails />}/>
      </Routes>
    </BrowserRouter>
  )
}

// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';