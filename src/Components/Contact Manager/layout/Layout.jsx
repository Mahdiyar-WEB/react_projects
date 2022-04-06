import { Fragment } from "react";
import Navigation from "../Navigation/Navigation";

const Layout = ({children}) => {
    return ( 
        <Fragment>
            <Navigation/>
            {children}
        </Fragment>
     );
}
 
export default Layout;