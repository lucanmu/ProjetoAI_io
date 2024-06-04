import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { Fade } from 'react-reveal';
import axios from 'axios';
import { HashLink as Link } from 'react-router-hash-link';
import ProjetoForm from './ProjetoForm';



const UploadAudioForm = () => {
    const [file, setFile] = useState(null);
    const [consent, setConsent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [transcriptionResult, setTranscriptionResult] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [actionSelected, setActionSelected] = useState('');
    const [selectedAction, setSelectedAction] = useState('');
    const [showActionResultPopup, setShowActionResultPopup] = useState(false); // Novo estado para controlar o popup do resultado da ação
    const [ideaPopupOpen, setIdeaPopupOpen] = useState(false); // Estado para controlar a abertura do popup de ideias
    const [recordPopupOpen, setRecordPopupOpen] = useState(false); // Estado para controlar a abertura do popup de gravação de áudio
    const [chatPopupOpen, setChatPopupOpen] = useState(false); // Estado para controlar a abertura do popup de chat
    const fileInputRef = useRef(null);
     


    const handleFileInputChange = (event) => {
        if (event.target.files.length === 0) {
            setFile(null);
        } else {
            setFile(event.target.files[0]);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) {
            toast.error("Por favor, selecione um arquivo para enviar.");
            return;
        }
        if (!consent) {
            toast.error("Você deve consentir com os termos de uso antes de enviar.");
            return;
        }
        setLoading(true);

        const formData = new FormData();
        formData.append('audio_file', file);

        try {
            const response = await axios.post('http://localhost:8000/upload-audio/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setTranscriptionResult(response.data.transcription);
            setShowPopup(true);
        } catch (error) {
            console.error('Erro ao transcrever o áudio:', error);
            toast.error("Erro ao transcrever o áudio. Por favor, tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    const handleActionSelect = (event) => {
        setActionSelected(event.target.value);
    };

    const handleActionSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/process-action/', {
                action: actionSelected,
                transcription: transcriptionResult
            });
            setSelectedAction(response.data.result);
            setShowActionResultPopup(true); // Abrir o popup do resultado da ação
        } catch (error) {
            console.error('Erro ao processar ação:', error);
            toast.error("Erro ao processar ação. Por favor, tente novamente.");
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
        <section className="sc-service-section-area sc-pt-30 sc-md-pt-90 sc-pb-50 sc-md-pb-50 sc-pb-30">
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="sc-heading-area text-center sc-mb-60">
                        <h4 ClassName="description sc-mb-25 sc-sm-mb-15">Comece seu projeto, crie documentação e textos, receba insights e aumente sua produtividade. </h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <Fade bottom delay={1000}>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="sc-service-content-box text-center sc-md-mb-30">
                            <div className="service-icon">
                            {/*https://www.svgrepo.com/collection/solar-broken-line-icons/*/}
                            <svg viewBox="0 0 24 24" onClick={() => setIdeaPopupOpen(true)} width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 9C7 9.55228 6.55228 10 6 10C5.44772 10 5 9.55228 5 9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9Z" fill="#405925"></path> <path d="M7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12Z" fill="#405925"></path> <path d="M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z" fill="#405925"></path> <path d="M10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9Z" fill="#405925"></path> <path d="M13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z" fill="#405925"></path> <path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="#405925"></path> <path d="M16 9C16 9.55228 15.5523 10 15 10C14.4477 10 14 9.55228 14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9Z" fill="#405925"></path> <path d="M16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12Z" fill="#405925"></path> <path d="M19 9C19 9.55228 18.5523 10 18 10C17.4477 10 17 9.55228 17 9C17 8.44772 17.4477 8 18 8C18.5523 8 19 8.44772 19 9Z" fill="#405925"></path> <path d="M19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12Z" fill="#405925"></path> <path d="M16 5C18.8284 5 20.2426 5 21.1213 5.87868C22 6.75736 22 8.17157 22 11V13C22 15.8284 22 17.2426 21.1213 18.1213C20.2426 19 18.8284 19 16 19H8C5.17157 19 3.75736 19 2.87868 18.1213C2 17.2426 2 15.8284 2 13V11C2 8.17157 2 6.75736 2.87868 5.87868C3.75736 5 5.17157 5 8 5H12" stroke="#405925" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 16H17" stroke="#405925" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                    </div>
                                    <br></br>
                                    <h6 className="sc-mb-0"><Link onClick={() => setIdeaPopupOpen(true)}>Digite Sua Necessidade<br></br>Receba a Solução</Link></h6>
                                </div>
                        </div>
                </Fade> 
                <Fade bottom delay={1000}>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="sc-service-content-box text-center sc-md-mb-30">
                            <div className="service-icon">
                            <svg viewBox="0 0 24 24"  onClick={() => setShowPopup(true)} width="60" height="60"  fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.5606 12.6995L12.2076 13.3612L12.2076 13.3612L12.5606 12.6995ZM13.4429 13.17L13.7958 12.5083V12.5083L13.4429 13.17ZM14.4394 11.3015L14.7924 10.6398L14.7924 10.6398L14.4394 11.3015ZM13.5571 10.8309L13.91 10.1692L13.91 10.1692L13.5571 10.8309ZM12.0018 11.6066L12.7505 11.652V11.652L12.0018 11.6066ZM13.4163 10.7579L13.1041 11.4398L13.1041 11.4398L13.4163 10.7579ZM14.9995 12.1687L15.7491 12.1449V12.1449L14.9995 12.1687ZM14.4984 11.3335L14.8722 10.6833L14.8722 10.6833L14.4984 11.3335ZM13.5837 13.2431L13.8959 12.5611L13.8959 12.5611L13.5837 13.2431ZM14.9982 12.3944L14.2495 12.349V12.349L14.9982 12.3944ZM12.5016 12.6674L12.1278 13.3177L12.1278 13.3177L12.5016 12.6674ZM12.0005 11.8323L11.2509 11.8561V11.8561L12.0005 11.8323ZM11.25 16.5005C11.25 16.9147 10.9142 17.2505 10.5 17.2505V18.7505C11.7426 18.7505 12.75 17.7431 12.75 16.5005H11.25ZM10.5 17.2505C10.0858 17.2505 9.75 16.9147 9.75 16.5005H8.25C8.25 17.7431 9.25736 18.7505 10.5 18.7505V17.2505ZM9.75 16.5005C9.75 16.0863 10.0858 15.7505 10.5 15.7505V14.2505C9.25736 14.2505 8.25 15.2578 8.25 16.5005H9.75ZM10.5 15.7505C10.9142 15.7505 11.25 16.0863 11.25 16.5005H12.75C12.75 15.2578 11.7426 14.2505 10.5 14.2505V15.7505ZM12.75 16.5005V12.0005H11.25V16.5005H12.75ZM12.2076 13.3612L13.09 13.8318L13.7958 12.5083L12.9135 12.0377L12.2076 13.3612ZM14.7924 10.6398L13.91 10.1692L13.2042 11.4927L14.0865 11.9633L14.7924 10.6398ZM12.75 11.7652C12.75 11.721 12.75 11.6929 12.7502 11.672C12.7504 11.6505 12.7507 11.6476 12.7505 11.652L11.2532 11.5612C11.2496 11.6203 11.25 11.6931 11.25 11.7652H12.75ZM13.91 10.1692C13.8464 10.1352 13.7824 10.1007 13.7285 10.076L13.1041 11.4398C13.1 11.438 13.1027 11.4391 13.1218 11.449C13.1404 11.4587 13.1652 11.4719 13.2042 11.4927L13.91 10.1692ZM12.7505 11.652C12.7611 11.4767 12.9444 11.3667 13.1041 11.4398L13.7285 10.076C12.6108 9.56427 11.3277 10.3341 11.2532 11.5612L12.7505 11.652ZM15.75 12.2358C15.75 12.2067 15.7501 12.1755 15.7491 12.1449L14.2499 12.1925C14.2498 12.1917 14.2499 12.1929 14.25 12.1999C14.25 12.2077 14.25 12.2179 14.25 12.2358H15.75ZM14.0865 11.9633C14.1023 11.9717 14.1113 11.9765 14.1181 11.9802C14.1243 11.9835 14.1253 11.9842 14.1246 11.9838L14.8722 10.6833C14.8456 10.668 14.8181 10.6535 14.7924 10.6398L14.0865 11.9633ZM15.7491 12.1449C15.7298 11.5386 15.398 10.9856 14.8722 10.6833L14.1246 11.9838C14.1997 12.0269 14.2471 12.1059 14.2499 12.1925L15.7491 12.1449ZM13.09 13.8318C13.1536 13.8657 13.2176 13.9003 13.2715 13.925L13.8959 12.5611C13.9 12.563 13.8973 12.5619 13.8782 12.552C13.8596 12.5423 13.8348 12.5291 13.7958 12.5083L13.09 13.8318ZM14.25 12.2358C14.25 12.28 14.25 12.308 14.2498 12.329C14.2496 12.3505 14.2493 12.3534 14.2495 12.349L15.7468 12.4398C15.7504 12.3807 15.75 12.3079 15.75 12.2358H14.25ZM13.2715 13.925C14.3892 14.4367 15.6723 13.6668 15.7468 12.4398L14.2495 12.349C14.2389 12.5243 14.0556 12.6342 13.8959 12.5611L13.2715 13.925ZM12.9135 12.0377C12.8977 12.0293 12.8887 12.0245 12.8819 12.0208C12.8757 12.0174 12.8746 12.0168 12.8754 12.0172L12.1278 13.3177C12.1544 13.3329 12.1819 13.3475 12.2076 13.3612L12.9135 12.0377ZM11.25 11.7652C11.25 11.7943 11.2499 11.8255 11.2509 11.8561L12.7501 11.8084C12.7502 11.8093 12.7501 11.808 12.75 11.8011C12.75 11.7933 12.75 11.7831 12.75 11.7652H11.25ZM12.8754 12.0172C12.8003 11.974 12.7529 11.895 12.7501 11.8084L11.2509 11.8561C11.2702 12.4623 11.602 13.0154 12.1278 13.3177L12.8754 12.0172Z" fill="#405925"></path> <path d="M19.5617 7C19.7904 5.69523 18.7863 4.5 17.4617 4.5H6.53788C5.21323 4.5 4.20922 5.69523 4.43784 7" stroke="#405925" stroke-width="1.5"></path> <path d="M17.4999 4.5C17.5283 4.24092 17.5425 4.11135 17.5427 4.00435C17.545 2.98072 16.7739 2.12064 15.7561 2.01142C15.6497 2 15.5194 2 15.2588 2H8.74099C8.48035 2 8.35002 2 8.24362 2.01142C7.22584 2.12064 6.45481 2.98072 6.45704 4.00434C6.45727 4.11135 6.47146 4.2409 6.49983 4.5" stroke="#405925" stroke-width="1.5"></path> <path d="M21.1935 16.793C20.8437 19.2739 20.6689 20.5143 19.7717 21.2572C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.2572C3.33115 20.5143 3.15626 19.2739 2.80648 16.793L2.38351 13.793C1.93748 10.6294 1.71447 9.04765 2.66232 8.02383C3.61017 7 5.29758 7 8.67239 7H15.3276C18.7024 7 20.3898 7 21.3377 8.02383C22.0865 8.83268 22.1045 9.98979 21.8592 12" stroke="#405925" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                    </div>
                                    <br></br>
                                    <h6 className="sc-mb-0"><Link onClick={() => setShowPopup(true)}>Texto Através de<br></br>Audio ou Video</Link></h6>
                                </div>
                        </div>
                </Fade>   
                <Fade bottom delay={1000}>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="sc-service-content-box text-center sc-md-mb-30">
                            <div className="service-icon">
                            <svg viewBox="0 0 24 24"  onClick={() => setRecordPopupOpen(true)} width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V8Z" stroke="#405925" stroke-width="1.5"></path> <path d="M13 8L17 8" stroke="#405925" stroke-width="1.5" stroke-linecap="round"></path> <path d="M13 11L17 11" stroke="#405925" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 19V22" stroke="#405925" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20.75 10C20.75 9.58579 20.4142 9.25 20 9.25C19.5858 9.25 19.25 9.58579 19.25 10H20.75ZM4.75 10C4.75 9.58579 4.41421 9.25 4 9.25C3.58579 9.25 3.25 9.58579 3.25 10H4.75ZM15.5121 17.3442C15.1499 17.5452 15.0192 18.0017 15.2202 18.3639C15.4212 18.7261 15.8777 18.8568 16.2399 18.6558L15.5121 17.3442ZM19.25 10V11H20.75V10H19.25ZM4.75 11V10H3.25V11H4.75ZM12 18.25C7.99594 18.25 4.75 15.0041 4.75 11H3.25C3.25 15.8325 7.16751 19.75 12 19.75V18.25ZM19.25 11C19.25 13.7287 17.7429 16.1063 15.5121 17.3442L16.2399 18.6558C18.928 17.1642 20.75 14.2954 20.75 11H19.25Z" fill="#405925"></path> </g></svg>
                                    </div>
                                    <br></br>
                                    <h6 className="sc-mb-0"><Link onClick={() => setRecordPopupOpen(true)}>Grave e Transforme<br></br>em Texto ou Documento</Link></h6>
                                </div>
                        </div>
                </Fade>
                <Fade bottom delay={1000}>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="sc-service-content-box text-center sc-md-mb-30">
                            <div className="service-icon">
                            <svg viewBox="0 0 24 24" onClick={() => setChatPopupOpen(true)} fill="none" width="60" height="60" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13.0867 21.3877L13.7321 21.7697L13.0867 21.3877ZM13.6288 20.4718L12.9833 20.0898L13.6288 20.4718ZM10.3712 20.4718L9.72579 20.8539H9.72579L10.3712 20.4718ZM10.9133 21.3877L11.5587 21.0057L10.9133 21.3877ZM1.25 10.5C1.25 10.9142 1.58579 11.25 2 11.25C2.41421 11.25 2.75 10.9142 2.75 10.5H1.25ZM3.07351 15.6264C2.915 15.2437 2.47627 15.062 2.09359 15.2205C1.71091 15.379 1.52918 15.8177 1.68769 16.2004L3.07351 15.6264ZM7.78958 18.9915L7.77666 19.7413L7.78958 18.9915ZM5.08658 18.6194L4.79957 19.3123H4.79957L5.08658 18.6194ZM21.6194 15.9134L22.3123 16.2004V16.2004L21.6194 15.9134ZM16.2104 18.9915L16.1975 18.2416L16.2104 18.9915ZM18.9134 18.6194L19.2004 19.3123H19.2004L18.9134 18.6194ZM19.6125 2.7368L19.2206 3.37628L19.6125 2.7368ZM21.2632 4.38751L21.9027 3.99563V3.99563L21.2632 4.38751ZM4.38751 2.7368L3.99563 2.09732V2.09732L4.38751 2.7368ZM2.7368 4.38751L2.09732 3.99563H2.09732L2.7368 4.38751ZM9.40279 19.2098L9.77986 18.5615L9.77986 18.5615L9.40279 19.2098ZM13.7321 21.7697L14.2742 20.8539L12.9833 20.0898L12.4412 21.0057L13.7321 21.7697ZM9.72579 20.8539L10.2679 21.7697L11.5587 21.0057L11.0166 20.0898L9.72579 20.8539ZM12.4412 21.0057C12.2485 21.3313 11.7515 21.3313 11.5587 21.0057L10.2679 21.7697C11.0415 23.0767 12.9585 23.0767 13.7321 21.7697L12.4412 21.0057ZM10.5 2.75H13.5V1.25H10.5V2.75ZM21.25 10.5V11.5H22.75V10.5H21.25ZM7.8025 18.2416C6.54706 18.2199 5.88923 18.1401 5.37359 17.9265L4.79957 19.3123C5.60454 19.6457 6.52138 19.7197 7.77666 19.7413L7.8025 18.2416ZM1.68769 16.2004C2.27128 17.6093 3.39066 18.7287 4.79957 19.3123L5.3736 17.9265C4.33223 17.4951 3.50486 16.6678 3.07351 15.6264L1.68769 16.2004ZM21.25 11.5C21.25 12.6751 21.2496 13.5189 21.2042 14.1847C21.1592 14.8438 21.0726 15.2736 20.9265 15.6264L22.3123 16.2004C22.5468 15.6344 22.6505 15.0223 22.7007 14.2868C22.7504 13.5581 22.75 12.6546 22.75 11.5H21.25ZM16.2233 19.7413C17.4786 19.7197 18.3955 19.6457 19.2004 19.3123L18.6264 17.9265C18.1108 18.1401 17.4529 18.2199 16.1975 18.2416L16.2233 19.7413ZM20.9265 15.6264C20.4951 16.6678 19.6678 17.4951 18.6264 17.9265L19.2004 19.3123C20.6093 18.7287 21.7287 17.6093 22.3123 16.2004L20.9265 15.6264ZM13.5 2.75C15.1512 2.75 16.337 2.75079 17.2619 2.83873C18.1757 2.92561 18.7571 3.09223 19.2206 3.37628L20.0044 2.09732C19.2655 1.64457 18.4274 1.44279 17.4039 1.34547C16.3915 1.24921 15.1222 1.25 13.5 1.25V2.75ZM22.75 10.5C22.75 8.87781 22.7508 7.6085 22.6545 6.59611C22.5572 5.57256 22.3554 4.73445 21.9027 3.99563L20.6237 4.77938C20.9078 5.24291 21.0744 5.82434 21.1613 6.73809C21.2492 7.663 21.25 8.84876 21.25 10.5H22.75ZM19.2206 3.37628C19.7925 3.72672 20.2733 4.20752 20.6237 4.77938L21.9027 3.99563C21.4286 3.22194 20.7781 2.57144 20.0044 2.09732L19.2206 3.37628ZM10.5 1.25C8.87781 1.25 7.6085 1.24921 6.59611 1.34547C5.57256 1.44279 4.73445 1.64457 3.99563 2.09732L4.77938 3.37628C5.24291 3.09223 5.82434 2.92561 6.73809 2.83873C7.663 2.75079 8.84876 2.75 10.5 2.75V1.25ZM2.75 10.5C2.75 8.84876 2.75079 7.663 2.83873 6.73809C2.92561 5.82434 3.09223 5.24291 3.37628 4.77938L2.09732 3.99563C1.64457 4.73445 1.44279 5.57256 1.34547 6.59611C1.24921 7.6085 1.25 8.87781 1.25 10.5H2.75ZM3.99563 2.09732C3.22194 2.57144 2.57144 3.22194 2.09732 3.99563L3.37628 4.77938C3.72672 4.20752 4.20752 3.72672 4.77938 3.37628L3.99563 2.09732ZM11.0166 20.0898C10.8136 19.7468 10.6354 19.4441 10.4621 19.2063C10.2795 18.9559 10.0702 18.7304 9.77986 18.5615L9.02572 19.8582C9.07313 19.8857 9.13772 19.936 9.24985 20.0898C9.37122 20.2564 9.50835 20.4865 9.72579 20.8539L11.0166 20.0898ZM7.77666 19.7413C8.21575 19.7489 8.49387 19.7545 8.70588 19.7779C8.90399 19.7999 8.98078 19.832 9.02572 19.8582L9.77986 18.5615C9.4871 18.3912 9.18246 18.3215 8.87097 18.287C8.57339 18.2541 8.21375 18.2487 7.8025 18.2416L7.77666 19.7413ZM14.2742 20.8539C14.4916 20.4865 14.6287 20.2564 14.7501 20.0898C14.8622 19.936 14.9268 19.8857 14.9742 19.8582L14.2201 18.5615C13.9298 18.7304 13.7204 18.9559 13.5379 19.2063C13.3646 19.4441 13.1864 19.7468 12.9833 20.0898L14.2742 20.8539ZM16.1975 18.2416C15.7862 18.2487 15.4266 18.2541 15.129 18.287C14.8175 18.3215 14.5129 18.3912 14.2201 18.5615L14.9742 19.8582C15.0192 19.832 15.096 19.7999 15.2941 19.7779C15.5061 19.7545 15.7842 19.7489 16.2233 19.7413L16.1975 18.2416Z" fill="#405925"></path> <path d="M15.5 7.83008L15.6716 8.00165C17.0049 9.33498 17.6716 10.0017 17.6716 10.8301C17.6716 11.6585 17.0049 12.3252 15.6716 13.6585L15.5 13.8301" stroke="#405925" stroke-width="1.5" stroke-linecap="round"></path> <path d="M13.2939 6L11.9998 10.8296L10.7058 15.6593" stroke="#405925" stroke-width="1.5" stroke-linecap="round"></path> <path d="M8.49994 7.83008L8.32837 8.00165C6.99504 9.33498 6.32837 10.0017 6.32837 10.8301C6.32837 11.6585 6.99504 12.3252 8.32837 13.6585L8.49994 13.8301" stroke="#405925" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                    </div>
                                    <br></br>
                                    
                                    <h6 className="sc-mb-0"><Link onClick={() => setChatPopupOpen(true)}>Chat ProjetoAI <br></br>(Superior ao ChatGPT 3.5)</Link></h6>
                                </div>
                        </div>
                </Fade> 
                {/*Popup para inserção de ideias*/}
                {ideaPopupOpen && (
                    <div className="popup">
                        <div className="popup-content">
                        <span className="close" onClick={() => setIdeaPopupOpen(false)}>&times;</span>
                        <ProjetoForm  className="close" onClick={() => setIdeaPopupOpen(false)}>&times;</ProjetoForm>
                        </div>
                    </div>
                )}
                {showPopup && (
                    // Popup para transcrição de áudio
                    <div className="popup">
                        <div className="popup-content">
                            <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
                            <h3>Upload Audio</h3>
                            <h8>Transcrição Imediata</h8>
                            <div className="file-details">
                                <input type="file" onChange={handleFileInputChange} ref={fileInputRef} />
                                <div className="check-box">
                                    <input type="checkbox" checked={consent} onChange={() => setConsent(!consent)} />
                                    <label>Eu concordo com os termos de uso da ProjetoAI.</label>
                                    <div className="login-password">
                                        {/* Link para a página de perguntas frequentes */}
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="submit-button sc-mb-5">
                                        <input onClick={handleSubmit} type="submit" value={loading ? "Transcrevendo, por favor aguarde..." : "Transcrever"} />
                                    </div>
                                </div>
                                
                            </div>
                            <div className="transcription">{formatText(transcriptionResult)}</div>
                            {transcriptionResult && (
                                <div className="select-action">
                                    <label>Selecione uma ação:</label>
                                    <select value={actionSelected} onChange={handleActionSelect} maxLength={100}>
                                        <option value="">Selecione ou digite uma necessidade...</option>
                                        <option value="Criar Documento de Abertura de Projeto">Criar Documento de Abertura de Projeto</option>
                                        <option value="Estruturar">Estruturar Texto</option>
                                        <option value="Gerar ATA de Reunião">Gerar ATA</option>
                                        <option value="Criar Resumo">Criar Resumo</option>
                                    </select>
                                    <button onClick={handleActionSubmit}>Executar Ação</button>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {showActionResultPopup && (
                    // Popup para exibir o resultado da ação
                    <div className="popup">
                        <div className="popup-content">
                            <span className="close" onClick={() => setShowActionResultPopup(false)}>&times;</span>
                            <h3>Resultado da Ação:</h3>
                            <div className="action-result">{formatText(selectedAction)}</div>
                        </div>
                    </div>
                )}

                {recordPopupOpen && (
                    // Popup para gravação de áudio
                    // Implemente a funcionalidade de gravação de áudio e envio para transcrição
                    // Pode usar bibliotecas como Recorder.js para gravar áudio no navegador
                    <div className="popup">
                        <div className="popup-content">
                            <span className="close" onClick={() => setRecordPopupOpen(false)}>&times;</span>
                            <h3>Gravar Áudio:</h3>
                            {/* Implemente a funcionalidade de gravação de áudio */}
                        </div>
                    </div>
                )}

                {chatPopupOpen && (
                    // Popup para chat
                    // Implemente a funcionalidade de chat limitado a 5 perguntas e respostas
                    <div className="popup">
                        <div className="popup-content">
                            <span className="close" onClick={() => setChatPopupOpen(false)}>&times;</span>
                            <h3>Chat:</h3>
                            {/* Implemente a funcionalidade de chat */}
                        </div>
                    </div>
                )}
            </div>
        </div>
        </section>
    );
};

export default UploadAudioForm;
