import { FriendListItem } from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css"

export function FriendList({ friends }) {
    return (
        <ul className={styles.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
            ))}
</ul>
)
};