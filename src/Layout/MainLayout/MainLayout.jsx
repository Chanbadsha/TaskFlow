import { Outlet } from "react-router";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

export default function MainLayout() {
  return (
<>

<header>
  <Header/>
</header>
<main>
  <Outlet/>
</main>
<footer>
  <Footer/>
</footer>

</>
  )
}
