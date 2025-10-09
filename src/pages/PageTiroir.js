import {Page} from "./Page" ;
import {Tiroir } from "../meuble/Tiroir";
import {Controler} from "../mvc/Controler" ;
import { FormTiroir } from "../ihm/FormTiroir";
import { DrawTiroir } from "../ihm/DrawTiroir";

export class PageTiroir extends Page
{
    constructor( template = "src/pages/PageTiroir_.html" )
    {
        super( template ) ;

        this.t1 = new Tiroir( null, 80, 50, 50, "#D0D0D0", "ronde", "#FF0000" ) ;
        this.ctrl = new Controler() ;
    }

    async show( mainElement )
    {
        await this.render( mainElement ) ;

        this.ctrl.addView( new FormTiroir( "FormTiroir1")) ;
        this.ctrl.addView( new DrawTiroir( "DrawTiroir1")) ;
        this.ctrl.updateAllViews( this.t1 ) ;
    }

    async remove()
    {
        this.ctrl.removeAllViews() ;
    }
}