import Aluno from "./Aluno.jsx";
import Curso from "./Curso.jsx";
import Usuario from "./Usuario";
export default function App(){
  return(
    <div>
    <h1>Aula2-Props em React</h1>
    <Curso nome="react"/>
    <Aluno nome="Roni" email="r@gmail.com"cpf="123"/>
    <Usuario/>
    </div>
  )
}