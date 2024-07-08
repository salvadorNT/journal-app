import { SaveOutlined, Title } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { useEffect, useMemo } from "react"
import { setActiveNote, startSavingNote } from "../../store/journal"

export const NoteView = () => {

    const { active: note } = useSelector(store => store.journal);
    const { title, body, date, onInputChange, formState } = useForm(note)

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date])

    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(setActiveNote(formState))
    }, [formState])

    const onSaveNote = () => {
        dispatch(startSavingNote());
    }

    return (
        <Grid alignItems='center' container direction='row' justifyContent='space-between' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>

            <Grid item>
                <Button onClick={onSaveNote} color="primary" sx={{ padding: 2 }}>
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
