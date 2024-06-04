import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

const BACKEND_DOMAIN = "http://localhost:8000";

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        re_password: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.re_password) {
            toast.error("As senhas não coincidem");
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch(`${BACKEND_DOMAIN}/api/v1/auth/users/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`Erro HTTP! status: ${response.status}`);
            }

            const data = await response.json();
            toast.success("Um email de ativação foi enviado. Por favor, verifique seu email.");
            setFormData({
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                re_password: "",
            });
        } catch (error) {
            toast.error("Falha no registro. " + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container auth__container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <form onSubmit={handleSubmit}>
                        <div className="sc-login-box sc-register-box">
                            <h4 className="text-center">Cadastre-se de Forma Simples</h4>
                            <div className="row">
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="first_name" className="form-label">Nome</label>
                                    <input type="text" className="form-control" id="first_name" name="first_name" placeholder="Digite seu nome" onChange={handleChange} value={formData.first_name} required />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="last_name" className="form-label">Sobrenome</label>
                                    <input type="text" className="form-control" id="last_name" name="last_name" placeholder="Digite seu sobrenome" onChange={handleChange} value={formData.last_name} required />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Digite seu email" onChange={handleChange} value={formData.email} required />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="password" className="form-label">Senha</label>
                                    <input type="password" className="form-control" id="password" name="password" placeholder="Digite uma senha" onChange={handleChange} value={formData.password} required />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="re_password" className="form-label">Confirme a Senha</label>
                                    <input type="password" className="form-control" id="re_password" name="re_password" placeholder="Redigite sua senha" onChange={handleChange} value={formData.re_password} required />
                                </div>
                            </div>
                            <div className="register-account d-flex align-items-center justify-content-between">
                                <input type="submit" className="btn btn-primary" value="Criar Conta" />
                                <div>Já Possuo Uma Conta<Link to="/login"> Login</Link></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {isLoading && <Spinner />}
        </div>
    );
};

export default SignUpForm;
