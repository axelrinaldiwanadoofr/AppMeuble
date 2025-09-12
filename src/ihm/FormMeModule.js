
import {MeModule} from "../meuble/MeModule"

export class FormMeModule
{
    // idForm: Identifiant de la balise HTML contenant le formulaire
    constructor( idForm )
    {
        this.idForm = idForm ;
        this.modele = null ;

        // Ajout des listeners sur les boutons OK et CANCEL et
        // gére l'appel des méthodes onOk et onCancel
        let div = document.getElementById( this.idForm ) ;
        if( div )
        {
            let btnOk = document.getElementById( "btnOk") ;
            if( btnOk )
            {
                btnOk.addEventListener( "click", ()=>
                {
                    this.onOk() ;
                }) ;
            }

            let btnCancel = document.getElementById( "btnCancel") ;
            if( btnCancel )
            {
                btnCancel.addEventListener( "click", ()=>
                {
                    this.onCancel() ;
                }) ;
            }
        }

    }

    updateForm( me=null )
    {
        if( me ) this.modele = me ;

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
        }
    }

    onOk()
    {
        this.updateModele() ;
    }

    onCancel()
    {
        this.updateForm() ;
    }
}