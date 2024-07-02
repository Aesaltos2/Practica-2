import iconCalculator from '../../images/icon-calculator.svg';

export const CardCalculator = () => {
    return (
        <div className="card calculator">
            <div className="title">Calculator</div>
            <p>Uses data from past projects to provide better delivery estimates</p>
            <figure>
                <img src={iconCalculator} alt="Calculator icon" />
            </figure>
        </div>
    );
}