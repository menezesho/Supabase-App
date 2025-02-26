import React, { useState } from 'react'
import { Button, Form, Header, LinkButton, Page, TextInput } from '@/components';
import { useAuth } from '@/hooks/auth/useAuth';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { handleSignIn, isLoadingAuth } = useAuth();
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

        <Button
          text='Acessar'
          isLoading={isLoadingAuth}
          onPress={() => handleSignIn({ email, password })}
        />

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