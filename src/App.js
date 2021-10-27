import axios from 'axios';
import { DataSource } from './DataSource';
import { UserInfo } from './UserInfo';
import { ProductInfo } from './ProductInfo';
function App() {
  return (
    <>
      <DataSource
        getDataFunc={async () => {
          const resp = await axios.get('/users/123');
          return resp.data;
        }}
        resourceName="user"
      >
        <UserInfo />
      </DataSource>
    </>
  );
}

export default App;
