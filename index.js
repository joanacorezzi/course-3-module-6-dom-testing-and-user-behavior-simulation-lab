//Simulate a click that will update the DOM
 function simulateClick(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) element.textContent = message;
}
//handle form submission and update DOM
 function handleFormSubmit(formId, targetId) {

const inputEl= document.getElementById('user-input');
const content = document.getElementById(targetId);
const error = document.getElementById("error-message");
const input = (inputEl?.value || '').trim();

if(!input) {
    if (error) {
        error.textContent = 'Input cannot be empty';
        error.classList.remove('hidden'); 
    }
} else {
   if (content) content.textContent = input;
   if (error) {
    error.textContent = ''; // to clear the error
    error.classList.add('hidden');
   }
    
}
}
//test call
function addElementToDOM(targetId, content){
    const element = document.getElementById(targetId);
    if (element) element.textContent = content;
 }
 function removeElementFromDOM(elementId) {
    const element = document.getElementById(elementId);
    if (element?.parentNode) element.parentNode.removeChild(element);
 }
module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit,
};