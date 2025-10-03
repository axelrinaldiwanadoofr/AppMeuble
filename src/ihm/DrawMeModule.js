
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

        let draw = document.getElementById(  this.idDraw ) ;
        if( draw && this.modele )
        {
            draw.style.width = this.modele.largeur + "px" ;
            draw.style.height = this.modele.hauteur + "px" ;
            draw.style.backgroundColor = this.modele.couleur ;
            draw.innerHTML = this.modele.id ;
            // Calcul de la couleur du texte pour id
            let couleur = this.modele.couleur.substring( 1,6) ;
            couleur = parseInt( couleur, 16 ) ;
            couleur += 123456 ; // couleur = couleur + 123456 ;
            if( couleur > parseInt( "FFFFFF", 16))
                couleur -= parseInt( "FFFFFF", 16)
            draw.style.color = "#" + couleur.toString( 16 ) ;
        }
        return true ;
    }
}