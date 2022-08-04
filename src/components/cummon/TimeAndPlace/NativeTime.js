import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const times = [
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
];

export default function MultipleSelectNative() {
    const [personTime, setPersonTime] = React.useState([]);
    const handleChangeMultiple = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { options } = event.target;
        const value: string[] = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setPersonTime(value);
    };

    return (
        <div>
            <FormControl sx={{ minWidth: 175, maxWidth: 300,minHeight:160 , }}>
                <InputLabel shrink htmlFor="select-multiple-native">
                    Время
                </InputLabel>
                <Select
                    sx={{minHeight:160,minWidth: 175}}
                    multiple
                    native
                    value={personTime}
                    // @ts-ignore Typings are not considering `native`
                    onChange={handleChangeMultiple}
                    label="Native"
                    inputProps={{
                        id: 'select-multiple-native',
                    }}
                >
                    {times.map((time) => (
                        <option key={time} value={time} >
                            {time}
                        </option>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}