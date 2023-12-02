import { useForm, SubmitHandler } from 'react-hook-form';
import { loginUser } from '../../common/async-functions';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './PasswordEntry.scss';
import { useTranslation } from 'react-i18next';
import { ChooseArea } from './ChooseArea';

type FormData = {
    area: string;
    password: string;
};

export const PasswordEntry = () => {
    const [errorPassword, setErrorPassword] = useState<string>('');
    const navigate = useNavigate();
    const [area, setArea] = useState<string>('');

    const { t, i18n } = useTranslation();

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm<FormData>({
        mode: "onChange"
    });


    const getResource = async (password: string, area: string) => {
        const res = await loginUser(password, area);
        if (res === 'fuck, who are you?') {
            return 'unnown';
        } else if (res && res.newToken && res.newToken.accessToken.length === 205) {
            return res;
        }
        return false;
    }

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const res = await getResource(data.password, area);
        if (res === 'unnown') {
            setErrorPassword('Invalid Password');
        } else if (res) {
            localStorage.setItem('currentArea', area);
            navigate(`/${res.area}`);
        } else {
            setErrorPassword('Server Error');
        }
        reset();
    };

    return (
        <div className='password-entry'>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <label htmlFor='area'>
                    <h4>
                    {t("area")}
                    </h4>
                    <input
                        placeholder={t("areaInput")}
                        type='text'
                        {...register('area', {
                            required: 'need to fill',
                            minLength: {
                                value: 2,
                                message: 'more letters',
                            },
                        })}
                    />
                </label> */}
                <h4>
                    {t("area")}
                </h4>
                <ChooseArea area={area} setArea={setArea} />
                <label htmlFor='password'>
                    <h4>
                        {t("passwordEntry")}
                    </h4>
                    <input
                        placeholder={t("passwordEntryInput")}
                        type='password'
                        {...register('password', {
                            required: 'need to fill',
                            minLength: {
                                value: 8,
                                message: 'password must be at least 8 characters long',
                            },
                        })}
                    />
                </label>
                <p className='password-entry__error'>{errorPassword}</p>
                <button className={isValid ? 'one-card__footer__custom-button' : 'one-offer__custom-button-disabled'} disabled={!(isValid)} type='submit'>{t("entry")}</button>
            </form>
        </div>
    );
}