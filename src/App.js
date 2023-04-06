import "./App.css";
import Navbar from "./components/Navbar";
import Links from "./components/Links";
import Last from "./components/Last";
import CreateAccount from "./components/CreateAccount";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Links />
      <CreateAccount />
      <ContactForm />
      <Last />
      <Footer />
    </div>
  );
}

export default App;
