import HomePage from "@/pages/HomePage/HomePage";
import SuccessPage from "@/pages/SuccessPage/SuccessPage";

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
  },
  {
    name: "Sucess",
    path: "/published",
    component: SuccessPage
  }
]

export default routes;
