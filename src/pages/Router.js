
import {Page} from "./Page" ;

export class Router
{
    constructor( idMenu, mainElementId )
    {
        this.pages = {} ; // Dictionnaire des pages
        this.currentPage = null ; // Référence de la page courante
        this.mainElement = document.getElementById( mainElementId ) ;

        this.createClickListener( idMenu ) ;
    }

    createClickListener( idMenu )
    {
        // Ajout des listeners sur les boutons ayant la classe 
        // de style donnée par idMenu
        let btn = document.getElementsByClassName( idMenu) ;

        for( let i=0; i<btn.length; i++)
        {
            btn[i].addEventListener( "click", ()=>
            {
                this.showPage( btn[i].name ) ;
            }) ;
        }
    }

    async showPage( pageName )
    {
        if( this.pages.hasOwnProperty( pageName ) ) 
        {
            if( this.currentPage )
                await this.currentPage.remove() ;

            await this.pages[pageName].show( this.mainElement ) ;

            this.currentPage = this.pages[pageName] ;
        }
    }

    addPage( pageName, page )
    {
        this.pages[pageName] = page ;
    }

}