import { MeModule } from "../meuble/MeModule"

export class FormMeModule {
    static instances = [];
    static lastId = 0;

    constructor(idForm, meModel = new MeModule()) {

        FormMeModule.instances.push(this);

        this.id = ++FormMeModule.lastId;
        this.divForm = document.getElementById(idForm);
        this.meModel = meModel;

        document.getElementById(`${this.divForm.children[0].children[9].id}`).addEventListener("click", (event) => {
            event.preventDefault();
            this.onOk();
        }) ;
        
        
        document.getElementById(`${this.divForm.children[0].children[10].id}`).addEventListener("click", (event) => {
            event.preventDefault();
            this.onCancel();
        }) ;

    }

    updateThisForm(){
        this.divForm.children[0].children[1].value = this.meModel.largeur;
        this.divForm.children[0].children[4].value = this.meModel.hauteur;
        this.divForm.children[0].children[7].value = this.meModel.profondeur;      
        
        console.log(`INSTANCE[${this.id}] : Update this form`);
        
    }

    updateForm() {
       FormMeModule.instances.forEach(element => {
        element.divForm.children[0].children[1].value = this.meModel.largeur;
        element.divForm.children[0].children[4].value = this.meModel.hauteur;
        element.divForm.children[0].children[7].value = this.meModel.profondeur;        

        console.log(`INSTANCE[${this.id}] : Update all form`);
       });

    }

    updateModele(){
        let largeur = this.divForm.children[0].children[1].value;
        let hauteur = this.divForm.children[0].children[4].value;
        let profondeur = this.divForm.children[0].children[7].value;

        this.meModel.largeur = largeur;
        this.meModel.hauteur = hauteur;
        this.meModel.profondeur = profondeur;

        console.log(`INSTANCE[${this.id}] : Update modele`);
        console.log(this.meModel);
        
    }


    onOk() {
        this.updateModele();
    }


    onCancel(){
        this.updateForm();
    }


    static updateAllForm(_meModel){
        FormMeModule.instances.forEach(form => {
            
            if (form.meModel === _meModel) {
                form.updateThisForm();
            }
            
        });

        console.log("Update all form from MeModule");
    }

}