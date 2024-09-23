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
const getArticles = async () => {
    try {
        const reportRef = await firestore.collection(`artigos-${ano}`).orderBy('date', 'desc').limit(15).get();
        if (!reportRef.empty) {
            const articlesList = await reportRef.docs.map((doc) => {
                return doc.data();
            });
            return articlesList;
        } else {
            return [];
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

export { getArticles };