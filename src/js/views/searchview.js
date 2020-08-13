import {elements} from './elementview';

/* Getting Search Inputs value */
export const getInput = () => {
   return elements.inputField.value;
};


/* Empty inputField */ 
export const clearInput = () => {
    elements.inputField.value = "";
};

