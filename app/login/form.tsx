'use client';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import AuthForm from '@/components/AuthForm';
import { useState } from 'react';

interface Data {
  email?: string;
  password?: string;
}

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState('');
  const handleFormSubmit = async (data: Data) => {
    const response = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (!response?.error) {
      router.push('/');
      router.refresh();
    } else {
      response.status === 401
        ? setError('Your email or password is incorrect')
        : null;
    }
  };

  return (
    <>
      {error && <p>{error}</p>}
      <AuthForm
        title="Login here"
        onSubmit={handleFormSubmit}
        buttonText="Login"
        linkDescription="New here?"
        linkText="Create an account"
        linkHref="/register"
        isFullForm={false}
      />
    </>
  );
}