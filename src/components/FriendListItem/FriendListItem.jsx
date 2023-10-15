// import styled from 'styled-components';
import styles from "./FriendListItem.module.css";

export function FriendListItem({ avatar, name, isOnline }) {

    return ( <li className={styles.item}>
            <span className={isOnline ? `${styles.status} ${styles.online}` : `${styles.status} ${styles.offline}`}></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
                </li>
            )
};

