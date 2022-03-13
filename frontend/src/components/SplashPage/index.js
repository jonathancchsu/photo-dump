import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// import SplashNavigation from "../SplashPageNavigation";
import Footer from "../Footer";
import './SplashPage.css'

function SplashPage() {
    const sessionUser = useSelector(state => state.session.user)

    if(sessionUser) return (
        <Redirect to='/' />
    )

    return (
        <div className='splash-container'>
            {/* <SplashNavigation /> */}
            {/* <SplashImage /> */}
            <Footer />
        </div>
    )
}


export default SplashPage;
