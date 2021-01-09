import './styles.css';
import { ReactComponent as Logo } from './logo.svg';
import { Link } from 'react-router-dom';

function StepsHeader() {
    return (
       <header className="orders-steps-container">
           <div className="orders-steps-content">
                <h1 className="steps-title">
                    SIGA AS <br />ETAPAS
                </h1>
           </div>
       </header>
    )
}

export default StepsHeader;