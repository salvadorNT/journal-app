import { SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote, startSavingNote, startUploadingFiles } from "../../store/journal"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {

    const { active: note, messageSaved, isSaving } = useSelector(store => store.journal);
    const { title, body, date, onInputChange, formState } = useForm(note)

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date])

    const fileInputRef = useRef()

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    useEffect(() => {

        if (messageSaved.length > 0) {
            Swal.fire('Nota actualizada', messageSaved, 'success');
        }
    }, [messageSaved])

    const onSaveNote = () => {
        dispatch(startSavingNote());
    }
    const onFileInputChange = ({target}) => {
        if(target.files ==0) return;

        dispatch(startUploadingFiles(target.files));
    }

    return (
        <Grid alignItems='center' container direction='row' justifyContent='space-between' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>

            <Grid item>

                <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    onChange={onFileInputChange}
                    style={{display: 'none'}}
                />
                <IconButton
                    color="primary"
                    disabled={isSaving}
                    onClick={()=> fileInputRef.current.click()}
                >
                    <UploadOutlined/>
                </IconButton>
                <Button disabled={isSaving} onClick={onSaveNote} color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    name="title"
                    value={title}
                    onChange={onInputChange}
                    sx={{ border: 'none', mb: 1 }}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="Qué sucedió el día de hoy?"
                    label="Descripción"
                    name="body"
                    value={body}
                    onChange={onInputChange}
                    minRows={5}
                />
            </Grid>

            <ImageGalery />
        </Grid>

    )
}
