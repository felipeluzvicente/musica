function playSound(soundFile) {
    const audio = new Audio(soundFile);

    // Adiciona um evento de clique para reproduzir o som
    document.addEventListener('click', () => {
        
        audio.stop();
        
        audio.play();
        /*
            verifique aqui se a musica esta tocando. Caso não
            audio.play();

            caso sim
            audio.stop();
        */
        // Remove o evento após o primeiro clique para permitir a reprodução contínua
        document.removeEventListener('click', arguments.callee);
    });
}

