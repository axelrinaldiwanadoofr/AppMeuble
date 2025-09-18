
import {MeModule} from "../meuble/MeModule"
import {View} from "../mvc/View"

export class FormMeModule extends View
{
    // idForm: Identifiant de la balise HTML contenant le formulaire
    constructor( idForm )
    {
        super() ;
        this.idForm = idForm ;

        // Ajout des listeners sur les boutons OK et CANCEL et
        // gére l'appel des méthodes onOk et onCancel
        let div = document.getElementById( this.idForm ) ;
        if( div )
        {
            let btnOk = div.getElementsByClassName( "btnOk") ;
            if( btnOk.length > 0 )
            {
                btnOk[0].addEventListener( "click", ()=>
                {
                    this.onOk() ;
                }) ;
            }

            let btnCancel = div.getElementsByClassName( "btnCancel") ;
            if( btnCancel.length > 0 )
            {
                btnCancel[0].addEventListener( "click", ()=>
                {
                    this.onCancel() ;
                }) ;
            }
        }

    }

    updateView( modele )
    {
        super.updateView( modele ) ; // Appel de updateView de la classe mère View

        let div = document.getElementById( this.idForm ) ;
        if( div )
        {
            // Recupère la référence de l'input largeur et met à jour sa valeur
            let inputLargeur = div.getElementsByClassName( "largeur" )[0] ;
            if( inputLargeur ) inputLargeur.value = this.modele.largeur ;

            // Recupère la référence de l'input hauteur et met à jour sa valeur
            let inputHauteur = div.getElementsByClassName ( "hauteur" )[0] ;
            if( inputHauteur ) inputHauteur.value = this.modele.hauteur ;

            // Recupère la référence de l'input profondeur et met à jour sa valeur
            let inputProfondeur = div.getElementsByClassName( "profondeur" )[0] ;
            if( inputProfondeur ) inputProfondeur.value = this.modele.profondeur ;

            // Recupère la référence de l'input couleur et met à jour sa valeur
            let inputCouleur = div.getElementsByClassName( "couleur" )[0] ;
            if( inputCouleur ) inputCouleur.value = this.modele.couleur ;
        }
    }

    updateModele( me=null )
    {
        if( me ) this.modele = me ;

        let div = document.getElementById( this.idForm ) ;
        if( div )
        {
            // Recupère la référence de l'input largeur et met à jour sa valeur
            let inputLargeur = div.getElementsByClassName( "largeur" )[0] ;
            if( inputLargeur ) this.modele.largeur = parseInt(inputLargeur.value) ;

            // Recupère la référence de l'input hauteur et met à jour sa valeur
            let inputHauteur = div.getElementsByClassName ( "hauteur" )[0] ;
            if( inputHauteur ) this.modele.hauteur = parseInt(inputHauteur.value) ;

            // Recupère la référence de l'input profondeur et met à jour sa valeur
            let inputProfondeur = div.getElementsByClassName( "profondeur" )[0] ;
            if( inputProfondeur ) this.modele.profondeur = parseInt(inputProfondeur.value) ;

            // Recupère la référence de l'input couleur et met à jour sa valeur
            let inputCouleur = div.getElementsByClassName( "couleur" )[0] ;
            if( inputCouleur ) this.modele.couleur = inputCouleur.value ;
        }
    }

    onOk()
    {
        this.updateModele() ;
        console.log( this.modele ) ;
    }

    onCancel()
    {
        this.updateForm() ;
    }
}