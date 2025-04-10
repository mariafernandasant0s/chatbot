// index.js - Teste Inicial Limpo (Usando import)

import { GoogleGenerativeAI } from "@google/genai";

// ***********************************************
// *** COLE SUA API KEY REAL AQUI ***
const API_KEY = "AIzaSyBTTEH5S44cGFec8-pGJM10Cb_3nG8_xRg";
// ***********************************************

// Validação Rápida (Verifique o IF abaixo também!)
if (!API_KEY || API_KEY === "SUA_API_KEY_AQUI") { // <-- Deve comparar com "SUA_API_KEY_AQUI"
    console.error("ERRO: API Key não configurada! Verifique a constante API_KEY e o 'if'.");
    process.exit(1);
}

async function runSimpleTest() {
    try {
        console.log("1. Configurando a conexão...");
        const genAI = new GoogleGenerativeAI(API_KEY); // << PODE DAR ERRO AQUI
        console.log("   Conexão OK.");

        console.log("2. Obtendo o modelo 'gemini-pro'...");
        const model = genAI.getGenerativeModel({ model: "gemini-pro" }); // << PODE DAR ERRO AQUI
        console.log("   Modelo OK.");

        const prompt = "O que é o sol?"; // Pergunta simples
        console.log(`3. Enviando prompt: "${prompt}"`);

        const result = await model.generateContent(prompt); // << PODE DAR ERRO AQUI
        const response = await result.response;
        const text = response.text();

        console.log("\n--- Resposta da IA ---");
        console.log(text);
        console.log("----------------------\n");
        console.log(">>> SUCESSO TOTAL! <<<");

    } catch (error) {
        console.error("\n--- ERRO NO TESTE ---");
        console.error(error.message || error);
        if (error.stack) { console.error("Stack trace:", error.stack); }
        console.error("CAUSA PROVÁVEL: Incompatibilidade Node.js v22 / @google/genai");
        console.error("--------------------\n");
    }
}

runSimpleTest();