import { Outlet } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
// import { supabase } from "./supabaseClient";

function App() {
  return (
    <div>
      <AppHeader />
      <main>
        <Outlet />
      </main>
      
      <AppFooter />
    </div>
  );
}

export default App;

/////////////////////////////////////

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import AppHeader from './components/AppHeader';
// import AppFooter from './components/AppFooter';
// import Landing from './Landing';
// import PrivacyPolicy from './components/PrivacyPolicy';
// import Terms from './components/Terms';

// function App() {
//   return (
//     <Router>
//       <main>
//         <AppHeader />
//         <Switch>
//           <Route exact path="/">
//             <Landing />
//           </Route>
//           <Route path="/privacypolicy">
//             <PrivacyPolicy />
//           </Route>
//           <Route path="/terms">
//             <Terms />
//           </Route>
//         </Switch>
//         <AppFooter />
//       </main>
//     </Router>
//   );
// }

// export default App;
