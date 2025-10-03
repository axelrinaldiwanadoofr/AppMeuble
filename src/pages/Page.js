

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

}