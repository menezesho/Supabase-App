import React, { useState } from 'react'
import { router } from 'expo-router';
import { Button, Form, Header, Page, TextInput } from '../../../components';
import { useAuth } from '../../../hooks/auth/useAuth';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isLoadingAuth, handleSignUp } = useAuth();

  return (
    <Page>
      <Header title='Criar uma conta' onPressGoBack={router.back} />

      <Form>
        <TextInput
          label='Nome'
          placeholder='Informe seu nome completo'
          value={name}
          onChangeText={setName}
        />
        <TextInput
          label='E-mail'
          placeholder='Informe seu e-mail'
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          label='Senha'
          placeholder='Informe sua senha'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button
          text='Cadastrar'
          onPress={() => handleSignUp({ email, password })}
        />
      </Form>
    </Page>
  );
};