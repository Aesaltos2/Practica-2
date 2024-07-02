import iconKarma from '../../images/icon-karma.svg';
export const CardKarma = () => {
    return (
        <div className="card karma">
            <div className="title">Karma</div>
            <p>Regularly evaluates our talent to ensure quality</p>
            <figure>
                <img src={iconKarma} alt="Karma icon" />
            </figure>
        </div>
    );
}