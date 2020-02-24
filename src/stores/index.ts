import home from './home';
import Store from '@ice/store';
// import logger from '@ice/store-logger';

// const middlewares = [];

// if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(logger);
// }

const storeManager = new Store();
// storeManager.applyMiddleware(middlewares);
const stores = storeManager.registerStores({
    home,
});

export default stores;
