import Link from 'next/link';
import * as React from 'react';

const Navbar: React.FC = () => (
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white font-bold text-xl">我的网站</div>
      <div className="space-x-6">
        <Link href="/" className="text-white hover:text-gray-300">首页</Link>
        <Link href="/about" className="text-white hover:text-gray-300">关于</Link>
        <Link href="/friends" className="text-white hover:text-gray-300">友链</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;