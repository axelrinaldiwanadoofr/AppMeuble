

export class MeModule
{
    constructor( largeur=30, hauteur=10, profondeur=30 )
    {
        if( largeur < MeModule.largeurMin )
            this._largeur = MeModule.largeurMin ;
        else if( largeur > MeModule.largeurMax )
            this._largeur = MeModule.largeurMax ;
        else
            this._largeur = largeur ;

        if( hauteur < MeModule.hauteurMin )
            this._hauteur = MeModule.hauteurMin ;
        else if( hauteur > MeModule.hauteurMax )
            this._hauteur = MeModule.hauteurMax ;
        else
            this._hauteur = hauteur ;

        if( profondeur < MeModule.profondeurMin )
            this._profondeur = MeModule.profondeurMin ;
        else if( profondeur > MeModule.profondeurMax )
            this._profondeur = MeModule.profondeurMax ;
        else
            this._profondeur = profondeur ;
    }

    // getter pour la propriété largeur
    get largeur()
    {
        return this._largeur ; // retourne la valeur de l'attribut _largeur
    }

    set largeur( valeur )
    {
        if( valeur < MeModule.largeurMin )
            this._largeur = MeModule.largeurMin ;
        else if( valeur > MeModule.largeurMax )
            this._largeur = MeModule.largeurMax ;
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
            this._hauteur = MeModule.hauteurMin ;
        else if( valeur > MeModule.hauteurMax )
            this._hauteur = MeModule.hauteurMax ;
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
            this._profondeur = MeModule.profondeurMin ;
        else if( valeur > MeModule.profondeurMax )
            this._profondeur = MeModule.profondeurMax ;
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


}