import React, { useState } from 'react'
import { Button, Form, Header, LinkButton, Page, TextInput } from './components';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = () => {
    console.log('Entrar>>>', email, password);
  };

  return (
    <Page>
      <Header title='O futuro da programação' />

      <Form>
        <TextInput
          label='E-mail'
          placeholder='Informe seu e-mail'
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          label='Senha'
          placeholder='Informe sua senha'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button text='Acessar' onPress={handleSignin} />

        <LinkButton
          title='Ainda não possui uma conta?'
          subtitle='Cadastre-se'
          href='/(auth)/signup/page'
          style={{ marginBottom: 20 }}
        />
      </Form>
    </Page>
  );
};