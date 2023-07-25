let countEl = document.getElementById('count-el') //we got element count-el from doument by id. but in colsole 
                                                  //it displays as an element <h2 id="count-el">, so to get what is inside that element
                                                  // we add .innerText
let saveEl = document.getElementById('save-el')                                                

let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let savedData = count + ' - ';
    saveEl.textContent += savedData;
    count = 0;
    countEl.textContent = count;
    console.log(count)
}
