import {DrawMeModule} from "../ihm/DrawMeModule" ;

export class DrawTiroir extends DrawMeModule
{
    constructor( idDraw )
    {
        super( idDraw ) ;
    }

    updateView( modele )
    {
        super.updateView( modele ) ;

        let draw = document.getElementById(  this.idDraw ) ;
        if( draw && this.modele )
        {
            let poignee = null ;

            if( !draw.children.length )
            {
                poignee = document.createElement( "div" ) ;
                draw.appendChild( poignee ) ;
            }
            else poignee = draw.children[0] ;

            if( this.modele.poignee == "rectangulaire" )
                poignee.className = "DrawPoignee DrawPoigneeRecangulaire" ;
            else
                poignee.className = "DrawPoignee DrawPoigneeRonde" ; 

            poignee.style.backgroundColor = this.modele.couleurpoignee ;

            // Centrage de la poignée
            poignee.style.left = draw.offsetWidth/2 - poignee.offsetWidth/2 ;
            poignee.style.top = draw.offsetHeight/2 - poignee.offsetHeight/2 ;
        }
        return true ;
    }
}