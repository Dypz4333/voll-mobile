import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'

import Principal from "./Principal";
import Consultas from "./Consultas";
import Perfil from "./Perfil";
import Explorar from "./Explorar";



export default function Tab() {

    const screenOptions = {
        tabBarStyle: {
            backgroundColor: "#002851"
        },
        tabBarActiveTintColor: "#339cff",
        tabBarInactiveTintColor: "#fff"
    }

    const Tab = createBottomTabNavigator()
    const tabs = [
        {
            name: "Inicio",
            component: Principal,
            icon: "home"
        },
        {
            name: "Explorar",
            component: Explorar,
            icon: "search"
        },
        {
            name: "Perfil",
            component: Perfil,
            icon: "person"
        },
        {
            name: "Consultas",
            component: Consultas,
            icon: "calendar"
        }
    ]
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            {tabs.map((tab) => (
                <Tab.Screen
                    key={tab.name}
                    name={tab.name}
                    component={tab.component}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name={tab.icon} color={color} size={size}></Ionicons>
                        )
                    }}/>
            ))}
        </Tab.Navigator>
    )
}