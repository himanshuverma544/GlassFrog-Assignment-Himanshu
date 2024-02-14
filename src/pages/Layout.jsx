import { Outlet, Link } from "react-router-dom";

import SmartNavLink from "../components/SmartNavLink";

import { TASK_1, TASK_2, SOURCE_CODE, DEVELOPER, COMPANY } from "../utils/constants";


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
        <p>
          <Link
            to={COMPANY.pathname}
            target="_blank"
          >
            {COMPANY.name}
          </Link>
                 company assignment completed by     
          <Link
            to={DEVELOPER.pathname}
            target="_blank"
          >
            {DEVELOPER.name}
          </Link>
        </p>
      </footer>
    </>
  );
}

export default Layout;