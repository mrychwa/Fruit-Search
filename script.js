const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const suggestionsWrapper = document.querySelector(".suggestions");

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	str = str.toLowerCase();
	let results = fruit.filter(function(item){
		item = item.toLowerCase();
		return item.includes(str);
	})
	// console.log(results);
	return results;
}

function searchHandler(e) {
	// console.log(e.target.value)
	const searchString = e.target.value;
	const suggestions = search(searchString);
	showSuggestions(suggestions, searchString);
}

function showSuggestions(results, inputVal) {
	if(!inputVal || !results.length){
		suggestionsWrapper.style.display = "none";
		return suggestions.innerText = ""
	}
	suggestions.innerText = ""
	suggestionsWrapper.style.display = "block";
	for(const item of results){
		const li = document.createElement("li")
		li.innerText = item;
		suggestions.appendChild(li);
	}
}

function useSuggestion(e) {
	if(e.target.matches("li")){
		const clickedItem = e.target.innerText;
		input.value = clickedItem;
		suggestionsWrapper.style.display = "none";
		suggestions.innerText = "";
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);