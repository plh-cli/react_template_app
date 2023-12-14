import { useNavigate, Link, Outlet } from 'react-router-dom';
import './home.module.css';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">头部</div>
      <div className="container">
        <div className="side">
          <ul>
            <li onClick={() => navigate( '/index' )}>首页</li>
            <li onClick={() => navigate( '/pageList' )}>列表页</li>
            {/* <li><Link to='/index'>首页</Link></li>
            <li><Link to='/pageList'>列表页</Link></li> */}
          </ul>
        </div>
        <div className="main">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Home;