// import { Link,Outlet } from "react-router-dom";
// function Layout() {
//     return(
//         <>
//         <nav>
//             <ul>
//                 <li>
//                     <Link to="/">Home page</Link>
//                 </li>
//                 <li>
//                     <Link to="/contact">contact page</Link>
//                 </li>
//             </ul>
//         </nav>
//         <Outlet/>
//         </>
//     )
// }
// export default Layout
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <Link className="navbar-brand" to="/">MyApp</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
