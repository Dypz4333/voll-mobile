import { ScrollView, VStack, Text, Image, Box, Divider } from "native-base";
import Logo from "../assets/Logo.png"
import { Titulo } from "../componentes/Titulo";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";

export default function Principal() {
    return (
        <ScrollView flex={1}>
            <VStack w={"100%"} flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
                <Image source={Logo} alt='Login'></Image>
                <Titulo alignSelf={"center"} color={"blue.500"}>Boas-vindas!</Titulo>
                <Box w={"100%"} borderRadius="lg" p={3} mt={5} shadow={2} borderBottomRightRadius={"md"}>
                    <EntradaTexto placeholder='Digite a especialidade' />
                    <EntradaTexto placeholder='Digite a localização' />
                    <Botao mt={4}>Buscar</Botao>
                </Box>
                <Titulo color={"blue.500"} alignSelf={"center"}>Depoimentos</Titulo>
                <Box w={"100%"} borderRadius="lg" p={3} mt={5} shadow={1} borderBottomRightRadius={"md"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus leo ante,
                    a faucibus mauris sollicitudin ut. Ut in pulvinar libero. Donec non luctus mi,
                    ut sodales est. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Praesent odio justo, eleifend quis magna quis,
                    luctus lacinia enim. Etiam euismod interdum velit at eleifend.
                    Aenean convallis vehicula turpis ut lacinia.
                    <Titulo fontSize={"lg"}  alignSelf={"center"}>Julio, 99 Anos, Fortaleza-CE</Titulo>
                </Box>
                <Divider mt={5} />
                <Box w={"100%"} borderRadius="lg" p={3} mt={5} shadow={1} borderBottomRightRadius={"md"}>
                    Donec id mattis mi. Aliquam a tempor ipsum.
                    Quisque lobortis est sit amet erat tempus scelerisque.
                    Ut tristique quam ut sem fermentum viverra. Curabitur a nunc lacus.
                    Curabitur eu pellentesque nunc. Aliquam pretium auctor nisl,
                    sed consequat tellus dapibus at..
                    <Titulo fontSize={"lg"}  alignSelf={"center"}>Cleiton, 52 Anos, Votuporanga-SP</Titulo>
                </Box>
                <Divider mt={5} />
                <Box w={"100%"} borderRadius="lg" p={3} mt={5} shadow={1} borderBottomRightRadius={"md"}>
                    In lobortis ligula vel leo dignissim venenatis.
                    Duis a tincidunt ante.
                    Nullam gravida id dolor eget accumsan.
                    Proin sagittis ex sit amet lacus posuere auctor ultricies sed tortor.
                    Duis id auctor eros, ut sagittis nunc.
                    Morbi tincidunt libero vel risus suscipit vulputate. 
                    <Titulo fontSize={"lg"} alignSelf={"center"}>Julius, 20 Anos, Belo Horizonte-BH</Titulo>
                </Box>
            </VStack>
        </ScrollView>
    )
}