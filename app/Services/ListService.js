import List from "../Models/List.js";
import store from "../store.js";

//Public
class ListService {
  deleteItem(listid, index) {
    let list = store.State.lists.find(l => l.id == listid)
    list.items.splice(index, 1)
    store.saveState()

  }
  deleteList(id) {
    store.State.lists = store.State.lists.filter(l => l.id != id)
    store.saveState()
  }
  addItem(item, itemId) {
    let list = store.State.lists.find(l => l.id == itemId)
    list.items.push(item)
    store.saveState()
  }
  addList(rawList) {
    let list = new List(rawList)
    store.addList(list)
    store.saveState()
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
