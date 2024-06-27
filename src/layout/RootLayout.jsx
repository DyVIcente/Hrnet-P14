import { Outlet, ScrollRestoration } from "react-router-dom";

import { Header } from "../components";

const RootLayout = () => (
  <div>
    <ScrollRestoration />
    <header className="sticky top-0 z-20 px-10 bg-white shadow-sm">
      <Header />
    </header>
    <main className="bg-gray-200">
      <Outlet />
    </main>
    <footer>footer</footer>
  </div>
);
export { RootLayout };
