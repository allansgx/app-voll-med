import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from './Home'
import Appointments from './Appointments'
import Explore from './Explore'
import Profile from './Profile'

const Tab = createBottomTabNavigator()

const screenOptions = {
    tabBarStyle: {
        backgroundColor: '#002851'
    },
    tabBarActiveTintColor: '#339ccf',
    tabBarInactiveTintColor: '#fff'
}

const tabs = [
    {
        name: 'Início',
        component: Home,
        icon: 'home'
    },
    {
        name: 'Consultas',
        component: Appointments,
        icon: 'calendar'
    },
    {
        name: 'Explorar',
        component: Explore,
        icon: 'search'
    },
    {
        name: 'Perfil',
        component: Profile,
        icon: 'person'
    }
]

export default function Tabs() {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            {
                tabs.map((tab) => (
                    <Tab.Screen
                        key={tab.name}
                        name={tab.name}
                        component={tab.component}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name={tab.icon} color={color} size={size} />
                            )
                        }}
                    />
                ))
            }
        </Tab.Navigator>
    )
}