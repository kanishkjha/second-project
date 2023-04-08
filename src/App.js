import "./App.css";
import Navbar from "./components/Navbar";
import Links from "./components/Links";
import Last from "./components/Last";
import CreateAccount from "./components/CreateAccount";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import HomePage from "./pages/HomePage";
import CreateForm from "./pages/CreateForm";
import Submission from "./pages/Submission";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
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
        </Switch>
        <Last />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
