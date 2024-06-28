import { Outlet, ScrollRestoration } from "react-router-dom";

import { Header } from "../components";

const RootLayout = () => (
  <div>
    <ScrollRestoration />
    <header className="sticky top-0 z-20 px-10 bg-green-400 shadow-md">
      <Header />
    </header>
    <main className="bg-white">
      <Outlet />
    </main>
  </div>
);
export { RootLayout };
