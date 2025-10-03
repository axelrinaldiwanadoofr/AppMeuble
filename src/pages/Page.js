

export class Page
{
    contructor( template )
    {
        this.template = template ;
    }

    async loadHtml()
    {
        let reponse = await window.fetch( this.template, {method: "GET"}) ;
        let html = await reponse.text() ;
        return html ;
    }

    async render( mainElement )
    {
        if( mainElement )
        {
            // On a un template et l'élément racine ne contient rien
            if( this.template && !mainElement.children.length )
            {
                // On charge le code HTML du formulaire
                let html = await this.loadHtml( this.template ) ;
                // On injecte le code HTML chargé dans la balise racine
                mainElement.innerHTML = html ;
            }
        }
    }


}