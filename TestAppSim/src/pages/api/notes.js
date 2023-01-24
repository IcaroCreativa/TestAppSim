
import { app, database } from '../../../firebaseConfig';

import { collection, addDoc, getDocs } from 'firebase/firestore';


const dbInstance = collection(database, 'notes');

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {

            if (req.query.id) {
                return getNotebyId(req, res);
            } else {
                return getNotes(req, res);
            }           
        }

        case 'POST': {
            return addPost(req, res);
        }

        case 'PUT': {
            return updatePost(req, res);
        }

        case 'DELETE': {
            return deletePost(req, res);
        }
    }
}

async function getNotes(req,res){
    
    
    try {
        const notes=getDocs(dbInstance)
            .then((data) => {
                console.log(data);
                return res.json({
                    message: JSON.parse(JSON.stringify(data.docs)),
                    success: true,
            })
        
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}
