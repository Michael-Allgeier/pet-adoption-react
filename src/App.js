import { useState } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import PetList from './components/PetList';

function App() {
  const [auth, setAuth] = useState(null);
  const [screen, setScreen] = useState('/login');

  function onNavigate(evt, href) {
    evt.preventDefault();
    setScreen(href);
  }

  return (
    <div className="App">
      <Navbar auth={auth} screen={screen} onNavigate={onNavigate} />
      <main className="container mt-5">
        {screen === '/login' && <LoginForm />}
        {screen === '/pet/list' && <PetList />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
