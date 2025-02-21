import { Outlet } from "react-router";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";

export default function MainLayout() {
  return (
<>
<Toaster />
<header>
  <Header/>
</header>
<main className="min-h-[calc(100vh - 292px)]">
  <Outlet/>
</main>
<footer>
  <Footer/>
</footer>

</>
  )
}
