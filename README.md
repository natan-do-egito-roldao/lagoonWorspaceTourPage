Lagoon Workspace — Onboarding Interativo (Tour Inicial)

Interface web totalmente interativa desenvolvida como etapa obrigatória de onboarding para novos usuários do Lagoon Workspace.
O acesso ao aplicativo só é liberado após a conclusão completa do vídeo de apresentação, garantindo uma experiência inicial orientada e consistente.

🚀 Funcionalidades Principais

🎬 Reprodução de Vídeo

Player HTML5 customizado

Overlay de Play estilizado para iniciar o vídeo

Comportamento otimizado para navegadores com restrições de autoplay

📊 Barra de Progresso Dinâmica

Atualização em tempo real conforme o vídeo avança

Percentual exibido numericamente

Totalmente responsiva e acessível (role="progressbar" + ARIA)

⏩ Navegação por Clique

Usuário pode clicar na barra de progresso para avançar ou retroceder no vídeo

Cálculo preciso baseado na posição do clique (percentual → tempo exato)

🔓 Acesso Condicional ao App

Botão "Prosseguir para o app" permanece oculto

Só é exibido quando o vídeo é concluído (ended)

Estilizado conforme a paleta visual do projeto

💾 Persistência via LocalStorage

Armazena se o tour foi finalizado

Usuários que já concluíram o vídeo não precisam repetir o onboarding

🔔 Notificações Toast

Mensagens sutis e não intrusivas

Usadas para confirmar ações, progresso e conclusão do tour

📱 Design Responsivo e Acessível

Layout adaptável a diferentes telas (desktop/mobile)

Uso de clamp() para tipografia fluida

Paleta em tons verdes + fundo escuro, reforçando identidade sustentável

Efeitos visuais modernos: gradientes, blur, sombras profundas

🛠️ Tecnologias Utilizadas

HTML5 Semântico

Estrutura limpa e acessível

Componentes organizados por propósito

CSS3 Moderno

Variáveis personalizadas (--var)

Grid, radiais, transparências, backdrop-filter

Dark theme com estética premium e bordas suaves

Totalmente modular e escalável

JavaScript Vanilla

IIFE para isolamento de escopo

Event listeners organizados

Manipulação de vídeo, barra de progresso e UI

Persistência com localStorage

Código limpo, direto e sem dependências externas

🎯 Objetivo do Projeto

Entregar uma experiência de onboarding envolvente, controlada e coerente com o ecossistema do Lagoon Workspace, garantindo que o usuário tenha uma visão clara do produto antes de acessá-lo.
