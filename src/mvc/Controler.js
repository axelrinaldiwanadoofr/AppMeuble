

export class Controler
{
    constructor( idControler=null )
    {
        this.idControler = idControler ;
        this.modele = null ;
        this.modeleHash = "" ;
        this.views = [] ; // Crée un tableau vide

        // On stoke la référence du nouveau controleur dans le tableau
        // static controlers
        if( idControler )
            Controler.controlers[idControler] = this ;
        else
            idControler = Controler.cpt++ ;
            Controler.controlers["ctrl" + idControler] = this ;
    }

    addView( view )
    {
        // Ajoute une case avec la référence de la vue en fin de tableau
        this.views.push( view ) ; 
    }

    updateAllViews( modele )
    {
        if( modele != undefined )
            this.modele = modele ;

        let hash = this.modele.getHash() ;
        
        if( hash != this.modeleHash )
        {
            this.views.forEach( (view)=>
            {
                view.updateView( this.modele ) ;
            }) ;
            this.modeleHash = hash ;
        }
    }

    static getControler( idControler )
    {
        return Controler.controlers[idControler] ;
    }

    static startUpdating()
    {
        setInterval( ()=>
        {
            for( let idControler in Controler.controlers )
            {
                Controler.controlers[idControler].updateAllViews() ;
            } 
        }, 200 ) ;
    }

    static controlers = {} ; // Stocke la référence de tous les controleurs
    static cpt = 0 ;
}