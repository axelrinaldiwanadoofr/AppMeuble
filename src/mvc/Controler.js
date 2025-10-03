

export class Controler
{
    constructor( id )
    {
        this.id = "C" + Controler.controlerCpt++ ;
        this.modele = null ;
        this.modeleHash = "" ;
        this.views = [] ; // Crée un tableau vide

        if( id != undefined ) this.id = id ;

        // On stoke la référence du nouveau controleur dans le tableau
        // static controlers
        Controler.controlers.push( this ) ;
    }

    addView( view )
    {
        // Ajoute une case avec la référence de la vue en fin de tableau
        this.views.push( view ) ; 
    }

    removeAllViews()
    {
        this.views = [] ;
    }

    updateAllViews( modele )
    {
        if( modele != undefined )
            this.modele = modele ;

        let hash = this.modele.getHash() ;
        
        if( hash != this.modeleHash )
        {
            let result = true ;
            this.views.forEach( (view)=>
            {
                if( !view.updateView( this.modele ) ) result = false ;
            }) ;
            if( result ) this.modeleHash = hash ;
        }
    }

    static getControler( id )
    {
        for( let i=0 ; i<Controler.controlers.length ; i++ )
        {
            if( Controler.controlers[i].id == id ) 
                return Controler.controlers[i] ;
        }
        return null ;
    }

    static startUpdating()
    {
        setInterval( ()=>
        {
            Controler.controlers.forEach( (controler)=>
            {
                controler.updateAllViews() ;
            }) ;
        }, 200 ) ;
    }

    static controlers = [] ; // Stocke la référence de tous les controleurs
    static controlerCpt = 0 ;
}