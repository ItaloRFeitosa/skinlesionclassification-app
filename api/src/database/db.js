
const db = require('./connection');

module.exports = ( collectionName ) => {

  collectionRef = db.collection(collectionName);

  return ({

    collectionRef,

    addNewDocument: (documentData) => new Promise( (resolve,reject) => {
      collectionRef
      .add(documentData)
      .then(newDocRef => {
        console.log(newDocRef.data);
        console.log(`Document with ID ${newDocRef.id} added on ${collectionName} with success.`);
        resolve(newDocRef);

      })
      .catch(error => {

        console.error(`Error to add on ${collectionName}.`);
        reject(error);

      });
    }),

    setNewDocumentWithId: (docId, documentData) => new Promise( (resolve,reject) => {
      collectionRef
      .doc(docId)
      .set(documentData)
      .then(newDocRef => {

        console.log(`Document with ID ${docId} added on ${collectionName} with success.`);
        
        
        resolve(newDocRef);

      })
      .catch(error => {

        console.error(`Error to add on ${collectionName}.`);
        reject(error);

      });
    }),

    getDocumentById: (docId) => new Promise( (resolve,reject) => {
      collectionRef
      .doc(docId)
      .get()
      .then(docRef => {
        if (!docRef.exists) {

          console.log('Document not exists or not found.');
          reject({error: 'Document not exists or not found.'});

        } else {

          console.log('Document data:', docRef.data());
          resolve(docRef);

        }
      })
      .catch(error => {

        console.error(`Error to add on ${collectionName}.`);
        reject(error);

      });
    }),

    getAllDocs: () => new Promise( (resolve,reject) => {
      collectionRef
      .get()
      .then(snapshot => {

        console.log(snapshot.size + ' Documents found in ', collectionName);
        resolve(snapshot);

      })
      .catch(error => {

        console.error('Error on getting documents.');
        reject(error);

      });
    }),

    deleteDocById: (docId) => new Promise( (resolve,reject) => {
      collectionRef
      .doc(docId)
      .delete()
      .then(() => {
        console.log('Document with ID ', docId,' deleted from ', collectionName);
        resolve({message: `Document with ID ${docId} deleted from ${collectionName}`})
      })
      .catch( error => {
        console.error('Error on delete documents');
        reject(error);
      });
    }),

    updateDocById: (docId, docData) => new Promise( (resolve,reject) => {
      collectionRef
      .doc(docId)
      .update(docData)
      .then(() => {
        console.log('Document with ID ', docId,' updated on ', collectionName);
        resolve({message: `Document with ID ${docId} updated on ${collectionName}`})
      })
      .catch( error => {
        console.error('Error on update documents');
        reject(error);
      });
    }),

  });

} 
