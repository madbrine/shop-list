import s from './styles.module.css';
import { Manrope } from 'next/font/google';

const font = Manrope({
    subsets: ['latin', 'cyrillic']
})
function Button(props) {

    const text = props.text;
    const icon = props.svg;
    const type = props.type;
    const disabled = props.disabled;
    const onClickFunction = props.onClickFunction;

    return (
        <component 
            className={font.className}
        >
            {type !== 'link'
                ?
                <button
                    className={s[type]}
                    onClick={onClickFunction}
                >
                    <a
                    style={{
                        marginRight: text && icon && 4
                    }}
                    >{text}</a>
                    {icon}
                </button >
                :
                <div className={s[type]}>
                    <div>
                        <a>{text}</a>
                        <div className={s['down-line']} 
                        />
                    </div>
                    <a 
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: text && icon && 4,
                            }}
                    >
                        {icon}
                    </a>
                </div>
            }
        </component>
    )

}
export default Button