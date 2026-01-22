# 📚 FAQ Accordion - Frontend Mentor

Um componente de **FAQ (Perguntas Frequentes)** interativo construído como desafio do Frontend Mentor.

## 🎯 Descrição

Este projeto apresenta um accordion (sanfona) de perguntas e respostas. Ao clicar em uma pergunta, a resposta aparece/desaparece, e um ícone muda para indicar o estado (aberto/fechado).

## 📁 Estrutura do Projeto

```
frontend-mentor-faq/
│
├── index.html                 # Estrutura HTML principal
├── README.md                  # Este arquivo
│
└── src/
    ├── css/
    │   ├── reset.css         # Reset CSS (Andy Bell)
    │   └── style.css         # Estilos do projeto
    │
    ├── js/
    │   └── index.js          # Lógica interativa do accordion
    │
    └── images/
        ├── icon-star.svg     # Ícone de estrela (header)
        ├── icon-plus.svg     # Ícone de mais (perguntas fechadas)
        ├── icon-minus.svg    # Ícone de menos (perguntas abertas)
        └── background-pattern-mobile.svg  # Padrão de fundo
```

## 🚀 Como Funciona

### **HTML (index.html)**
- Estrutura semântica com seção `.container`
- Cada pergunta é um `.faq-item` com:
  - Um botão `.question-btn` (a pergunta)
  - Uma div `.answer` (a resposta)

### **CSS (style.css)**
- **Body**: Centralizado com grid, fundo com padrão SVG
- **Container**: Card branco com sombra e border-radius
- **FAQ Items**: Organizado em flex-column com linha separadora
- **Resposta**: Inicialmente oculta com `display: none`
- **Estado ativo**: Quando `.faq-item.active`, a resposta fica visível

### **JavaScript (index.js)**
Implementa a interatividade:

1. Seleciona todos os botões `.question-btn`
2. Adiciona listener de clique em cada botão
3. Ao clicar:
   - Toggle da classe `active` no `.faq-item`
   - Muda o ícone: `icon-plus.svg` ↔ `icon-minus.svg`

## 🎨 Cores e Tipografia

| Elemento | Cor |
|----------|-----|
| Fundo da página | `hsl(275, 100%, 97%)` - Roxo muito claro |
| Fundo do card | `hsl(0, 100%, 100%)` - Branco |
| Texto da pergunta | `hsl(292, 42%, 14%)` - Roxo escuro |
| Texto da resposta | `hsl(292, 16%, 49%)` - Roxo médio |

**Tipografia**: Work Sans (100-900 weight)

## 💡 Funcionalidades

✅ Accordion com abrir/fechar perguntas  
✅ Ícone dinâmico que muda ao clicar  
✅ Design responsivo (mobile-first)  
✅ Shadow e border-radius para visual moderno  
✅ Reset CSS (Andy Bell) para melhor compatibilidade  

## 🔧 Como Usar

1. Abra `index.html` no navegador
2. Clique nas perguntas para expandir/recolher respostas
3. Os ícones mudam automaticamente
4. Cada pergunta pode ser aberta independentemente

## 📱 Responsividade

O projeto utiliza:
- `width: 90%` para se adaptar a diferentes tamanhos de tela
- `max-width: 800px` para não ficar muito largo em desktops
- Background padrão mobile com `background-size: 100% auto`

## 📝 Arquivos de Estilo

| Arquivo | Função |
|---------|--------|
| `reset.css` | Reset universal (Andy Bell) - remove estilos padrão |
| `style.css` | Estilos customizados do projeto |

## 🎓 Conceitos Utilizados

- ✨ HTML semântico
- 🎨 Flexbox para layout
- 📱 Design responsivo
- 🔄 JavaScript DOM manipulation
- 🎭 CSS classes dinâmicas
- 📚 Estrutura bem organizada

---

**Desenvolvido como desafio do Frontend Mentor** 🚀