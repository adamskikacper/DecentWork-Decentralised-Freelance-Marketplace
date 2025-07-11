import { AppProviders } from "./providers";
import { AppRoutes } from "@/routes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
 return (
  <BrowserRouter>
   <AppProviders>
    <AppRoutes />
   </AppProviders>
  </BrowserRouter>
 );
};

export default App;
