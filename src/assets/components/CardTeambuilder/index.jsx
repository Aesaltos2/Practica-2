import iconTeam from '../../images/icon-team-builder.svg';

export const CardTeambuilder = () => {
    return (
        <div className="card teambuilder">
            <div className="title">Team Builder</div>
            <p>Scans our talent network to create the optimal team for your project</p>
            <figure>
                <img src={iconTeam} alt="Team Builder icon" />
            </figure>
        </div>
    );
}