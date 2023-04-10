import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../Home/Home";
import Food from "../Food/Food";
import Fishs from "../Fishs/Fishs";
import FoodDetail from "../FoodDetail/FoodDetail";

export  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {path: '/', element: <Home></Home>},
        {path: 'home', element: <Home></Home>},
        {
            path: 'foods',
            loader: async () => {
                return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
            }, 
            element: <Food></Food>
        },
        {
            path: 'foods/:name',
            loader: async ({params}) => {
                return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
            },
            element: <FoodDetail></FoodDetail>
        },
        {path: 'fishs', element: <Fishs></Fishs>}
    ]}
]);