import { Link,Outlet } from "react-router-dom";
function Layout() {
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home page</Link>
                </li>
                <li>
                    <Link to="/contact">contact page</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}
export default Layout