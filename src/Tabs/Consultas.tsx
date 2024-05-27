import { VStack, Text, Avatar } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";
import { Titulo } from "../componentes/Titulo";

export default function Consultas() {
    return (
        <VStack p={5}>
            <Titulo color={"blue.500"} alignSelf={"center"}>Minhas consultas</Titulo>
            <CardConsulta nome="Dr. House" especialidade="Pneumologista" foto="https://avatars.githubusercontent.com/u/143118004?v=4" data="20/06/2029" foiAgendado FoiAtendido/>
        </VStack>
    )
}