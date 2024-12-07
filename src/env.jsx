import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import SingleNew from "./pages/SingleNew";
import SingleSwiper from "./pages/SingleSwiper";

export const API = "https://qaxvachi.uz/api/v1"
// export const API = "http://localhost:8081/api/v1"

export const token = {"Authorization":"Bearer "+localStorage.getItem('token')};

export const LoadingSpinner = () => (
    <div className="flex justify-center items-center">
      <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
);

export const PUBLIC_ROUTES = [
    {
        path:"/",

        element:<Home/>
    },
    {
        path:"/project/:id",
        element:<SingleProduct/>
    },
    {
        path:"/plane/:id",
        element:<SingleSwiper/>
    },
    {
        path:"/news/:id",
        element:<SingleNew/>
    }
]