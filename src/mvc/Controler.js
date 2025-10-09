

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
        this.modeleHash = "" ;
    }

    async updateAllViews( modele )
    {
        if( modele != undefined )
            this.modele = modele ;

        if( this.modele )
        {
            let hash = this.modele.getHash() ;
            
            if( hash != this.modeleHash )
            {
                let result = 0 ;
                for( let i=0; i<this.views.length ; i++ )
                {
                    if( await this.views[i].updateView( this.modele ) ) result++ ;
                } 
                if( result && result == this.views.length ) this.modeleHash = hash ;
            }
        }
    }

    static getControler( id )
    {
        for( let i=0 ; i<Controler.controlers.length ; i++ )
        {
            if( Controler.controlers[i] && Controler.controlers[i].id == id ) 
                return Controler.controlers[i] ;
        }
        return null ;
    }

    static removeControler( id )
    {      
        for( let i=0 ; i<Controler.controlers.length ; i++ )
        {
            if( Controler.controlers[i] && Controler.controlers[i].id == id ) 
                Controler.controlers[i] = null ;
        }
    }

    static startUpdating()
    {
        setInterval( ()=>
        {
            Controler.controlers.forEach( (controler)=>
            {
                if( controler )
                    controler.updateAllViews() ;
            }) ;
        }, 200 ) ;
    }

    static controlers = [] ; // Stocke la référence de tous les controleurs
    static controlerCpt = 0 ;
}