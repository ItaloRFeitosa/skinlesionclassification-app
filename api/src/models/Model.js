
module.exports = (modelCollection) => ({

    modelCollection,

    async new(newModelData) {
        const newDocRef = await modelCollection.addNewDocument(newModelData);
        const newModel = {
            id: newDocRef.id,
            ...newModelData
        };
        return newModel;
    },

    async newWithId(modelId, newModelData) {
        const newDocRef = await modelCollection.setNewDocumentWithId(modelId, newModelData);
        const newModel = {
            id: modelId,
            ...newModelData
        };

        console.log(newModel);

        return newModel;
    },

    async all() {
        const allDocsRef = await modelCollection.getAllDocs();
        const allModels = allDocsRef.docs.map(docRef => ({
            id: docRef.id,
            ...docRef.data()
          }));
        return allModels;
    },

    async findById(docId) {
        const docRef = await modelCollection.getDocumentById(docId);
        const model = {
            id: docRef.id,
            ...docRef.data()
        };
        return model;
    },

    async deleteById(docId){
        const res = await modelCollection.deleteDocById(docId);
        return res;
    },

    async updateById(docId, newModelData){
        const res = await modelCollection.updateDocById(docId, newModelData);
        return res;
    }
});
