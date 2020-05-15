import ListService from "../Services/ListService.js";
import _store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let lists = _store.State.lists
  let template = ''
  lists.forEach(l => template += l.Template)
  document.getElementById("lists").innerHTML = template;

}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }
  addList(event) {
    event.preventDefault()
    let formData = event.target
    let rawList = {
      title: formData.title.value,
      color: formData.color.value,
    }
    formData.reset();
    ListService.addList(rawList)
    _drawLists();
  }
  deleteList() {

  }
  addItem(event, itemId) {
    event.preventDefault()
    let item = event.target.item.value
    ListService.addItem(item, itemId)
    _drawLists()
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
