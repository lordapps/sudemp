import { Navbar, Footer } from "./"

const Layout = ({children}) => {
    return (
        <div className="content">
        <Navbar/>
            {children}
        <Footer/>
        </div>
    );
}
 
export  {Layout};