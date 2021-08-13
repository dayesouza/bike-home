import { Ride } from "../../types";
import firebase from "./firebase";

const db = firebase.collection("/Rides");

class RidesDataService {
  getAll() {
    return db;
  }

  create(obj: Ride) {
    return db.add(obj);
  }

  update(id: string, value: Ride) {
    return db.doc(id).update(value);
  }

  delete(id: string) {
    return db.doc(id).delete();
  }
}

export default new RidesDataService();
