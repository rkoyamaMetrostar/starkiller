import { Route, Routes } from 'react-router-dom';

import { Header } from './components/header/header';

import { Home } from './pages/home/home';

export function App() {
  return (
    <div>
      <Header />
      <section id="mainSection" className="usa-section">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
