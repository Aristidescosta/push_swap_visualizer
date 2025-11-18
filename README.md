# 🎯 Push Swap Visualizer

Uma aplicação web interativa para visualizar o algoritmo de ordenação **Push Swap** da 42 School. Veja suas operações ganharem vida com animações suaves e uma interface moderna.

![Push Swap Visualizer](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.18-38B2AC?style=for-the-badge&logo=tailwind-css)
![i18next](https://img.shields.io/badge/i18next-25.6.2-26A69A?style=for-the-badge&logo=i18next)

## ✨ Features

- 🎨 **Interface Moderna**: Design limpo e responsivo com Tailwind CSS
- 🌓 **Dark Mode**: Suporte completo para tema claro e escuro
- 🌍 **Multi-idioma**: Suporte para Português, Inglês e Francês
- 🎬 **Animações Fluidas**: Visualize cada operação com transições suaves
- ▶️ **Controles Interativos**: Play, pause, avançar, voltar e ajustar velocidade
- 📊 **Estatísticas em Tempo Real**: Acompanhe o progresso e estado das pilhas
- 🎯 **Timeline de Operações**: Navegue diretamente para qualquer passo
- 🎨 **Codificação por Cores**: Cada número tem uma cor única para fácil rastreamento

## 🚀 Demo

### Operações Suportadas

| Operação | Descrição |
|----------|-----------|
| `sa` | Troca os 2 primeiros elementos do topo da pilha A |
| `sb` | Troca os 2 primeiros elementos do topo da pilha B |
| `ss` | `sa` e `sb` ao mesmo tempo |
| `pa` | Move o topo de B para o topo de A |
| `pb` | Move o topo de A para o topo de B |
| `ra` | Rotaciona A para cima (primeiro vira último) |
| `rb` | Rotaciona B para cima (primeiro vira último) |
| `rr` | `ra` e `rb` ao mesmo tempo |
| `rra` | Rotaciona A para baixo (último vira primeiro) |
| `rrb` | Rotaciona B para baixo (último vira primeiro) |
| `rrr` | `rra` e `rrb` ao mesmo tempo |

## 🛠️ Tecnologias

- **React 19.2.0** - Biblioteca UI
- **TypeScript 5.9.3** - Type safety
- **Vite 7.2.2** - Build tool ultra-rápido
- **Tailwind CSS 3.4.18** - Styling utilitário
- **i18next 25.6.2** - Internacionalização
- **Lucide React** - Ícones modernos

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/Aristidescosta/push_swap_visualizer
cd push-swap-visualizer
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Abra no navegador**
```
http://localhost:5173
```

## 🎮 Como Usar

1. **Insira os números** que deseja ordenar (ex: `5 2 4 1 3`)
2. **Insira as operações** do seu algoritmo Push Swap (uma por linha):
   ```
   rra
   rra
   pb
   ra
   ra
   pb
   sa
   pa
   pa
   ```
3. **Clique em "Carregar e visualizar"**
4. **Use os controles** para:
   - ▶️ Play/Pause - executar automaticamente
   - ⏮️ Voltar - passo anterior
   - ⏭️ Avançar - próximo passo
   - 🔄 Resetar - voltar ao início
   - 🎚️ Velocidade - ajustar velocidade da animação

## 📁 Estrutura do Projeto

```
push-swap-visualizer/
├── public/
│   └── locales/           # Arquivos de tradução
│       ├── en/
│       ├── pt/
│       └── fr/
├── src/
│   ├── components/        # Componentes React
│   │   ├── header/
│   │   ├── StatsGrid/
│   │   ├── Controls.tsx
│   │   ├── FormCard.tsx
│   │   ├── OperationStepCard.tsx
│   │   ├── OperationTimeline.tsx
│   │   ├── StackColumn.tsx
│   │   └── StacksGrid.tsx
│   ├── context/           # Context API
│   │   └── ThemeContext.tsx
│   ├── hooks/             # Custom hooks
│   │   ├── usePushSwap.ts
│   │   └── useTheme.ts
│   ├── types/             # TypeScript types
│   │   └── operations.ts
│   ├── i18n.ts            # Configuração i18n
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Personalização

### Tema

O tema é gerenciado pelo `ThemeContext`. Para alternar entre claro/escuro, use o botão no header.

### Idiomas

Adicione novos idiomas criando arquivos em `public/locales/[idioma]/translation.json`.

### Cores

As cores dos elementos são geradas automaticamente com base no valor, usando o espectro HSL (0-280°).

## 🧪 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview do build
npm run lint     # Executa ESLint
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add: nova feature incrível'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👤 Autor

Desenvolvido com ❤️ por **Aristides da Costa**

- GitHub: [@Aristidescosta](https://github.com/Aristidescosta)
- LinkedIn: [Aristides da Costa](https://www.linkedin.com/in/aristides-costa-186616215/)

## 🙏 Agradecimentos

- [42 School]([https://www.42.fr/](https://42luanda.com/)) pelo projeto Push Swap
- [Lucide](https://lucide.dev/) pelos ícones
- [Tailwind CSS](https://tailwindcss.com/) pelo framework CSS

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
