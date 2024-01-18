const input = document.querySelector('#fruit');
const suggestions = document.querySelector('ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

input.addEventListener('keyup', function() {
    let results = [];
    let child = suggestions.lastElementChild;
    // Clears and returns a new list after each keystroke
    while (child) {
        suggestions.removeChild(child);
        child = suggestions.lastElementChild; 
    }
    // Creates a ul using the applicable strings from the fruits array
    for (let i = 0; i < fruits.length; i++) {
        if (input.value === '') {
            null}
            else if (fruits[i].toLocaleLowerCase().includes(input.value.toLowerCase())) {
                results.push(fruits[i]);
            }
        }
        for (let i = 0; i < results.length; i ++) {
            let li = document.createElement('li');
            li.innerText = results[i];
            suggestions.appendChild(li);
        }
});
suggestions.addEventListener('click', function(e) {
    // Autofills the input with the selected item
    if (e.target.tagName === 'LI') {
        let listItem = suggestions.lastElementChild;
        input.value = e.target.innerText;
        // Closes dropdown list when an item is selected
        while (listItem) {
            suggestions.removeChild(listItem);
            listItem = suggestions.lastElementChild;
        }
    }
});