import { VStack, Text, ScrollView, Divider, Avatar } from "native-base";
import { Titulo } from "../componentes/Titulo";

export default function Perfil() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center">
                <Titulo color={"blue.500"}>Meu perfil</Titulo>
                <Avatar source={{uri:"https://avatars.githubusercontent.com/u/143118004?v=4"}} size={175} mt="5"/>
                <Titulo color={"blue.500"}>Informações pessoais</Titulo>
                <Titulo>Matheus Roque</Titulo>
                <Titulo mt={2}>07/09/2005</Titulo>
                <Titulo mt={2}>Votuporanga / SP</Titulo>
                <Divider mt="5"/>
                <Titulo color={"blue.500"}>Histórico Médico</Titulo>
                <Text fontSize={20}>Bronquite</Text>
                <Text fontSize={20}>Asma</Text>
            </VStack>
        </ScrollView>
    )
}