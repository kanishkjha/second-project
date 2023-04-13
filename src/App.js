import "./App.css";
import Navbar from "./components/Navbar";
import Links from "./components/Links";
import Last from "./components/Last";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CreateForm from "./pages/CreateForm";
import Submission from "./pages/Submission";
import Blog from "./pages/Blog";
import Insurance from "./pages/Insurance";
import SignupModalStateProvider from "./contexts/SignupModalState";
import SignupModal from "./components/SignupModal";
import Job from "./pages/Job";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
      <div className="App">
        <SignupModalStateProvider>
          <SignupModal />
          <Navbar />
        </SignupModalStateProvider>
        <Links />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/createForm">
            <CreateForm />
          </Route>
          <Route path="/submissionForm">
            <Submission />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/insurance">
            <Insurance />
          </Route>
          <Route path="/jobs">
            <Job />
          </Route>
        </Switch>
        <Last />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
