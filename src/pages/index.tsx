import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home'; // 确保导入的是 Home.tsx

const IndexPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};

export default IndexPage;