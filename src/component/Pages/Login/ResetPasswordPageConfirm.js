import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPasswordConfirmPage = () => {
    const { uid, token } = useParams();
    const [newPassword, setNewPassword] = useState('');
    const [reNewPassword, setReNewPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleResetPassword = async () => {
        setIsLoading(true);
        const response = await fetch('http://localhost:8000/api/v1/auth/users/reset_password_confirm/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uid,
                token,
                new_password: newPassword,
                re_new_password: reNewPassword
            })
        });

        if (response.ok) {
            setMessage('Sua senha foi redefinida com sucesso. Você pode agora fazer login com sua nova senha.');
        } else {
            const data = await response.json();
            setMessage(data?.detail || 'Falha ao redefinir senha. Por favor, verifique o link ou entre em contato com o suporte.');
        }
        setIsLoading(false);
    };

    return (
        <div className="container auth__container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h1>Confirmação de Redefinição de Senha</h1>
                    <div>
                        <label>Nova Senha:
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>Confirmar Nova Senha:
                            <input
                                type="password"
                                value={reNewPassword}
                                onChange={(e) => setReNewPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <button onClick={handleResetPassword} disabled={isLoading} className="btn btn-primary">
                        Redefinir Senha
                    </button>
                    {isLoading ? (
                        <p>Carregando...</p>
                    ) : (
                        <p>{message}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordConfirmPage;
