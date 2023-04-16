import { createStore } from 'redux';

const initialCounter = 0;
const reducer = (counter = initialCounter, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            return counter + 1;
        }
        case 'DECREMENT': {
            return counter - 1;
        }
        default: {
            return counter;
        }
    }
}
const store = createStore(reducer);
export default store;
