import { db } from "../Firebase/firebase";

import { collection, getDocs, getDoc, addDoc, updateDoc, doc } from "firebase/firestore";

const argonauteCollectionRef = collection(db, "argonautes");


class ArgonauteService {

    addArgonautes = (newArgonaute) => {
        return addDoc(argonauteCollectionRef, newArgonaute);
    }

    updateArgaunautes = (id, updateArgaunautes) => {
        const argonauteDoc = doc(db, "argonautes", id);
        return updateDoc(argonauteDoc, updateArgaunautes)
    }

    getAllArgonautes = () => {
        return getDocs(argonauteCollectionRef);
    }

    getArgonaute = (id) => {
        const argonauteDoc = doc(db, "argonautes", id);
        return getDoc(argonauteDoc);
    }
}

export default new ArgonauteService();