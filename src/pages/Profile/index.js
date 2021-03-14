import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth';

export default function Profile() {
    const { signOut } = useContext(AuthContext);
    return (
        <View>
            <Text>Página Profile</Text>
            <Button title="Sair" onPress={() => signOut()} />
        </View>
    );
}