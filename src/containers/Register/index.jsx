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
  Link
} from './style';

import { Button } from '../../components/Button';

export function Register() {
  const navigate = useNavigate()
  const schema = yup
    .object({
      name: yup.string().required('O nome é obrigatório'),
      email: yup
        .string()
        .email('Digite um email válido!')
        .required('O email é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter no minimo 6 caractere')
        .required('Digite a senha correta.'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senha devem ser iguais')
        .required('Confirme sua senha'),
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
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        setTimeout(() =>{
          navigate('/login')
        }, 2000);
        toast.success('Conta criada com sucesso');
      } else if (status === 400) {
        toast.error('Email já existe! Tente novamente');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error(' 😒 Falha no Sistema! Tente novamente');
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>Criar Conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Name</label>
            <input type="text" {...register('name')} />
            <p>{errors?.name?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Confirm Senha</label>
            <input type="password" {...register('confirmPassword')} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button type="submit">Entrar</Button>
        </Form>
        <ContainerLink><Link to='/login'>Já possui conta? Clique aqui.</Link></ContainerLink>
      </RightContainer>
    </Container>
  );
}
