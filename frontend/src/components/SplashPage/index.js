import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './SplashPage.css'

function SplashPage() {
  const sessionUser = useSelector(state => state.session.user);

  if(sessionUser) return (
    <Redirect to='/' />
  )

  return (
    <div className='splash-container'>
      <div className="landingPageContainer">
        <h1 className="landingH1">Welcome to Photo Dump.</h1>
        <div className="landingMessage">Come join the community and share your daily life!</div>
      </div>
    </div>
  )
}


export default SplashPage;
