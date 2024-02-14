import { Outlet } from "react-router-dom";

import SmartNavLink from "../components/SmartNavLink";

import { TASK_1, TASK_2, SOURCE_CODE } from "../utils/constants";


const Layout = () => {

  return (
    <>
      <header>
        <nav className="app-navbar">
          <ul>
            <SmartNavLink
              path={TASK_1.pathname}
              title={TASK_1.title}
            />    
            <SmartNavLink
              path={TASK_2.pathname}
              title={TASK_2.title}
            />      
            <SmartNavLink
              path={SOURCE_CODE.pathname}
              title={SOURCE_CODE.title}
              target="_blank"
            />       
          </ul>
        </nav>
      </header>

      <main>
        <Outlet/>
      </main>
    
      <footer>
        GlassFrog Technologies Company Assignment by Himanshu Verma
      </footer>
    </>
  );
}

export default Layout;
