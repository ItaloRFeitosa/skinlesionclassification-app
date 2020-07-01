import firebase_admin
from firebase_admin import credentials
from firebase_admin import storage
from firebase_admin import firestore
from pathlib import Path

class FirebaseService:
    def __init__(self):
        serviceAccount = str(Path("../", "serviceAccountKey.json"))

        cred = credentials.Certificate(serviceAccount)
        firebase_admin.initialize_app(cred, {
            'storageBucket': 'skincc-3af45.appspot.com'
        })

        self.bucket = storage.bucket()
        self.db = firestore.client()