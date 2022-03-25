import Head from "./header/Head";
import Footer from "../src/footer/Footer.jsx";
import {Outlet} from 'react-router-dom'

export function Layout() {


  
  return (
            <>
              
                <Head />
                <Outlet />
                <Footer />

            </>

  );
}
