import { Modele } from "../mvc/Modele";

export class MeModule extends Modele
{
    constructor( id, largeur=30, hauteur=10, profondeur=30, couleur="#C0C0C0" )
    {
        super() ; //Appel du constructeur de Modele

        // On cree et initialise les attributs
        this._id = "MM" + MeModule.moduleCpt++ ;
        this._largeur = MeModule.largeurMin ;
        this._hauteur = MeModule.hauteurMin ;
        this._profondeur = MeModule.profondeurMin ;
        this.couleur = couleur ;

        // On met à jour des attributs
        try
        {
            if( id != undefined && id != null ) this.id = id ;
            this.largeur = largeur ;
            this.hauteur = hauteur ;
            this.profondeur = profondeur ;
        }
        catch( erreur )
        {
            console.error( erreur ) ;
        }
    }

    getHash()
    {
        return "" + this._largeur + this._hauteur + this._profondeur + this.couleur ;
    }

    // getter pour la propriété id
    get id()
    {
        return this._id ; // retourne la valeur de l'attribut _id
    }

    set id( valeur )
    {
        // Dans une version ultérieure l'unicité de la valeur de l'identifiant 
        // devra être vérifiée.
        this._id = valeur ;
    }

    // getter pour la propriété largeur
    get largeur()
    {
        return this._largeur ; // retourne la valeur de l'attribut _largeur
    }

    set largeur( valeur )
    {
        if( valeur < MeModule.largeurMin )
            throw "La largeur doit etre supperieure ou egale à " + MeModule.largeurMin ;
        else if( valeur > MeModule.largeurMax )
            throw "La largeur doit etre inferieur ou egale à " + MeModule.largeurMax ;            
        else
            this._largeur = valeur ;
    }

    get hauteur()
    {
        return this._hauteur ;
    }

    set hauteur( valeur )
    {
        if( valeur < MeModule.hauteurMin )
            throw "La hauteur doit etre supperieure ou egale à " + MeModule.hauteurMin ;
        else if( valeur > MeModule.hauteurMax )
            throw "La hauteur doit etre inférieure ou egale à " + MeModule.hauteurMax ;
        else
            this._hauteur = valeur ;
    }

    get profondeur()
    {
        return this._profondeur ;
    }

    set profondeur( valeur )
    {
        if( valeur < MeModule.profondeurMin )
            throw "La profondeur doit etre supperieure ou egale à " + MeModule.profondeurMin ;
        else if( valeur > MeModule.profondeurMax )
            throw "La profondeur doit etre inférieure ou egale à " + MeModule.profondeurMax ;
        else
            this._profondeur = valeur ;

    }

    // Creation d'attributs de classe pour stocker les limites
    static largeurMin = 30 ;
    static largeurMax = 120 ;
    static hauteurMin = 10 ;
    static hauteurMax = 300 ;
    static profondeurMin = 30 ;
    static profondeurMax = 120 ;

    static moduleCpt = 0 ;

}