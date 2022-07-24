//Components
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Newsletter from "./components/Newsletter/Newsletter";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";

//Styles
import "./App.scss";


function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <div className="mainContainer">
      <Aside />
        <div className="container">
          <Profile />
          <Content />
        </div>
      </div>
      <Newsletter />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
