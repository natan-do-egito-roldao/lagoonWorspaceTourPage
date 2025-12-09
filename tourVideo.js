(function(){
      const video = document.getElementById('tourVideo');
      const fill = document.getElementById('progressFill');
      const label = document.getElementById('progressLabel');
      const proceed = document.getElementById('btnProceed');
      const progressBar = document.querySelector('.progress-bar');
      const playOverlay = document.getElementById('playOverlay');

      const toast = document.getElementById('toast');
      const toastTitle = document.getElementById('toastTitle');
      const toastBody = document.getElementById('toastBody');

      const STORAGE_KEY = 'lw_onboarding_completed_v1';

      function showToast(title, body){
        if(!toast) return;
        toastTitle.textContent = title;
        toastBody.textContent = body;
        toast.classList.add('show');
        window.clearTimeout(showToast._t);
        showToast._t = window.setTimeout(() => toast.classList.remove('show'), 2200);
      }

      function setProgress(p){
        const safe = Math.max(0, Math.min(100, p));
        if(fill) fill.style.width = safe.toFixed(1) + '%';
        if(label) label.textContent = Math.round(safe) + '%';
        if(progressBar) progressBar.setAttribute('aria-valuenow', String(Math.round(safe)));
      }

      function hideProceed(){
        if(!proceed) return;
        proceed.classList.remove('enabled');
      }

      function showProceed(){
        if(!proceed) return;
        proceed.classList.add('enabled');
        localStorage.setItem(STORAGE_KEY, 'true');
        showToast('Tour concluído', 'Acesso liberado para o Lagoon Workspace.');
      }

      function checkCompletion(){
        const done = localStorage.getItem(STORAGE_KEY) === 'true';
        if(done){
          setProgress(100);
          showProceed();
        } else {
          hideProceed();
        }
      }

      // "Testes" simples de sanidade (não afetam UI)
      function runSelfTests(){
        console.assert(!!video, 'Elemento de vídeo não encontrado');
        console.assert(!!fill, 'Barra de progresso (fill) não encontrada');
        console.assert(!!label, 'Label de progresso não encontrado');
        console.assert(!!proceed, 'Botão de prosseguir não encontrado');
      }

      runSelfTests();
      checkCompletion();

      // Controlador de progresso do vídeo
      progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const xInside = e.clientX - rect.left;
        const width = rect.width;

        const perc = (((width + xInside) / width) * 100) - 100;

        const clickedTime = (perc / 100) * video.duration

        video.currentTime = clickedTime
      })


      if(video){
        video.addEventListener('timeupdate', () => {
          if(!video.duration || !isFinite(video.duration)) return;
          const p = (video.currentTime / video.duration) * 100;
          setProgress(p);
        });

        video.addEventListener('ended', () => {
          console.log('acabou')
          setProgress(100);
          playOverlay.classList.remove('hidden');
          showProceed();
        });

        video.addEventListener('loadedmetadata', () => {
          const done = localStorage.getItem(STORAGE_KEY) === 'true';
          if(done) showProceed();
        });
      }
      

      if(proceed){
        proceed.addEventListener('click', () => {
          // Segurança: se não estiver liberado, não faz nada
          const done = localStorage.getItem(STORAGE_KEY) === 'true';
          if(!done) return;

          showToast('Entrando no app', 'Redirecionamento de exemplo.');
          // TODO: substitua pela rota real do seu app
          // window.location.href = '/app';
          console.log('Prosseguir para o app');
        });
      }

      // PLAY ao clicar no overlay

      playOverlay.addEventListener('click', () => {
        video.play()
          .then(() => {
            playOverlay.classList.add('hidden');
          })
          .catch((err => {
            console.log("AutoPlay Bloqueado", err);
          }));
      });

      //PAUSE ao clicar no vídeo

      video.addEventListener('click', ()=> {
        video.pause();
        playOverlay.classList.remove('hidden');
      })

      const btnPrivacy = document.getElementById('btnPrivacy');
      const btnTerms = document.getElementById('btnTerms');

      if(btnPrivacy){
        btnPrivacy.addEventListener('click', (e) => {
          e.preventDefault();
          showToast('Privacidade', 'Você pode linkar sua política aqui.');
        });
      }

      if(btnTerms){
        btnTerms.addEventListener('click', (e) => {
          e.preventDefault();
          showToast('Termos', 'Você pode linkar os termos aqui.');
        });
      }


  

    })();