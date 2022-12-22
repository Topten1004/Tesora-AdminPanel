import { combineReducers } from 'redux';
import usersReducer from './users';
import collectionsReducer from './collections';
import itemsReducer from './items';
import categoriesReducer from './categories';
import contractsReducer from './contracts';
import activitiesReducer from './activities';
import offersReducer from './offers';

export default combineReducers({
    users: usersReducer,
    collections: collectionsReducer,
    items: itemsReducer,
    categories: categoriesReducer,
    contracts: contractsReducer,
    activities: activitiesReducer,
    offers: offersReducer,
});