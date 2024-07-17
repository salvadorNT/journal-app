import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updatedNote } from "./journalSlice";
import { loadNotes, fileUpload } from "../../helpers";

export const startNewNote = () => {
    return async(dispatch, getState) => {
        dispatch(savingNewNote())
        const {uid} = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
         const newDoc = doc( collection(FirebaseDB, `${uid}/journal/notes`) )
         const setDocResp = await setDoc(newDoc, newNote)
         console.log({newDoc, setDocResp});

        newNote.id = newDoc.id;
        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))

    }
}

export const startLoadingNotes = () => {
    return async(dispatch, getState) => {
        const {uid} = getState().auth;
        if(!uid) throw new Error('User doesn\'t exist');
        
        const notes = await loadNotes(uid);
        dispatch( setNotes(notes) );
    }
}

export const startSavingNote = () => {
    return async(dispatch, getState) => {

        dispatch(setSaving());

        const {uid} = getState().auth;
        const {active:note} = getState().journal;

        const noteToFirestore = {...note}
        delete noteToFirestore.id

        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}` )
        await setDoc(docRef, noteToFirestore, {merge:true})

        dispatch(updatedNote(note))
    }
}

export const startUploadingFiles = (files=[]) => {
    return async(dispatch) => {
        dispatch(setSaving());
        // await fileUpload(files[0]);
        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }

        const photosUrls = await Promise.all( fileUploadPromises );
        dispatch(setPhotosToActiveNote(photosUrls));
    }
}

export const startDeletingNote = () => {
    return async(dispatch, getState) => {
        const {uid} = getState().auth;
        const {active:note} = getState().journal;

        const noteToFirestore = {...note}
        delete noteToFirestore.id

        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}` )
        await deleteDoc(docRef);

        dispatch(deleteNoteById(note.id));
        
    }
}