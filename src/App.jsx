import './App.css';
import { Contend } from '../src/assets/components/Contend'
import { Header } from '../src/assets/components/Header'
import { Main } from '../src/assets/components/Main'
import { Cards } from '../src/assets/components/Cards'
import { CardSupervisor } from './assets/components/CardSupervisor';
import { CardTeambuilder } from './assets/components/CardTeambuilder';
import { CardKarma } from './assets/components/CardKarma';
import { CardCalculator } from './assets/components/CardCalculator';


function App() {

  return (
    <>
      <Contend>
        <Header />
        <Main>
          <Cards>
            <CardSupervisor />
            <CardTeambuilder />
            <CardKarma />
            <CardCalculator />
          </Cards>
        </Main>
      </Contend>
    </>
  );
}

export default App;
