// import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import EmployeeManager from "./pages/EmployeeManager"; // Import the single component
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           {/* Use EmployeeManager component instead of separate components */}
//           <Route path="/" element={<EmployeeManager />} />
//           <Route path="/create" element={<EmployeeManager />} />
//           <Route path="/update/:id" element={<EmployeeManager />} />
//           <Route path="/read/:id" element={<EmployeeManager />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
// import Employee from "./pages/Employee";
import Home from "./pages/Home";
import Read from "./pages/Read";
import "bootstrap/dist/css/bootstrap.min.css";
import Update from "./pages/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
          <Route path="/read/:id" element={<Read />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
