import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Footer from "../Footer";
import './SplashPage.css'

function SplashPage() {
    const sessionUser = useSelector(state => state.session.user)

    if(sessionUser) return (
        <Redirect to='/' />
    )

    return (
        <div className='splash-container'>
            <Footer />
        </div>
    )
}


export default SplashPage;
