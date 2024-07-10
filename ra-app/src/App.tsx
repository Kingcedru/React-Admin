import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource } from "react-admin";
import { PosterList } from "./components/PosterList";
import { PosterEdit } from "./components/PosterEdit";
import { PosterCreate } from "./components/PosterCreate";

function App() {
  const dataProvider = jsonServerProvider("http://localhost:3000");
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posters" list={PosterList} edit={PosterEdit} create={PosterCreate}></Resource>
    </Admin>
  );
}

export default App;
