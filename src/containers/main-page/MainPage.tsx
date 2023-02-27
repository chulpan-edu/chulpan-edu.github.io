import { useState } from 'react';

import Header from '@components/header/Header.js';

const MainPage = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  );
};

export default MainPage;
