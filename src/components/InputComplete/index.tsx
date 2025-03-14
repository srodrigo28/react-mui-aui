
import {complete} from './complete';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export function InputComplete(){
    return(
        <div>
            <Autocomplete
                disablePortal
                options={complete}
                className='input-full'
                renderInput={(params) => <TextField {...params} label="Selecione Stack" />}
                />
        </div>
    )
}