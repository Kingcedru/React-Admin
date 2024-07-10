import jsonServerProvider from "ra-data-json-server";
import { Admin, ListGuesser, Resource } from "react-admin";
import { PosterList } from "./components/PosterList";

function App() {
  const dataProvider = jsonServerProvider("http://localhost:3000");
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posters" list={PosterList}></Resource>
    </Admin>
  );
}

export default App;
