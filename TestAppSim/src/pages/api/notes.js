
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

        const notes = await getDocs(dbInstance);
        const notesArray = [];
        notes.forEach((doc) => {
            notesArray.push(doc.data());
        });
        return res.json({
            message: 'success',
            success: true,
            data: notesArray,
        });
    }
      
     catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}


async function getNotebyId(req,res){
    
    
    try {

        const notes = await getDocs(dbInstance);
        const notesArray = [];
        notes.forEach((doc) => {
            notesArray.push(doc.data());
        });
        return res.json({
            message: 'success',
            success: true,
            data: notesArray,
        });
    }
      
     catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

