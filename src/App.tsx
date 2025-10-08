// PascalCase
// App
// headerHeading
//ExemploDeComponente

import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Conteiner';
import { Heading } from './components/Heading';

export function App() {
  return (
    <>
   <Container>
    <Heading> LOGO</Heading>
       </Container>

    <Container>
<Heading> MENU </Heading>
       </Container>


     
    </>
  );
}
