import { legacy_createStore as createStore } from 'redux'
import rootReducer from '../reducers/rootReducer'

export default function configureStore(initialState) {
    const store = createStore(rootReducer);
    return store
}
