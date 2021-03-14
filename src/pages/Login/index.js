import React, { useState, useContext } from 'react';
import { Text, Alert, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../contexts/auth';

import {
    Button,
    ButtonText,
    Container,
    Input,
    SignUpButton,
    SignUpText,
    Title
} from './styles';

export default function Login() {

    const { signUp, loadingAuth, signIn } = useContext(AuthContext);

    const [login, setLogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function toogleLogin() {
        setLogin(!login);
        setName('')
        setEmail('');
        setPassword('');
    }

    function handleLogin() {
        if (email === '' || password === '') {
            Alert.alert('Atenção', 'Preencha todos os campos');
            return;
        }
        signIn(email, password);
    }

    function handleSignUp() {
        if (name === '' || email === '' || password === '') {
            Alert.alert('Atenção', 'Preencha todos os campos');
            return;
        }
        signUp(email, password, name);
    }

    return (
        <>
            {
                login ? (
                    <Container>
                        <Title>
                            Dev
                            <Text style={{ color: '#e52246' }}>Post</Text>
                        </Title>
                        <Input placeholder="email@email.com" value={email} onChangeText={(txt) => setEmail(txt)} />
                        <Input placeholder="**********" secureTextEntry={true} value={password} onChangeText={(txt) => setPassword(txt)} />
                        <Button onPress={() => handleLogin()}>
                            {
                                loadingAuth ? (
                                    <ActivityIndicator size={20} color="#fff" />
                                ) : (
                                    <ButtonText>Acessar</ButtonText>
                                )
                            }
                        </Button>
                        <SignUpButton onPress={() => toogleLogin()}>
                            <SignUpText>Criar uma conta</SignUpText>
                        </SignUpButton>
                    </Container>
                ) : (
                    <Container>
                        <Title>
                            Dev
                                <Text style={{ color: '#e52246' }}>
                                Post
                                </Text>
                        </Title>
                        <Input placeholder="Nome completo" value={name} onChangeText={(txt) => setName(txt)} />
                        <Input placeholder="email@email.com" value={email} onChangeText={(txt) => setEmail(txt)} />
                        <Input placeholder="**********" secureTextEntry={true} value={password} onChangeText={(txt) => setPassword(txt)} />
                        <Button onPress={() => handleSignUp()}>
                            {
                                loadingAuth ? (
                                    <ActivityIndicator size={20} color="#fff" />
                                ) : (
                                    <ButtonText>Cadastrar</ButtonText>
                                )
                            }
                        </Button>
                        <SignUpButton onPress={() => toogleLogin()}>
                            <SignUpText>Já tenho uma conta.</SignUpText>
                        </SignUpButton>
                    </Container>
                )
            }
        </>

    );
}