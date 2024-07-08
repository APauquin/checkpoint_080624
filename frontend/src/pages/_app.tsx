import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import client from '../graphql/client';
import { ApolloProvider } from '@apollo/client';
import { useEffect, useRef } from 'react';


function App({ Component, pageProps }: AppProps) {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (backgroundRef.current) {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        const moveX = (clientX / innerWidth) * 100;
        const moveY = (clientY / innerHeight) * 100;
        backgroundRef.current.style.transform = `translate(-${moveX / 2}px, -${moveY / 2}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <ApolloProvider client={client}>
      <div className="background" ref={backgroundRef}></div>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });
