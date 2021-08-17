import { Ride } from "../types";
import { firestore } from "../resources/firebase";
import { getCurrentUser } from "./UserService";

const db = firestore.collection("/rides");

class RidesDataService {
  getAll() {
    const user = getCurrentUser()?.uid || "";
    return db.where("user", "==", user);
  }

  create(obj: Ride) {
    if (!obj.user) {
      obj.user = getCurrentUser()?.uid || "";
    }
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
