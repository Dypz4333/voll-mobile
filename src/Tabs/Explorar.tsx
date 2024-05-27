import { VStack, ScrollView, Box } from "native-base";
import { EntradaTexto } from "../componentes/EntradaTexto";
import Logo from '../assets/Logo.png'
import { Botao } from "../componentes/Botao";
import { Titulo } from "../componentes/Titulo";
import { CardConsulta } from "../componentes/CardConsulta";

export default function Explorar() {
    return (
        <ScrollView flex={1} bgColor={"white"}>
            <VStack w={"100%"} flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
                <Box w={"100%"} borderRadius="lg" p={3} mt={5} shadow={1} borderBottomRightRadius={"md"}>
                    <EntradaTexto placeholder='Digite a especialidade' />
                    <EntradaTexto placeholder='Digite a localização' />
                    <Botao>Buscar</Botao>
                </Box>
                <Titulo alignSelf={"center"} color={"blue.500"}>Resultado da busca</Titulo>
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                    <VStack mb={2} w={"100%"} flex={1} alignItems="flex-start" bgColor="white" key={index}>
                        <CardConsulta nome="Dr.House" especialidade="Pneumologista" foto="https://avatars.githubusercontent.com/u/143118004?v=4" />
                    </VStack>
                ))}
            </VStack>
        </ScrollView>
    )
}