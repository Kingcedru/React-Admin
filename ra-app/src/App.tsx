import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource } from "react-admin";
import { PosterList } from "./components//posters/PosterList";
import { PosterEdit } from "./components/posters/PosterEdit";
import { PosterCreate } from "./components//posters/PosterCreate";
import { CategoryList } from "./components/categories/CategoriesList";
import { CategoryEdit } from "./components/categories/CategoriesEdit";
import { CategoryCreate } from "./components/categories/CategoriesCreate";

function App() {
  const dataProvider = jsonServerProvider("http://localhost:3000");
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="categories"
        list={CategoryList}
        edit={CategoryEdit}
        create={CategoryCreate}
      ></Resource>
      <Resource
        name="posters"
        list={PosterList}
        edit={PosterEdit}
        create={PosterCreate}
      ></Resource>
    </Admin>
  );
}

export default App;
