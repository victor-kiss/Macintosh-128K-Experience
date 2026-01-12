// 1. Tipo para o item individual (uma linha da especificação)
export interface MacSpecItem {
    label: string;
    spec: string;
}

// 2. Tipo para o objeto principal de dados
export interface MacintoshData {
    hardware: MacSpecItem[];
    software: MacSpecItem[];
}

// 3. Aplicação do tipo na constante
// (Corrigi também o erro de sintaxe ": =" que estava no seu código original)
const macintosh_data: MacintoshData = {
    // Chave 1: Hardware
    hardware: [
        { label: 'Processador', spec: 'Motorola 68000 (7.83 MHz)' },
        { label: 'Memória RAM', spec: '128 KB DRAM (não expansível)' },
        { label: 'Armazenamento', spec: 'Drive de disquete de 3.5 polegadas  (400 KB)' },
        { label: 'Tela', spec: 'CRT 9 polegadas (512 x 342 pixels) P&B' },
        { label: 'Portas', spec: '2 Seriais RS-422, Mouse, Áudio (Mono)' },
    ],

    // Chave 2: Software
    software: [
        { label: 'Sistema Operacional', spec: 'System 1.0 (Finder e System File)' },
        { label: 'ROM', spec: '64 KB de ROM (incluindo o Toolbox)' },
        { label: 'Aplicações Chave', spec: 'MacPaint, MacWrite' },
        { label: 'Conceito Principal', spec: 'WIMP (Windows, Icons, Menus, Pointer)' },
    ],
};

export default macintosh_data;