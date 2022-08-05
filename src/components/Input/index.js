import TextField from '@mui/material/TextField';
import { style } from '@mui/system';
import "./style.css"

export default function Input(props) {
    return(

        <TextField className='form1' id="outlined-basic" label={props.label} variant="outlined" fullWidth />
    );
}