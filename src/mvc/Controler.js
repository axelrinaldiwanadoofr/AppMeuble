

export class Controler
{
    constructor()
    {
        this.modele = null ;
        this.modeleHash = "" ;
        this.views = [] ; // Crée un tableau vide

        // On stoke la référence du nouveau controleur dans le tableau
        // static controlers
        Controler.controlers.push( this ) ;
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
            let result = true ;
            this.views.forEach( (view)=>
            {
                if( !view.updateView( this.modele ) ) result = false ;
            }) ;
            if( result ) this.modeleHash = hash ;
        }
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
}