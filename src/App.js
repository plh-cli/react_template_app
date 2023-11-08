import './App.css';
import routers from './router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {
            routers.map( ( route, key ) => {
              console.log( route );
              if ( route.exact ) {
                return <Route key={key} exact path={route.path} element={<route.component />} />;
              } else {
                return <Route key={key} path={route.path}
                  render={props => <route.element {...props} routes={route.routes} />
                  } />;
              }
            } )
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
