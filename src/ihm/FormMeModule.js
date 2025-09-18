
import {MeModule} from "../meuble/MeModule"
import {View} from "../mvc/View"
import { Controler } from "../mvc/Controler";

export class FormMeModule extends View
{
    // idForm: Identifiant de la balise HTML contenant le formulaire
    constructor( idOrElement )
    {
        super() ;

        if( typeof(idOrElement) == "object" )
            this.rootElement = idOrElement ;
        else
            this.rootElement = document.getElementById( idOrElement ) ;


        // Ajout des listeners sur les boutons OK et CANCEL et
        // gére l'appel des méthodes onOk et onCancel
        if( this.rootElement )
        {
            let btnOk = this.rootElement.getElementsByClassName( "btnOk") ;
            if( btnOk.length > 0 )
            {
                btnOk[0].addEventListener( "click", ()=>
                {
                    this.onOk() ;
                }) ;
            }

            let btnCancel = this.rootElement.getElementsByClassName( "btnCancel") ;
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

        if( this.rootElement )
        {
            // Recupère la référence de l'input largeur et met à jour sa valeur
            let inputLargeur = this.rootElement.getElementsByClassName( "largeur" )[0] ;
            if( inputLargeur ) inputLargeur.value = this.modele.largeur ;

            // Recupère la référence de l'input hauteur et met à jour sa valeur
            let inputHauteur = this.rootElement.getElementsByClassName ( "hauteur" )[0] ;
            if( inputHauteur ) inputHauteur.value = this.modele.hauteur ;

            // Recupère la référence de l'input profondeur et met à jour sa valeur
            let inputProfondeur = this.rootElement.getElementsByClassName( "profondeur" )[0] ;
            if( inputProfondeur ) inputProfondeur.value = this.modele.profondeur ;

            // Recupère la référence de l'input couleur et met à jour sa valeur
            let inputCouleur = this.rootElement.getElementsByClassName( "couleur" )[0] ;
            if( inputCouleur ) inputCouleur.value = this.modele.couleur ;
        }
    }

    updateModele( me=null )
    {
        if( me ) this.modele = me ;

        if( this.rootElement )
        {
            // Recupère la référence de l'input largeur et met à jour sa valeur
            let inputLargeur = this.rootElement.getElementsByClassName( "largeur" )[0] ;
            if( inputLargeur ) this.modele.largeur = parseInt(inputLargeur.value) ;

            // Recupère la référence de l'input hauteur et met à jour sa valeur
            let inputHauteur = this.rootElement.getElementsByClassName ( "hauteur" )[0] ;
            if( inputHauteur ) this.modele.hauteur = parseInt(inputHauteur.value) ;

            // Recupère la référence de l'input profondeur et met à jour sa valeur
            let inputProfondeur = this.rootElement.getElementsByClassName( "profondeur" )[0] ;
            if( inputProfondeur ) this.modele.profondeur = parseInt(inputProfondeur.value) ;

            // Recupère la référence de l'input couleur et met à jour sa valeur
            let inputCouleur = this.rootElement.getElementsByClassName( "couleur" )[0] ;
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

export class FormMeModuleWC extends HTMLElement
{
    constructor()
    {
        super() ;
        this.createElements() ;
    }

    async createElements()
    {
        // Cree un DOM à part pour le component
        let root = this.attachShadow({mode: 'open'}) ;

        // Charge le code HTML du formulaire
        let html = await this.loadHtml( "src/ihm/FormMeModuleHtml.html" ) ;

        // Crée les éléments du formulaire
        let content = document.createElement( "div" ) ;
        content.innerHTML = html ;
        root.appendChild( content ) ;

        // Associe le controleur identifié par la propriété controler
        let controlerId = this.getAttribute( "controler" ) ;
        if( controlerId != undefined )
        {
            let controler = Controler.getControler( controlerId ) ;
            if( controler )
            {
                controler.addView( new FormMeModule( content )) ;
            }
        }
    }

    async loadHtml( url )
    {
        let reponse = await window.fetch( url, {method: "GET"}) ;
        if( !reponse.ok )
        {
            throw( "HTTP erreur: Ne pas charger: " + url + " status: " + reponse.status ) ;
        }
        return reponse.text() ;
    }

}

window.customElements.define( "form-memodule", FormMeModuleWC ) ;
