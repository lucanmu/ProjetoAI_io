import React from 'react';
import { toast } from 'react-toastify';

const BlogForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        event.target.reset()
        toast("Comment Posted Successfully")
    }

    return (
        <>
            <div className="details-form-box">
                <h4 className="title">Envie Seu Comentário</h4>
                <p>Seu endereço de e-mail não será publicado. Campos obrigatórios estão marcados com *</p>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form">
                                <label className="sc-mb-10">Nome*</label>
                                <input type="text" id="name" placeholder="Digite Seu Nome" autoComplete='off' required />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form">
                                <label className="sc-mb-10">E-mail*</label>
                                <input type="email" id="address" placeholder="Digite Seu E-mail" autoComplete='off' required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form">
                                <label className="sc-mb-10">Telefone*</label>
                                <input type="number" id="phone" placeholder="Digite Seu Número de Telefone" autoComplete='off' required />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form">
                                <label className="sc-mb-10">Assunto</label>
                                <input type="text" id="subject" placeholder="Digite o Assunto" autoComplete='off' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form sc-mb-5">
                            <label className="sc-mb-10">Mensagem*</label>
                            <textarea autoComplete='off' placeholder="Digite Seu Comentário" required></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="submit-button sc-mb-10">
                            <input className=" " type="submit" value="Enviar Agora" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};


export default BlogForm;