import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useTranslation } from 'react-i18next';

import './LanguageChange.scss';

export const LanguageChange = () => {
  const [age, setAge] = React.useState('en');
  const { t, i18n } = useTranslation();

  const languages = ['en', 'pl', 'ua', 'ru'];

  const handleChange = (event: SelectChangeEvent) => {
    const selectedLanguage = event.target.value as string;
    setAge(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  React.useEffect(() => {
    if (!languages.includes(i18n.language)) {
      setAge('en'); 
      i18n.changeLanguage('en');
    } else {
      setAge(i18n.language);
    }
  }, [i18n.language, languages]);

  return (
    <div className='language-change'>
      <Box sx={{ width: 70 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{t("language")}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label={age}
            onChange={handleChange}
          >
            <MenuItem value={'en'}>En</MenuItem>
            <MenuItem value={'pl'}>Pl</MenuItem>
            <MenuItem value={'ua'}>Ua</MenuItem>
            <MenuItem value={'ru'}>Ru</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};
