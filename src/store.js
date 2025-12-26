import { configureStore } from '@reduxjs/toolkit';

import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

const reducer = {
  account: accountReducer,
  customer: customerReducer,
};

const store = configureStore({ reducer });

export default store;
