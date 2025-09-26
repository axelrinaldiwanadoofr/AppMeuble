
import {View} from "../mvc/View"

export class FormView extends View
{
    constructor( idForm, template=null )
    {
        super() ;
        this.idForm = idForm ;
        this.template = template ;
        this.rootElement = document.getElementById( this.idForm ) ;

        this.render() ;
    }

    async loadHtml()
    {
        let reponse = await window.fetch( this.template, {method: "GET"}) ;
        let html = await reponse.text() ;
        return html ;
    }

    async render()
    {
        if( this.rootElement )
        {
            // On a un template et l'élément racine ne contient rien
            if( this.template && !this.rootElement.children.length )
            {
                // On charge le code HTML du formulaire
                let html = await this.loadHtml( this.template ) ;
                // On injecte le code HTML chargé dans la balise racine
                this.rootElement.innerHTML = html ;
            }

            // Ajout des listeners sur les boutons OK et CANCEL et
            // gére l'appel des méthodes onOk et onCancel
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

    updateInputElement( idInput, fctGetModeleValue=null )
    {
        if( this.rootElement )
        {
            let input = this.rootElement.getElementsByClassName( idInput )[0] ;
            if( input )
            {
                if( fctGetModeleValue ) 
                {
                    let value = fctGetModeleValue() ;
                    input.value = value ;
                }
                else
                    input.value = this.modele[idInput] ;
            }
        }
    }

    updateModeleFromInputElement( idInput, valueType="string", fctGetInputValue=null )
    {
        if( this.rootElement )
        {
            let input = this.rootElement.getElementsByClassName( idInput )[0] ;
            if( input )
            {
                if( fctGetInputValue ) 
                {
                    try
                    {
                        let value = fctGetInputValue( input.value ) ;
                        this.modele[idInput] = value ;
                    }
                    catch( message )
                    {
                        this.onError( message ) ;
                    }
                }
                else
                {
                    try
                    {
                        switch( valueType )
                        {
                            case "integer":
                                this.modele[idInput] = parseInt(input.value) ;
                                break ;
                            
                            case "float":
                                this.modele[idInput] = parseFloat(input.value) ;
                                break ;
                            default:
                                this.modele[idInput] = input.value ;
                        }
                    }
                    catch( message )
                    {
                        this.onError( message ) ;
                    }
                }
            }
        }
    }

    updateView( modele )
    {
        super.updateView( modele ) ;
        if( !this.rootElement || !this.rootElement.children.length ) return false ;
        return true ;
    }

    onOk()
    {
        this.updateModele() ;
    }

    onCancel()
    {
        this.updateView() ;
    }

   
}