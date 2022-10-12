// Partendo dalla struttura dati fornita, 
// visualizzare in pagina un box per ogni icona, in cui è presente il name dell’icona e l’icona stessa.
// Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
let griglia = document.getElementById('grid');

function creoIcon(arr) {

	griglia.innerHTML = '';

	arr.forEach(element => {

		const iconCard = document.createElement('div');
		const icon = document.createElement('i');
		const name = document.createElement('p');

		iconCard.classList.add('iconCard');
		icon.classList.add(element.family);
		icon.classList.add(element.prefix + element.name);
		icon.classList.add(element.color);

		name.innerText = element.name.toUpperCase();

		iconCard.append(icon);
		iconCard.append(name);
		griglia.append(iconCard);
	}
	);

}


// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user).
// Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
let select = document.getElementById('change');
select.addEventListener('change',selectArray);
select.value = 'all';

creoIcon(arrayIcon);

function selectArray() {

	switch(select.value) {

		case 'animal':
			const animalArray = arrayIcon.filter((element) => element.type === 'animal');
			creoIcon(animalArray);
			break;

		case 'vegetable':
			const arrayVegetable = arrayIcon.filter((element) => element.type === 'vegetable');
			creoIcon(arrayVegetable);
			break;

		case 'user':
			const userArray = arrayIcon.filter((element ) => element.type === 'user');
			creoIcon(userArray);
			break;

		default:
			creoIcon(arrayIcon);
			break;	
	}
}