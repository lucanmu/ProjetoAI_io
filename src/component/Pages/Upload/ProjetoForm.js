import React, { useState } from 'react';
import axios from 'axios';

const ProjetoForm = ({ onClose }) => {
    // Estados para armazenar os dados do formulário
    const [titulo, setTitulo] = useState(''); // Estado para o título da ideia
    const [descricao, setDescricao] = useState(''); // Estado para a descrição da ideia
    const [segmento, setSegmento] = useState(''); // Estado para o segmento da ideia
    const [segmentoInputs, setSegmentoInputs] = useState({}); // Estado para os campos adicionais de acordo com o segmento selecionado
    const [tipoDocumento, setTipoDocumento] = useState(''); // Estado para o tipo de documento selecionado
    const [showActionResultPopup, setShowActionResultPopup] = useState(false); // Novo estado para controlar o popup do resultado da ação
    const [ideaPopupOpen, setIdeaPopupOpen] = useState(false); // Estado para controlar a abertura do popup de ideias
    const [resposta, setResposta] = useState(''); // Estado para armazenar a resposta do backend
     const copyTextToClipboard = () => {
        navigator.clipboard.writeText(resposta)
            .then(() => {
                console.log('Texto copiado para a área de transferência.');
                // Aqui você pode exibir uma mensagem de sucesso, se desejar
            })
            .catch(err => {
                console.error('Erro ao copiar o texto para a área de transferência:', err);
                // Aqui você pode lidar com erros ao copiar o texto, se desejar
            });
    };
    // Função para renderizar os campos adicionais com base no segmento selecionado
    const renderizarCamposAdicionais = (segmento) => {
        switch (segmento) {
            case 'Projeto Infraestrutura TI':
                return (
                <div>
                    <label htmlFor="campoInfra1">Objetivo:</label>
                    <input type="text" id="campoInfra1" value={segmentoInputs.Objetivo} onChange={(e) => setSegmentoInputs({...segmentoInputs, Objetivo: e.target.value})} />
                    <label htmlFor="campoInfra2">Escopo:</label>
                    <input type="text" id="campoInfra2" value={segmentoInputs.Escopo} onChange={(e) => setSegmentoInputs({...segmentoInputs, Escopo: e.target.value})} />
                    <label htmlFor="campoInfra3">Requisitos:</label>
                    <input type="text" id="campoInfra3" value={segmentoInputs.Requisitos} onChange={(e) => setSegmentoInputs({...segmentoInputs, Requisitos: e.target.value})} />
                    <label htmlFor="campoInfra4">Tecnologias:</label>
                    <input type="text" id="campoInfra4" value={segmentoInputs.Tecnologias} onChange={(e) => setSegmentoInputs({...segmentoInputs, Tecnologias: e.target.value})} />
                    <label htmlFor="campoInfra5">Recuperação de Desastres:</label>
                    <input type="text" id="campoInfra5" value={segmentoInputs.Recuperação_de_Desastres} onChange={(e) => setSegmentoInputs({...segmentoInputs, Recuperação_de_Desastres: e.target.value})} />
                    <label htmlFor="tipoDocumento">Qual documento deseja gerar?</label>
                    <select id="tipoDocumento" value={tipoDocumento} onChange={(e) => setTipoDocumento(e.target.value)}>
                        <option value="Documento de Escopo">Documento de Escopo</option>
                        <option value="Documento de Requerimento">Documento de Requerimento</option>
                        <option value="Plano de Implantação">Plano de Implantação</option>
                        <option value="Documento de Arquitetura">Documento de Arquitetura</option>
                        <option value="Plano de Segurança">Plano de Segurança</option>
                        <option value="Documento de Proposta Tecnica e Comercial Contendo:
                        Introdução:
                        Antecedentes:
                        Objetivo:
                        Escopo do Projeto:
                        Solução Proposta:
                        Serviços de Implementação:
                        Riscos:
                        Entregáveis:
                        Dependencias:
                        Fora do Escopo:
                        Custos e Orçamento:
                        Termos e Condições:
                        Premissas:
                        ">Documento de Proposta Tecnica e Comercial</option>
                        <option value="Plano de Backup e Recuperação de Desastres">Plano de Backup e Recuperação de Desastres</option>
                        <option value="Relatórios de Testes de Desempenho">Relatórios de Testes de Desempenho</option>
                        <option value="Documentação de Configuração">Documentação de Configuração</option>
                        <option value="Step-by-Step de implementação">Step-by-Step de implementação</option>
                    </select>
                </div>
            );
            case 'Projeto Software':
                return (
                    <div>
                        <label htmlFor="campoSoft1">Descrição do Problema ou Necessidade:</label>
                        <input type="text" id="campoSoft1" value={segmentoInputs.campo1} onChange={(e) => setSegmentoInputs({...segmentoInputs, Descrição_do_Problema_ou_Necessidade: e.target.value})} />
                        <label htmlFor="campoSoft2">Requisitos Funcionais Específicos:</label>
                        <input type="text" id="campoSoft2" value={segmentoInputs.campo2} onChange={(e) => setSegmentoInputs({...segmentoInputs, Requisitos_Funcionais_Específicos: e.target.value})} />
                        <label htmlFor="campoSoft3">Requisitos Não Funcionais:</label>
                        <input type="text" id="campoSoft3" value={segmentoInputs.campo3} onChange={(e) => setSegmentoInputs({...segmentoInputs, Requisitos_Não_Funcionais: e.target.value})} />
                        <label htmlFor="campoSoft4">Prioridades e Restrições:</label>
                        <input type="text" id="campoSoft4" value={segmentoInputs.campo4} onChange={(e) => setSegmentoInputs({...segmentoInputs, Prioridades_e_Restrições: e.target.value})} />
                        <label htmlFor="campoSoft5">Exemplos ou Casos de Uso:</label>
                        <input type="text" id="campoSoft5" value={segmentoInputs.campo5} onChange={(e) => setSegmentoInputs({...segmentoInputs, Exemplos_ou_Casos_de_Uso: e.target.value})} />
                        <label htmlFor="tipoDocumento">Qual documento deseja gerar?</label>
                        <select id="tipoDocumento" value={tipoDocumento} onChange={(e) => setTipoDocumento(e.target.value)}>
                            <option value="Documento de Requisitos">Documento de Requisitos</option>
                            <option value="Documento de Escopo">Documento de Escopo</option>
                            <option value="Documento de Requerimento">Documento de Requerimento</option>
                            <option value="Documento de Arquitetura de Software">Documento de Arquitetura de Software</option>
                            <option value="Documento de Proposta Tecnica e Comercial Contendo:
                            Introdução:
                            Antecedentes:
                            Objetivo:
                            Escopo do Projeto:
                            Solução Proposta:
                            Serviços de Implementação:
                            Riscos:
                            Entregáveis:
                            Dependencias:
                            Fora do Escopo:
                            Custos e Orçamento:
                            Termos e Condições:
                            Premissas:
                            ">Documento de Proposta Tecnica e Comercial</option>
                            <option value="Plano de Projeto">Plano de Projeto</option>
                            <option value="Plano de Testes">Plano de Testes</option>
                            <option value="Documentação do Usuário">Documentação do Usuário</option>
                            <option value="Documentação Técnica">Documentação Técnica</option>
                            <option value="Step-by-Step de implementação">Step-by-Step de implementação</option>
                        </select>
                    </div>
                );
            case 'Projeto Lei':
                return (
                    <div>
                        <label htmlFor="campoLei1">Objetivo do Projeto de Lei:</label>
                        <input type="text" id="campoLei1" value={segmentoInputs.campo1} onChange={(e) => setSegmentoInputs({...segmentoInputs, Objetivo_do_Projeto_de_Lei: e.target.value})} />
                        <label htmlFor="campoLei2">Justificativa:</label>
                        <input type="text" id="campoLei2" value={segmentoInputs.campo2} onChange={(e) => setSegmentoInputs({...segmentoInputs, Justificativa: e.target.value})} />
                        <label htmlFor="campoLei3">Disposições e Artigos:</label>
                        <input type="text" id="campoLei3" value={segmentoInputs.campo3} onChange={(e) => setSegmentoInputs({...segmentoInputs, Disposições_e_Artigos: e.target.value})} />
                        <label htmlFor="campoLei4">Impacto e Benefícios:</label>
                        <input type="text" id="campoLei4" value={segmentoInputs.campo4} onChange={(e) => setSegmentoInputs({...segmentoInputs, Impacto_e_Benefícios: e.target.value})} />
                        <label htmlFor="campoLei5">Consulta Pública:</label>
                        <input type="text" id="campoLei5" value={segmentoInputs.campo5} onChange={(e) => setSegmentoInputs({...segmentoInputs, Consulta_Pública: e.target.value})} />
                        <label htmlFor="tipoDocumento">Qual documento deseja gerar?</label>
                        <select id="tipoDocumento" value={tipoDocumento} onChange={(e) => setTipoDocumento(e.target.value)}>
                            <option value="Documento de Projeto de Lei">Documento de Projeto de Lei</option>
                            <option value="Justificativa do Projeto">Justificativa do Projeto</option>
                            <option value="Documento de Requerimento">Documento de Requerimento</option>
                            <option value="Documento de Proposta Tecnica e Comercial Contendo:
                            Introdução:
                            Antecedentes:
                            Objetivo:
                            Escopo do Projeto:
                            Solução Proposta:
                            Serviços de Implementação:
                            Riscos:
                            Entregáveis:
                            Dependencias:
                            Fora do Escopo:
                            Custos e Orçamento:
                            Termos e Condições:
                            Premissas:
                            ">Documento de Proposta Tecnica e Comercial</option>
                            <option value="Disposições e Artigos">Disposições e Artigos</option>
                            <option value="Impacto e Benefícios">Impacto e Benefícios</option>
                            <option value="Consulta Pública">Consulta Pública</option>
                        </select>
                    </div>
                );
            case 'Gerenciamento de Projeto':
                return (
                    <div>
                        <label htmlFor="campoDiv1">Objetivo do Projeto:</label>
                        <input type="text" id="campoDiv1" value={segmentoInputs.campo1} onChange={(e) => setSegmentoInputs({...segmentoInputs, Objetivo_do_Projeto: e.target.value})} />
                        <label htmlFor="campoDiv2">Escopo do Projeto:</label>
                        <input type="text" id="campoDiv2" value={segmentoInputs.campo2} onChange={(e) => setSegmentoInputs({...segmentoInputs, Escopo_do_Projeto: e.target.value})} />
                        <label htmlFor="campoDiv3">Requisitos do Projeto:</label>
                        <input type="text" id="campoDiv3" value={segmentoInputs.campo3} onChange={(e) => setSegmentoInputs({...segmentoInputs, Requisitos_do_Projeto: e.target.value})} />
                        <label htmlFor="campoDiv4">Plano de Ação:</label>
                        <input type="text" id="campoDiv4" value={segmentoInputs.campo4} onChange={(e) => setSegmentoInputs({...segmentoInputs, Plano_de_Ação: e.target.value})} />
                        <label htmlFor="campoDiv5">Avaliação de Riscos:</label>
                        <input type="text" id="campoDiv5" value={segmentoInputs.campo5} onChange={(e) => setSegmentoInputs({...segmentoInputs, Avaliação_de_Riscos: e.target.value})} />
                        <label htmlFor="tipoDocumento">Qual documento deseja gerar?</label>
                        <select id="tipoDocumento" value={tipoDocumento} onChange={(e) => setTipoDocumento(e.target.value)}>
                            <option value="Termo de Abertura do Projeto">Termo de Abertura do Projeto</option>
                            <option value="Plano de Projeto">Plano de Projeto</option>
                            <option value="Documento de Requerimento">Documento de Requerimento</option>
                            <option value="Estrutura Analítica do Projeto">Estrutura Analítica do Projeto</option>
                            <option value="Cronograma do Projeto">Cronograma do Projeto</option>
                            <option value="Orçamento do Projeto">Orçamento do Projeto</option>
                            <option value="Matriz de Responsabilidade">Matriz de Responsabilidade</option>
                            <option value="Plano de Gerenciamento de Riscos">Plano de Gerenciamento de Riscos</option>
                            <option value="Documento de Proposta Tecnica e Comercial Contendo:
                            Introdução:
                            Antecedentes:
                            Objetivo:
                            Escopo do Projeto:
                            Solução Proposta:
                            Serviços de Implementação:
                            Riscos:
                            Entregáveis:
                            Dependencias:
                            Fora do Escopo:
                            Custos e Orçamento:
                            Termos e Condições:
                            Premissas:
                            ">Documento de Proposta Tecnica e Comercial</option>
                            <option value="Relatórios de Status do Projeto">Relatórios de Status do Projeto</option>
                            <option value="Plano de Encerramento do Projeto">Plano de Encerramento do Projeto</option>
                        </select>
                    </div>
                );
            default:
                return null;
        }
    };
    
    // Função para lidar com o envio do formulário
    const handleSubmitIdea = () => {
        // Formatando a mensagem de acordo com a estrutura desejada
        const message = `
            Esse projeto é exclusivamente para "${segmento}";
            com base nas informações imputadas: 
            Título: "${titulo}", 
            Descrição: "${descricao}", 
            Segmento Inputs: "${JSON.stringify(segmentoInputs)}".
            Preciso gerar a documentoção de"${tipoDocumento}. Por favor, me de um modelo baseado no que foi informado. Fornecer insights, sugestões e ideias quando aplicavel.
        `;

        // Enviar a mensagem para o backend
        enviarMensagemParaBackend(message);

        // Resetar os campos após o envio
        setTitulo('');
        setDescricao('');
        setSegmento('');
        setTipoDocumento('');
        setSegmentoInputs({});
        setIdeaPopupOpen(false); // Fechar o popup após o envio
    };

    // Função para lidar com o envio da mensagem ao backend
    

    const enviarMensagemParaBackend = async (mensagem) => {
        try {
            const result_projeto_form = await axios.post('http://localhost:8000/projeto-form/', { mensagem });
            console.log('Resposta do backend:', result_projeto_form.data);
            setResposta(result_projeto_form.data.resposta);
            setShowActionResultPopup(true); // Abrir o popup do resultado da ação
        } catch (error) {
            console.error('Erro ao enviar a mensagem para o backend:', error);
            // Tratar erros aqui, se necessário
        }
    };





    const formatText = (text) => {
        return text.split('\n').map((line, index) => {
            if (line.startsWith('**') && line.endsWith('**')) {
                return <strong key={index}>{line.substring(2, line.length - 2)}</strong>;
            } else {
                return <p key={index} style={{ textAlign: 'left' }}>{line}</p>;
            }
        });
    };
















    return (
        <div className="row">
            <div className="col-md-20 offset-md-0">
                <div className="sc-login-box sc-register-box">
                    <div className="login-form register-form">
                        <h4 className="text-left">Novo Projeto:</h4>
                        <div className="sc-heading-area text-left sc-mb-60">
                            <h6 className="description sc-mb-25 sc-sm-mb-15">Por favor, selecione um segmento e preencha os campos abaixo com suas ideias, informações ou necessidades atuais. Seja o mais específico possível para receber as melhores recomendações do nosso sistema. Após preencher, selecione uma ação no menu suspenso para receber insights personalizados.</h6>
                        </div>
                        <div>
                            <label htmlFor="segmento">Segmento:</label>
                            <select id="segmento" value={segmento} onChange={(e) => setSegmento(e.target.value)}>
                                <option value="">Selecionar</option>
                                <option value="Gerenciamento de Projeto">Gerenciamento de Projeto</option>
                                <option value="Projeto Infraestrutura TI">Projeto Infraestrutura TI</option>
                                <option value="Projeto Software">Projeto Software</option>
                                <option value="Projeto Lei">Projeto Lei</option>
                                
                            </select>
                        </div>
                        {showActionResultPopup && (
                            // Popup para exibir o resultado da ação
                            <div className="popup">
                                <div className="popup-content">
                                <span className="close" onClick={() => setIdeaPopupOpen(false)}>&times;</span>   
                                {resposta && (
                                        <div>
                                            <h4>Modelo de Documento:</h4>
                                            <div className="projeto-form">{formatText(resposta)}</div>
                                            <button onClick={copyTextToClipboard}>Copiar Texto</button>

                                        </div>
                                    )}
                                   </div>
                            </div>
                        )}
                        {segmento && (
                            <div className="row">
                                <div className="col-lg-6">
                                    <label className="login-label">Título:</label>
                                    <input className="from-control" type="text" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} disabled={!segmento} />
                                </div>
                                <div>
                                    <label htmlFor="descricao">Descrição:</label>
                                    <textarea id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} disabled={!segmento} />
                                </div>
                                {renderizarCamposAdicionais(segmento)}
                                <div className="register-account d-flex align-items-center justify-content-between">
                                    <button onClick={handleSubmitIdea}>Enviar</button>
                                    
                                </div>

                                
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjetoForm;
