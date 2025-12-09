# lagoonWorspaceTourPage
Lagoon Workspace - Tour Inicial Onboarding

Página web interativa de onboarding que funciona como intermediária de acesso ao Lagoon Workspace. O usuário só ganha acesso ao aplicativo após assistir completamente a um vídeo de apresentação.

Funcionalidades
Reprodução de Vídeo: Player HTML5 com overlay visual para iniciar
Barra de Progresso: Exibe o percentual de conclusão do vídeo em tempo real
Navegação no Vídeo: Clique na barra de progresso para pular para qualquer momento
Botão Condicional: "Prosseguir para o app" fica visível apenas quando o vídeo termina
Armazenamento Local: Salva o status de conclusão via localStorage (sessões futuras reconhecem o tour como completo)
Notificações Toast: Feedback visual discreto ao concluir o onboarding
Design Responsivo: Interface adaptável a diferentes tamanhos de tela com variáveis CSS clamp()
Acessibilidade: Atributos ARIA para barra de progresso
Tecnologia
HTML5 semântico
CSS3 (gradientes, Grid, backdrop-filter, variáveis customizadas)
JavaScript vanilla (IIFE, Event Listeners, localStorage)
Estrutura
Paleta de Cores
Tons verdes (sustentabilidade), brancos e fundo escuro com efeitos gradiente sutil.
