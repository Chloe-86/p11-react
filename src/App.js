import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RouterComponent from './components/Router';
import main from './styles/main.css'

const App = () => {
  return (
    <div>
      <main>
      <Header />
      <RouterComponent />
      <Footer />
      </main>
    </div>
  );
}

export default App;
