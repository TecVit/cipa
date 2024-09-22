import { clearCookies, deleteCookie, getCookie, setCookie } from "./cookies";
import { firestore, auth } from "./logar";
import { v4 as uuidv4 } from 'uuid';

// Dados
const uidCookie = getCookie('uid') || '';
const nomeCookie = getCookie('nome') || '';
const emailCookie = getCookie('email') || '';

const date = new Date();
let ano = date.getFullYear(); 

// Funções
const createReport = async (dados) => {
    const { nome, email, motivo, descricao } = dados;
    const uuid = uuidv4();
    if (!nome || !email || !motivo || !descricao) {
        return false;
    }
    try {
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