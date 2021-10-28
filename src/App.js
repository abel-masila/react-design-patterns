import { withUser } from './withUser';
import { UserInfo } from './UserInfo';

const UserInfoWithLoader = withUser(UserInfo, '234');

function App() {
  return (
    <>
      <h1>Here</h1>
      <UserInfoWithLoader />
    </>
  );
}

export default App;
