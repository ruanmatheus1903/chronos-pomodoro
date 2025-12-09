import { CountDown } from "../../components/CountDown";
import { MainForme } from "../../components/MainForme";
import { MainTemplate } from "../../components/templates/MainTemplate";
import { Container } from "../../components/Container";
import type { TaskStateModel } from "../../models/TaskStateModel";

type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props:HomeProps) {
console.log(props);
 
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
