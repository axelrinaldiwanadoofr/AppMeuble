
console.log( "Hello" ) ;

// Création d'un objet vide

let a = {} ;

// Ajout des attributs largeur et hauteur dans l'objet 
// référencé par la variable a

a.largeur = 100 ;
a.hauteur = 50 ;

// Affiche le contenu de l'objet

console.log( "largeur: " + a.largeur + " hauteur: " + a.hauteur ) ;

// Création d'un objet avec les attributs largeur et hauteur
// en utilisant le JSON

let b = { largeur: 150, hauteur: 70 } ;

console.log( "largeur: " + b.largeur + " hauteur: " + b.hauteur ) ;

// Création d'un objet à partir de la classe Object de JS

let c = new Object() ;

// Ajout des attributs largeur et hauteur dans l'objet 
// référencé par la variable a

c.largeur = 200 ;
c.hauteur = 100 ;

console.log( "largeur: " + c.largeur + " hauteur: " + c.hauteur ) ;

// Ajout d'une méthode affiche pour l'objet référencé par b

b.affiche = function() 
{
    console.log( "largeur: " + this.largeur + " hauteur: " + this.hauteur ) ;
} ;

// Appel de la méthode affiche pour l'objet b

b.affiche() ;

// Copie de la référence de la méthode affiche de b dans un nouvel
// attribut affiche pour l'objet a

a.affiche = b.affiche ;

// Appel de la méthode affiche pour l'objet a

a.affiche() ;

// Ajout d'une méthode affiche pour l'objet référencé par c

c.affiche = function() 
{
    console.log( "special c: largeur: " + this.largeur + " hauteur: " + this.hauteur ) ;
} ;

// Appel de la méthode affiche pour l'objet c

c.affiche() ;
