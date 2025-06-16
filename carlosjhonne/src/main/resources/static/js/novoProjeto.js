// Adicionar tecnologias
const techInput = document.getElementById('techInput');
const techTagsContainer = document.getElementById('techTags');
const tecnologiasInput = document.getElementById('tecnologias');

// Função para adicionar tags
function addTechTag(tech) {
    if (!tech) return;
    
    // Verifica se a tag já existe (case insensitive)
    const tags = Array.from(techTagsContainer.querySelectorAll('.tech-tag span:first-child'))
                    .map(span => span.textContent.trim().toLowerCase());
    
    if (tags.includes(tech.toLowerCase())) {
        return;
    }
    
    const tag = document.createElement('span');
    tag.className = 'tech-tag';
    tag.innerHTML = `
        <span>${tech}</span>
        <span class="tech-tag-remove" onclick="removeTechTag(this)">×</span>
    `;
    
    techTagsContainer.appendChild(tag);
    updateTechInput();
}

// Função para remover tags
function removeTechTag(element) {
    element.parentElement.remove();
    updateTechInput();
}

// Atualiza o campo hidden com as tecnologias
function updateTechInput() {
    const tags = Array.from(techTagsContainer.querySelectorAll('.tech-tag span:first-child'))
                    .map(span => span.textContent.trim());
    
    // Armazena como string simples separada por vírgulas
    tecnologiasInput.value = tags.join(', ');
}

// Evento para adicionar tags com Enter ou vírgula
techInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        const tech = this.value.trim();
        if (tech) {
            addTechTag(tech);
            this.value = '';
        }
    }
});

// Inicializar tags existentes ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    // Se já existirem tecnologias no campo hidden
    if (tecnologiasInput.value) {
        // Remove possíveis colchetes e aspas extras
        const cleanValue = tecnologiasInput.value.replace(/[\[\]"]/g, '');
        
        // Divide por vírgula e filtra valores vazios
        const techs = cleanValue.split(',')
            .map(tech => tech.trim())
            .filter(tech => tech.length > 0);
        
        techs.forEach(tech => {
            addTechTag(tech);
        });
    }
});

// Preview da imagem (mantido igual)
const imagemUrlInput = document.getElementById('imagemUrl');
const imagePreview = document.getElementById('imagePreview');

imagemUrlInput.addEventListener('input', function() {
    if (this.value) {
        imagePreview.src = this.value;
        imagePreview.style.display = 'block';
    } else {
        imagePreview.style.display = 'none';
    }
});

// Mostrar preview se já existir uma imagem URL
if (imagemUrlInput.value) {
    imagePreview.src = imagemUrlInput.value;
    imagePreview.style.display = 'block';
}