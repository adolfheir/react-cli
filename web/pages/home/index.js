import React, { useEffect } from 'react';
import stores from '@stores';
import { Loading } from '@alifd/next';

import styles from './index.scss';


const Home = () => {
  const home = stores.useStore('home');
  const { init, isReady, isLoading } = home;

  useEffect(() => {
    if (!isReady) {
      init();
    }
  }, [init, isReady]);

  return (
    <Loading visible={isLoading} style={{ display: 'block' }} >
      <div className={styles.home}>
        <h1>loading</h1>
      </div>
    </Loading>
  );
};

export default Home;
