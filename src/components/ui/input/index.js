import { useState } from "react";
import s from './styles.module.css';

function Input(props) {

    const placeholder = props.placeholder;
    const error = props.error;
    const text = props.text;
    const setText = props.setText;

    const onChangeText = (e) => {
        setText(e.target.value)
    }
    return (
        <div className={s['container']}>
            <input
                value={text}
                onChange={e => onChangeText(e)}
                placeholder={placeholder}
                className={s['input']}
            >
            </input>
            <div className={s['error-box']}>
                {error &&
                    "Это поле нужно заполнить"
                }
            </div>
        </div>
    );
}

export default Input;