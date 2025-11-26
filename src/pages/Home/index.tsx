import { CountDown } from "../../components/CountDown";
import { MainForme } from "../../components/MainForme";
import { MainTemplate } from "../../components/templates/MainTemplate";
import { Container } from "../../components/Container";



export function Home() {
  return (
    <MainTemplate>
      <Container>
        < CountDown />
      </Container>

      <Container>
        <MainForme />
      </Container>

    </MainTemplate>
  );
}
