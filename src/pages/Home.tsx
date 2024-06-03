
import bridget from './../assets/bridget.jpeg';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePen, faHammer } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin as linkedinIcon, faYoutube as youtubeIcon, faGithub as githubIcon } from '@fortawesome/free-brands-svg-icons'
import { ENABLE_BLOG, ENABLE_HOME_PAGE_BLURB, ENABLE_PORTFOLIO } from '../utilities/FeatureFlags';
import './Home.css';

function Home() {
    const navigate = useNavigate();

    return (
        <div className='section'>
            <span className='container'>
                {ENABLE_BLOG ? <button className="icon blog" data-info="View Blog" onClick={() => navigate("/blog")}>
                    <FontAwesomeIcon icon={faFilePen} size="10x" />
                </button> : null}
                <img src={bridget} className="profile-pic" alt="" />
                {ENABLE_PORTFOLIO ? <button className="icon portfolio" data-info="View Portfolio" onClick={() => navigate("/portfolio")}>
                    <FontAwesomeIcon icon={faHammer} size="10x" />
                </button> : null}
            </span>
            <br />
            <div className="text_banner blurb">
                {ENABLE_HOME_PAGE_BLURB ?
                    <>
                        <h1>What is love?</h1>
                        <p className="answer">
                            Love is when you look at something and want to see it <em>thrive</em>
                            <br />
                            I want to see people <em>thrive</em>
                        </p>
                    </> : null}
            </div>
            <br />
            <br />
            <span className="links">
                <button className="icon linkedin" data-info="View LinkedIn Profile" onClick={() => window.location.href = 'https://www.linkedin.com/in/bridget-naylor/'}>
                    <FontAwesomeIcon icon={linkedinIcon} size="3x" />
                </button>
                <button className="icon youtube" data-info="View YouTube Channel" onClick={() => window.location.href = 'https://www.youtube.com/@thecodernamedbridget6541'}>
                    <FontAwesomeIcon icon={youtubeIcon} size="3x" />
                </button>
                <button className="icon github" data-info="View Github Profile" onClick={() => window.location.href = 'https://github.com/TheCoderNamedBridget'}>
                    <FontAwesomeIcon icon={githubIcon} size="3x" />
                </button>
            </span>
        </div>
    )
}

export default Home;