import styles from './card.module.css';
import cherry from '@/assets/cherry-blossom-icon.svg';
import Image from 'next/image';

type Props = {
    title: string;
    body: string;
    link: string;
    subheader?: string;
}

const Card = ({ title, body, link, subheader }: Props) => {
    return(
        <a href={link} target='_blank' className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subheader}>{subheader}</p>
            <p className={styles.body}>{body}</p>
            <Image 
                className={styles.cherryImage}
                src={cherry}
                alt="Cherry blossom"
            />
        </a>
    );
}

export default Card;