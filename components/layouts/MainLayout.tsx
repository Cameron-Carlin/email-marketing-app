import React from 'react';
import Head from 'next/head';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Email Marketing App</title>
        <meta name="description" content="An Email Marketing Application" />
      </Head>
      <header>
        {/* Your header component or navigation */}
      </header>
      <main>
        {children}  {/* This will render the content of the page */}
      </main>
      <footer>
        {/* Your footer component */}
      </footer>
    </>
  );
};

export default MainLayout;