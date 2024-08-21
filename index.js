function addToList(){
        const input =  document.getElementById('inputText');
        const inputText = input.value;
    
        const list = document.getElementsByTagName('ul')[0];
    
        const newElement = document.createElement('li');
    
        if (input !== ""){
        newElement.textContent = inputText;
        //newElement.appendChild(document.createTextNode(inputText));
        newElement.classList.add('new-element');    
        list.appendChild(newElement);
        }
  }
  
  function removeFromList(){
    const list =  document.getElementsByTagName('ul')[0];
    const listElements = document.getElementsByTagName('li');
      
    if (listElements.length > 0){
      list.removeChild(list.lastElementChild);
      //list.removeChild(listElements[listElements.length - 1]);
    }
  }