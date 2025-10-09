import {Page} from "./Page" ;
import {MeModule } from "../meuble/MeModule";
import {Controler} from "../mvc/Controler" ;
import { FormMeModule } from "../ihm/FormMeModule";
import { DrawMeModule } from "../ihm/DrawMeModule";

export class PageMeModule extends Page
{
    constructor( template = "src/pages/PageMeModule_.html" )
    {
        super( template ) ;

        this.m1 = new MeModule( null, 80, 50, 50, "#D0D0D0" ) ;
        this.ctrl = new Controler() ;
    }

    async show( mainElement )
    {
        await this.render( mainElement ) ;

        this.ctrl.addView( new FormMeModule( "FormMeModule1")) ;
        this.ctrl.addView( new DrawMeModule( "DrawMeModule1")) ;
        this.ctrl.updateAllViews( this.m1 ) ;
    }

    async remove()
    {
        this.ctrl.removeAllViews() ;
    }
}