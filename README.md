🖥️ Macintosh 128K Experience
Um portfólio imersivo e nostálgico desenvolvido para recriar a revolução de 1984 na web moderna. Uma fusão entre design retro, storytelling interativo e engenharia de software atual.

🧩 Estrutura do Projeto
📦 app/

┣ 📂 components/ ┃ ┣ 📂 navbar/ → Menu inspirado na interface clássica do Mac OS


┃ ┣ 📂 history/ → Seção de storytelling ("A Revolução")

┃ ┣ 📂 specifications/ → Detalhes técnicos e hardware

┣ 📂 data/ ┃ ┗ 📜 manifesto.ts → Textos e conteúdos textuais do site

┣ 📜 layout.tsx → Layout principal e metadados

┗ 📜 page.tsx → Página única (SPA) do portfólio

🛠️ Personalização
Transforme este template retro no seu próprio portfólio alterando:

📜 Manifesto e Textos
📁 app/data/manifesto.ts

Edite os textos de "Revolução", "Liberdade" e "Inovação" para contar a sua história profissional.

📧 Configuração de E-mail
📁 app/actions/send-email.ts

Configure suas chaves do Resend e defina para qual endereço as mensagens devem ser enviadas.

🎨 Estilo Visual
📁 tailwind.config.ts

Ajuste a paleta de cores (Bege Retro, Preto e Branco) para adequar ao seu branding pessoal.

🖼️ Assets Visuais
📁 public/images/

Substitua as imagens do computador clássico por seus próprios projetos ou mockups.

💻 Como Rodar Localmente


# Clone o repositório

```
git clone https://github.com/victor-kiss/Macintosh-128K-Experience.git
```

# Acesse a pasta

```
cd Macintosh-128K-Experience
```

# Instale as dependências

```
npm install
```

# Execute o projeto

```
npm run dev
```

O projeto estará disponível em:

👉 http://localhost:3000

🌐 Deploy
Para hospedar na Vercel:

Bash

```
npm run build
vercel --prod
Exemplo de deploy:
```

🔗 https://macintosh-experience.vercel.app/

🧡 Créditos
Desenvolvido por Victor Kiss, unindo a estética inconfundível da Apple dos anos 80 com o poder do Next.js.

"O Macintosh 128K não é apenas um computador; é o grito da liberdade. Pare de marchar na linha. Comece a criar o seu próprio caminho."

💖 Feito com npm run dev e muita nostalgia 💖
