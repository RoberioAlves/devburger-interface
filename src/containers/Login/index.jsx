import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Logo from '../../assets/Logo 1.png';
import { api } from '../../services/api';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Title,
} from './style';

import { Button } from '../../components/Button';

export function Login() {
  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um email válido!')
        .required('O email é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter no minimo 6 caractere')
        .required('Digite a senha correta.'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit = async data => {
    const response = await api.post('/session', {
      email: data.email,
      password: data.password,
    });

    console.log(response);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span> <br />
          Acesse com seu <span>Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
            <Link>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Esquecir minha senha
              </a>
            </Link>
          </InputContainer>

          <Button type="submit">Entrar</Button>
        </Form>
        <Link>
          Não possui conta? <a href="">Clique aqui.</a>
        </Link>
      </RightContainer>
    </Container>
  );
}
