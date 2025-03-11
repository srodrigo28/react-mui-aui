
import {complete} from './complete';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export function InputComplete(){
    return(
        <div>
            <Autocomplete
                disablePortal
                options={complete}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Selecione Stack" />}
                />
        </div>
    )
}