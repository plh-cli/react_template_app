import './App.css';
import routers from './router';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const getRouters = ( list ) => {
    return (
      list.map( ( route, key ) => {
        if ( route.exact ) {
          return (
            <Route key={key} exact path={route.path} element={<route.component />}>
              {
                route.children && route.children.length ? (
                  getRouters( route.children )
                ) : null
              }
            </Route>
          );
        } else {
          return <Route key={key} path={route.path}
            render={props => <route.element {...props} routes={route.routes} />
            } />;
        }
      } )
    );
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Navigate to="/index" />} />
          {getRouters( routers )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
