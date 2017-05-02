namespace app.Controllers {

  export class CreateController {
    public user;
    public userId;
    public project;
    public newProject;
    public model;
    public property;
    public selectedModel;
    public madeProject = false;

    static $inject = ['userService', '$stateParams'];

    constructor(public userService, public $stateParams) {
      this.newProject = {title: '', connectionString: '', models: []};
      this.model = {modelName: '', properties: []};
      this.selectedModel = {modelName: '', properties: []};
      this.property = {propertyName: '', dataType: '', required: ''}

      this.userId = this.$stateParams['id'];
      this.user = this.userService.getUser(this.userId);
    }
    public startProject(){
      this.madeProject = true;
      let newProject = this.newProject;
      console.log(newProject);
    }
    public createNewModel(){
      let model = this.model;
      this.newProject.models.push(model);
      console.log("NEW MODEL");
      console.log(this.newProject);
    }
    public createNewProperty(){
      let property = this.property;

    }
    public getModel(){
      console.log(this.selectedModel)
    }



  }

}
