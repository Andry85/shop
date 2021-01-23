import React from 'react';
import styles from './App.module.scss';

import Header from '../Header';
import Main from '../Main';
import Footer from "../Footer";





function App() {


  return (
    <div className={styles.App}>
          <Header/>
          <Main/>
          <Footer />
    </div>
  );
}

export default App;
