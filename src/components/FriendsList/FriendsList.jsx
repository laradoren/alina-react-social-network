import React from 'react';
import css from './FriendsList.module.css';
import PropTypes from 'prop-types';
import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';

export const FriendsList = ({friends}) => {
    return (
      <ul className={css.friendList}>
        {friends.map(friend => (
          <FriendsListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
        ))}
      </ul>
    );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
}
