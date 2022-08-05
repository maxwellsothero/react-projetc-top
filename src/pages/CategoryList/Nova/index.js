import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '../../../components/Input';
import { Button } from '@mui/material';

export default function Nova(){
    return(
        <>
          <Input label="Nome"/>
          <Input label="Descrição"/>
          <Input label="Foto"/>
          <Button variant="contained">Enviar</Button>
        </>

    );
}