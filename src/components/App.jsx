import { Profile } from "./Profile/Profile";
import user from './data/user.json';
import { Statictics } from "./Statictics/Statictics";
import data from './data/data.json';
import { FriendsList } from "./FriendsList/FriendsList";
import friends from './data/friends.json'
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
      <Statictics title={"Upload stats"} stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>

  );
};

//just for checking
