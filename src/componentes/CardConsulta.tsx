import { Text, Avatar, VStack } from 'native-base'
import { Botao } from './Botao'

interface CardProps {
    nome: string;
    foto: string;
    especialidade: string;
    data?: string;
    FoiAtendido?: boolean;
    foiAgendado?: boolean;
}


export function CardConsulta({
    nome,
    foto,
    data,
    especialidade,
    foiAgendado,
    FoiAtendido} : CardProps) {

    return (
        <VStack w="100%" bg={FoiAtendido ? 'blue.100' : 'white'} p="5" borderRadius={'lg'} shadow={2}>
            <VStack flexDir={'row'}><Avatar source={{ uri: foto }} size={"xl"} mt="5" />
                <VStack pl={4} justifyContent={"center"}>
                    <Text fontSize={'md'}>{nome}</Text>
                    <Text>{especialidade}</Text>
                    <Text>{data}</Text>
                </VStack>
            </VStack>
            <Botao mt={4}>
                {foiAgendado ? 'Cancelar' : 'Agendar Consulta'}
            </Botao>

        </VStack>
    )
}