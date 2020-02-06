export default (state = [], action) => {
  return state;
}; 

let index; 
let quote; 

switch (action.type) {
  case 'ADD_QUOTE': 
    return state(action.quote)
}