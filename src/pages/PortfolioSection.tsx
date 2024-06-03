import { useNavigate } from 'react-router-dom';

function PortfolioSection() {
    const navigate = useNavigate();

    return (
        <div className="section portfolio">
            <button className="back_button" onClick={() => navigate("..")}>Go Back</button>
            A portfolio
        </div>
    )
}

export default PortfolioSection;