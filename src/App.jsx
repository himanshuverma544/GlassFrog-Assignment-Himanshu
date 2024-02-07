import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { HashRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Task1 from './pages/Task1';
import Task2 from './pages/Task2';
import Page404 from './pages/Page404';

import { TASK_1, TASK_2, PAGE404 } from './utils/constants';


function App() {
  return (
    <HashRouter basename=''>
      <Routes>
        <Route path={TASK_1.pathname} element={<Layout/>}>
          <Route index element={<Task1/>}/>
          <Route path={TASK_2.pathname} element={<Task2/>}/>
          <Route path={PAGE404.pathname} element={<Page404/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;