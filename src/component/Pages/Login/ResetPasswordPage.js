import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { BiLogInCircle } from "react-icons/bi";
import Spinner from '../SignUp/Spinner';

const BACKEND_DOMAIN = "http://localhost:8000";
const RESET_PASSWORD_URL = `${BACKEND_DOMAIN}/api/v1/auth/users/reset_password/`;

const ResetPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(RESET_PASSWORD_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            const data = response.ok && await response.text();
            const jsonData = data ? JSON.parse(data) : {};

            if (response.ok) {
                toast.success("Email de redefinição enviado. Por favor, verifique seu email.");
            } else {
                throw new Error(jsonData.detail || 'Falha ao enviar email de redefinição');
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container auth__container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h1 className="main__title">Redefinir Senha <BiLogInCircle /></h1>
                    {isLoading ? <Spinner /> : (
                        <form className="auth__form" onSubmit={handleSubmit}>
                            <input type="text"
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                                value={email}
                                required
                            />
                            <button className="btn btn-primary" type="submit">Redefinir Senha</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
