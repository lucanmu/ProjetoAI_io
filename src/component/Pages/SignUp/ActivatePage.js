import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ActivatePage = () => {
    const { uid, token } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (uid && token) {
            activateAccount(uid, token);
        }
    }, [uid, token]);

    const activateAccount = async (uid, token) => {
        setIsLoading(true);
        const response = await fetch('http://localhost:8000/api/v1/auth/users/activation/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ uid, token })
        });

        if (response.ok) {
            setMessage('Sua conta foi ativada com sucesso! Você pode agora fazer login.');
        } else {
            const data = await response.json();
            setMessage(data?.detail || 'Falha ao ativar conta. Por favor, verifique o link ou entre em contato com o suporte.');
        }
        setIsLoading(false);
    };

    return (
        <div className="container auth__container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h1>Ativação de Conta</h1>
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

export default ActivatePage;
