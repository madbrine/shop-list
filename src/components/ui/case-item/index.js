import Image from 'next/image';
import s from './styles.module.css';

function CaseItem({ data }) {

    const imageSrc = data.imageSrc;
    const text = data.text;
    const year = data.year;
    const link = data.linkUrl;

    return (
        <div className={s['container']}>
            <a href={'case/' + link}>
                <div className={s['card']}>
                    <Image
                        src={imageSrc}
                    />
                </div>
                <div>
                    <h4 className={s['h4']}>
                        {year}
                    </h4>
                    <h3 className={s['h3']}>
                        {text}
                    </h3>
                </div>
            </a>
        </div>
    )
}
export default CaseItem;