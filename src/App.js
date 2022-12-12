import "./App.css";
import Advise from "./pages/Advise";
import Avilable from "./pages/Avilable";
import HealthCareServices from "./pages/HealthCareServices";
import LandingPage from "./pages/LandingPage";
import MeetOurDoctors from "./pages/MeetOurDoctors";
import MeetOurSpecialist from "./pages/MeetOurSpecialist";
import Testimonial from "./pages/Testimonial";
import Trust from "./pages/Trust";
import UpdateHere2 from "./pages/UpdateHere2";
import UpdatesHere from "./pages/UpdatesHere";
import WhatWeDo from "./pages/WhatWeDo";
import WhatWeDo2 from "./pages/WhatWeDo2";

function App() {
  return (
    <div className="App">
      <WhatWeDo />
      <HealthCareServices />
      <Testimonial />
      <Trust />
      <MeetOurSpecialist />
      <Advise />
      <UpdatesHere />
      <WhatWeDo2 />
      <Avilable />
      <UpdateHere2 />
      <MeetOurDoctors />
      <LandingPage />
    </div>
  );
}

export default App;
