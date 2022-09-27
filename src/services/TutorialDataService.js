import firebase from "../firebase";

const db = firebase.ref("/tutorials");

class TutorialDataService {
  getAll() {
    return db;
  }

  create(tutorial) {
    return db.push(tutorial);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }

// 
  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }

}

export default new TutorialDataService();