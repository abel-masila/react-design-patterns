import axios from 'axios';
import { DataSource } from './DataSource';
import { UserInfo } from './UserInfo';
import { ProductInfo } from './ProductInfo';

const getServerData = (url) => async () => {
  const resp = await axios.get(url);
  return resp.data;
};

const getLocalStorageData = (key) => () => {
  return localStorage.getItem(key);
};

const Text = ({ message }) => <h1>{message}</h1>;
function App() {
  return (
    <>
      <DataSource getDataFunc={getServerData('/users/123')} resourceName="user">
        <UserInfo />
      </DataSource>
      <DataSource
        getDataFunc={getLocalStorageData('message')}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </>
  );
}

export default App;
