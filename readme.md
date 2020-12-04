# Navigasyon JavaScript

> JS exercise given at HEPL

* * *

**js-tp-navigation** is an educational project, which will be used for `JS` courses.

**Note:** the school where the course is given, the [HEPL](http://www.provincedeliege.be/hauteecole) from Liège, Belgium, is a french-speaking school. From this point, the instruction will be in french. Sorry.

* * *

> Lors de vos cours de *web*, vous allez découvrir le langage *JavaScript* et le mettre en pratique pour apprendre à rendre vos pages web interactives.  

* * *

## Énoncé

![Résultat attendu, menu déroulant](./readme.gif)
Votre mission est de transformer ce menu HTML en un menu déroulant par Javascript :

- au survol d’un des items du niveau principal,
	- la couleur de fond et la couleur de texte de cet item s’inversent ;
	- le sous-menu correspondant à cet item s'affiche ;
- lorsque la souris quitte cet item,
	- il récupère sa couleur de fond et sa couleur de texte originales ;
	- le sous-menu correspondant à cet item disparaît.


## Aides

1. Parcourez les items du menu et ajoutez-leur chacun
	- un [écouteur d’événement qui écoute le survol de la souris](https://developer.mozilla.org/fr/docs/Web/API/Element/mouseover_event) auquel est associé une fonction `montreSousMenu` ;
	- un [écouteur d’événement qui écoute le départ de la souris](https://developer.mozilla.org/fr/docs/Web/API/Element/mouseout_event) auquel est associé  une fonction `cacheSousMenu `;

2. Compléter les fonctions 
	- `montreSousMenu` pour qu’elle 
		- affiche le sous-menu correspondant à l'item principal survolé ;
		- change la couleur de fond de l'item principal survolé ;
		- change la couleur de texte de l'item principal survolé ;
	- `cacheSousMenu` pour qu’elle
		- cache le sous-menu correspondant à l'item quitté ;
		- change la couleur de fond de l'item principal quitté ;
		- change la couleur de texte de l'item principal quitté ;
		
	
	(N.B. voir pour ce faire la propriété [style](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/style) d'un HTMLElement)
	
## Bonus

Notez bien que dans la première version ci-dessus proposée, JavaScript se mêle de définir lui-même des règles de style pour les éléments HTLML, ce qui n’est en principe pas du tout son rôle.

Cette première version vous est proposée dans un objectif pédagogique.

La meilleure pratique est de découpler, comme d’habitude, les différents aspects : structure en HTML, présentation en CSS et interaction en JS.

Dans cette optique, faites une version améliorée de votre script où JS se contente d’affecter une classe aux éléments qui doivent changer de style et faites les changements de style en CSS.
