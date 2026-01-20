import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <UserProfile name="John Doe" age={25} bio="I love traveling and coding." />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;

