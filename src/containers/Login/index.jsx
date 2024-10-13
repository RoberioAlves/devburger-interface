import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Logo from '../../assets/Logo 1.png';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  ContainerLink,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
  Link,
} from './style';

import { Button } from '../../components/Button';

export function Login() {
  const navigate = useNavigate();
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

  const onSubmit = async (data) => {
    const {data: {token},
  } = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando seus dados',
        success: {
          render() {
            setTimeout(() => {
              navigate('/');
            }, 2000);
            return `Seja Bem-Vindo(a)! 👌`;
          },
        },
        error: 'Email ou senha Incorretos 🤯',
      },
    );

    localStorage.setItem('token', token)
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
            <ContainerLink>
              <Link>Esquecir minha senha</Link>
            </ContainerLink>
          </InputContainer>

          <Button type="submit">Entrar</Button>
        </Form>
        <ContainerLink>
          Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
        </ContainerLink>
      </RightContainer>
    </Container>
  );
}
