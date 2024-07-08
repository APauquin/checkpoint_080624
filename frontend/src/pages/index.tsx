import { useEffect, useRef } from 'react';
import Header from '../components/Header';

export default function Home() {

  return (
    <div>
      <Header />
      <div className="earth-container">
        <div className="center-content">
          <h1 className="title">Hello, Wilder!</h1>
        </div>
      </div>
    </div>
  );
}
