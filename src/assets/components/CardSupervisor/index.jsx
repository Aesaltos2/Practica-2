import iconSupervisor from '../../images/icon-supervisor.svg';

export const CardSupervisor = () => {
  return (
    <div className="card supervisor">
      <div className="title">Supervisor</div>
      <p>Monitors activity to identify project roadblocks</p>
      <figure>
        <img src={iconSupervisor} alt="Supervisor icon" />
      </figure>
    </div>
  );
}