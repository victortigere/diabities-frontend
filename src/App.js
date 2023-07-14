import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Dashboard from './Components/Dashboard/Dashboard';
import Patients from './Components/Patients/Patients';

import {NotificationContainer} from 'react-notifications';
import {StateMachineProvider} from 'little-state-machine';
import PatientRecord from './Components/PatientRecord/PatientRecord';


function App() {
  return (
    <StateMachineProvider>
    <Router>
      <Routes>
        <Route  path="/dashboard" element={<Dashboard/>} />
        <Route  path="/patient/record/:id" element={<PatientRecord props/>} />
        <Route  path="/patients" element={<Patients props/>} />
        <Route  path="/" element={<Patients props/>} />
      </Routes>
      <NotificationContainer />
  </Router>
  </StateMachineProvider>
  );
}

export default App;
