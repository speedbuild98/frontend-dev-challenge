import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Content from './components/Content/Content'
import Header from './components/Header/Header'
import Newsletter from './components/Content/Newsletter'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import './App.scss';

function App() {
  return (
    <div className='App'>
     <Nav />
     <Header />
     <Profile />
     <Content />
     <Newsletter />
     <FAQ />
     <Footer />
    </div>
  );
}

export default App;
