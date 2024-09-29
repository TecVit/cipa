import { clearCookies, deleteCookie, getCookie, setCookie } from "./cookies";
import { firestore, auth } from "./logar";
import { v4 as uuidv4 } from 'uuid';
import { increment } from "firebase/firestore"; 

// Dados
const uidCookie = getCookie('uid') || '';
const nomeCookie = getCookie('nome') || '';
const emailCookie = getCookie('email') || '';

const date = new Date();
let ano = date.getFullYear(); 

function formatDateToDDMMYYYY(dateObject) {
    const day = String(dateObject.getDate()).padStart(2, '0');    // Dia com dois dígitos
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Mês com dois dígitos (+1 porque getMonth() retorna de 0 a 11)
    const year = dateObject.getFullYear();  // Ano com 4 dígitos

    return `${day}-${month}-${year}`;
}

// Funções
const createReport = async (dados) => {
    const { nome, email, motivo, descricao } = dados;
    const uuid = uuidv4();
    if (!nome || !email || !motivo || !descricao) {
        return false;
    }
    try {
        const formattedDate = await formatDateToDDMMYYYY(date);
        const reportDayRef = firestore.collection(`estatisticas-${ano}`).doc('relatos')
        await reportDayRef.set({
            [formattedDate]: increment(1),
        }, { merge: true });
        
        const reportDoc = await firestore.collection(`relatos-${ano}`)
        .doc(uuid).set({
            nome,
            email,
            motivo,
            descricao,
        });
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export { createReport };