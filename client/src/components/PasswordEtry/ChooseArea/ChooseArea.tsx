import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { chooseAreaToChoose } from '../../../common/data';
import { ChooseAreaProps } from '../../../common/types-and-interfaces';
import { useTranslation } from 'react-i18next';

import './ChooseArea.scss';


export const ChooseArea:React.FC<ChooseAreaProps> = ({ area, setArea}) => {
    const { t, i18n } = useTranslation();
    const handleChange = (event: SelectChangeEvent) => {
        setArea(event.target.value);
    };

    return (
        <div>
            <Box sx={{ width: 268, backgroundColor:'white'}}>
                <FormControl fullWidth>
                    <InputLabel style={{fontFamily: 'OdibeeSans-Regular', fontSize:'30px', fontWeight: '400', color: 'rgb(118, 118, 118)', letterSpacing:'0.2px' }} id="demo-simple-select-label">{t("area")}</InputLabel>
                    <Select
                        style={{fontFamily: 'Sawarabi Mincho', fontWeight: '400', fontSize:'20px', color: 'black' }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={area}
                        label="Area"
                        onChange={handleChange}
                    >
                        {chooseAreaToChoose.length>0?chooseAreaToChoose.map((elem:any)=><MenuItem
                        style={{fontFamily: 'Sawarabi Mincho', fontWeight: '400', fontSize:'18px', color: 'black' }}
                         key={elem}
                          value={elem}
                          >{elem}</MenuItem>):<></>}
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}