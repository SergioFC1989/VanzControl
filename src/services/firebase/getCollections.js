import firebase from 'firebase';

function getCollections(collectionDoc) {
  let db = firebase.firestore()
  let docRef = db.collection("Empresa")
  docRef.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});
};

export default getCollections;