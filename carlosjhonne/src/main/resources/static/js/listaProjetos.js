 const alerts = document.querySelectorAll('.alert');
        if (alerts.length > 0) {
            setTimeout(() => {
                alerts.forEach(alert => {
                    alert.style.transition = 'opacity 0.5s ease';
                    alert.style.opacity = '0';
                    setTimeout(() => alert.remove(), 500);
                });
            }, 5000);
        }
        
        document.querySelectorAll('.btn-danger').forEach(btn => {
            btn.addEventListener('click', function(e) {
                if (!confirm('Esta ação não pode ser desfeita. Todos os dados do projeto serão permanentemente removidos. Continuar?')) {
                    e.preventDefault();
                }
            });
        });
        
        const searchInput = document.getElementById('searchInput');
        const filterSelect = document.getElementById('filterSelect');
        const filterButton = document.getElementById('filterButton');
        
        function applyFilters() {
            const termo = searchInput.value.trim();
            const filtro = filterSelect.value;
            let url = '/admin?';
            
            if (termo) {
                url += `busca=${termo}&`;
            }
            
            if (filtro) {
                url += `filtro=${filtro}&`;
            }
            
            // Remove o último & se existir
            if (url.endsWith('&')) {
                url = url.slice(0, -1);
            }
            
            window.location.href = url;
        }
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                applyFilters();
            }
        });
        
        filterButton.addEventListener('click', applyFilters);