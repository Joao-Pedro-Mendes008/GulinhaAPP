import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#FF6347',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 10,
                    justifyContent: 'space-between',
                    width: '100%',
                    marginLeft:50
                },
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'home') {
                        iconName = 'home-outline';
                    } else if (route.name === 'search') {
                        iconName = 'search-outline';
                    } else if (route.name === 'profile') {
                        iconName = 'person-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarShowLabel: false,
            })}
        >
            <Tabs.Screen name="home" />
            <Tabs.Screen name="search" />
            <Tabs.Screen name="profile" />
        </Tabs>
    );
}
