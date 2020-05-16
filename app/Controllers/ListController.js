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
  deleteList(id) {
    if (window.confirm("are you sure you want to delete this List?")) {
      ListService.deleteList(id)
      _drawLists()
    }
  }
  addItem(event, itemId) {
    event.preventDefault()
    let item = event.target.item.value
    ListService.addItem(item, itemId)
    _drawLists()
  }
  deleteItem(id, index) {
    if (window.confirm("are you sure you want to delete this item?")) {
      ListService.deleteItem(id, index)
      _drawLists()
    }
  }

  // popup(){
  //   swal({
  //     title: "Are you sure?",
  //     text: "Once deleted, you will not be able to recover this imaginary file!",
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  //   })
  //   .then((willDelete) => {
  //     if (willDelete) {
  //       swal("Poof! Your imaginary file has been deleted!", {
  //         icon: "success",
  //       });
  //     } else {
  //       swal("Your imaginary file is safe!");
  //     }
  //   });
  // }
  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
