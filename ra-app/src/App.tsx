import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource } from "react-admin";
import { PosterList } from "./components/PosterList";
import { PosterEdit } from "./components/PosterEdit";

function App() {
  const dataProvider = jsonServerProvider("http://localhost:3000");
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posters" list={PosterList} edit={PosterEdit}></Resource>
    </Admin>
  );
}

export default App;
