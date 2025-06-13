'use client';

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { FormEvent, useState } from "react";

export default function Page() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      setError('Falha no login. Verifique suas credenciais.');
    }
  };

  return (
    <main className="flex justify-center items-center">      
      <form onSubmit={handleSubmit} className="p-6 bg-indigo-50 max-w-96 rounded-3xl flex flex-col gap-4">
        <h2 className="page-title">Login</h2>
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
        <div className="flex flex-col gap-2">
          <label htmlFor="email">E-mail</label>
          <input 
            type="email" 
            required 
            name="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border h-10 rounded-xl focus:outline-none focus:border-indigo-300 px-4 py-2" 
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="senha">Senha</label>
          <input 
            type="password" 
            required 
            name="senha" 
            id="senha" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border h-10 rounded-xl focus:outline-none focus:border-indigo-300 px-4 py-2" 
          />
        </div>
        <div className="flex flex-row justify-between items-end">
          <Link href="/cadastro" className="my-3">Fazer cadastro</Link>
          <button 
            type="submit" 
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg"
          >
            Entrar
          </button>
        </div>
      </form>
    </main>
  );
}