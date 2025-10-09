
import {Page} from "./Page" ;

export class Router
{
    constructor( idMenu, mainlementId )
    {

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


}