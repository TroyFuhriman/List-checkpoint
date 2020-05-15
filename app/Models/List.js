import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.title = data.title;
    this.items = []
    this.color = data.color || "#f39699"
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get Template() {
    return /*html*/`
    <div class="col-md-3 col-12 mt-3">
    <div class="card shadow">
      <div class="card-top text-center bg-secondary text-light d-flex flex-column"
        style="background-color: ${this.color} !important;">
        <i onclick="app.listController.deleteList('${this.id}')" class="fas fa-minus-square text-warning align-self-end pr-1 pt-1 hover" aria-hidden="true"></i>
        <h5>${this.title} </h5>
      </div>
      <div class="card-body">
        <ul class="card-text bullet-change row">
          ${this.ItemsTemplate}
        </ul>
      </div>
      <form class="input-group mb-3 pl-3 pr-3" onsubmit="app.listController.addItem(event, '${this.id}')">
        <input type="text" class="form-control" id="item" placeholder="list item...">
        <div class="input-group-append">
          <button class="btn btn-outline-success" type="submit"><i
              class="fas fa-plus text-secondary" aria-hidden="true"></i></button>
        </div>
      </form>
    </div>
  </div>`
  }

  get ItemsTemplate() {
    let template = ""
    this.items.forEach((item, index) => {
      template += /*html*/`
      <li class="col-6 p-0">${item} </li> <i class="far fa-minus-square text-danger action text-center col-1 offset-3" 
      onclick= "app.listController.deleteItem('${this.id}', ${index})"
            aria-hidden="true"></i>`
    })
    return template;
  }
}
