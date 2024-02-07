import { Outlet } from "react-router-dom";

import SmartNavLink from "../components/SmartNavLink";

import { SOURCE_CODE, TASK_1, TASK_2 } from "../utils/constants";


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
        Glassfrog Assignment by Himanshu Verma
      </footer>
    </>
  );
}

export default Layout;