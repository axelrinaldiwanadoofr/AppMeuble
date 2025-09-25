
import {View} from "../mvc/View" ;

export class DrawMeModule extends View
{
    constructor( idDraw )
    {
        super() ;
        this.idDraw = idDraw ;
    }

    updateView( modele )
    {
        super.updateView( modele ) ;

        let draw = document.getElementById( "DrawMeModule1" ) ;
        if( draw && this.modele )
        {
            draw.style.width = this.modele.largeur + "px" ;
            draw.style.height = this.modele.hauteur + "px" ;
            draw.style.backgroundColor = this.modele.couleur ;
        }
    }
}