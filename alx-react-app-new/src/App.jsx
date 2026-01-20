import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Header />
      <UserProfile name="John Doe" age={25} bio="I love traveling." />
      <MainContent />
      <Counter />
      <Footer />
    </>
  );
}

export default App;




