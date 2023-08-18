import "./global.css"
import { Route, RouterProvider, Outlet, createRoutesFromElements, createBrowserRouter } from "react-router-dom";

import Home from "./components/Home/Home";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    {/* <Route path=":" element={< />} /> */}
  </Route>
))

function RootLayout() {
  return (
    <div style={{ maxWidth: "100%", height: "100lvh" }}>
      <Outlet />
    </div>
  )
}

function App() {
  return <RouterProvider router={router} />
}

export default App;