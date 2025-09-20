 // Tema escuro/claro
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        const themeIcon = themeToggle.querySelector('i');

        // Verificar preferência do usuário
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        const currentTheme = localStorage.getItem('theme');

        if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
            body.classList.add('dark-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');

            if (isDark) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }

            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });

        // Menu Hamburguer
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Troca de idioma
        const languageToggle = document.getElementById('languageToggle');
        let currentLanguage = 'pt';

        // Textos em português
        const ptTexts = {
            greeting: "Olá, eu sou <span>Carlos Jhonne</span>",
            subtitle: "Estudante de Desenvolvimento & Amante de Tecnologia",
            intro: "Técnico em Desenvolvimento de Sistemas pelo Senai | Java | Spring Boot | Web Developer",
            viewProjects: "Ver Projetos",
            contactBtn: "Contato",
            aboutTitle: "Sobre Mim",
            aboutSubtitle: "Um pouco sobre mim",
            aboutText1: "Opa! Me chamo Carlos Jhonne, desenvolvedor focado em soluções web com Java Spring Boot e tecnologias front-end como HTML, CSS e JavaScript. Estou no último semestre do curso técnico em Desenvolvimento de Sistemas pelo Senai e venho construindo projetos que envolvem sites, sistemas e landing pages",
            aboutText2: "Tenho um estilo de trabalho direto e prático. Gosto de criar soluções bem estruturadas, responsivas e fáceis de usar. Sigo sempre buscando melhorar e entregar algo útil e funcional para quem precisa.",
            aboutText3: "Minha jornada na programação começou com a curiosidade de entender como os sistemas funcionam por trás das telas. Desde então venho me dedicando a aprender e criar projetos que demonstrem meu progresso no desenvolvimento web.",
            projectsTitle: "Projetos",
            project1Title: "Gravadora Web",
            project1Desc: "Sistema CRUD completo para gerenciamento de artistas, álbuns e gravadoras, desenvolvido com Java Spring Boot, Thymeleaf e JPA. Inclui login simples.",
            project1Demo: "Demo",
            project1Code: "Código",
            project2Title: "Controle Bancada Smart 4.0",
            project2Desc: "Aplicação web desenvolvida com Spring Boot para gerenciamento de dispositivos inteligentes e integração com a plataforma Smart 4.0.",
            project2Demo: "Demo",
            project2Code: "Código",
            project3Title: "Criador de Currículo Web",
            project3Desc: "É uma aplicação web simples feita em Java Spring Boot com Thymeleaf, que gera um currículo em PDF a partir de dados preenchidos pelo usuário.",
            project3Demo: "Demo",
            project3Code: "Código",
            skillsTitle: "Habilidades & Tecnologias",
            skillCategory1: "Linguagens",
            skill1: "Java",
            skill2: "JavaScript",
            skill3: "HTML5",
            skill4: "CSS3",
            skillDesc1: "Desenvolvimento de aplicações com foco em Java para backend e tecnologias web para frontend.",
            skillCategory2: "Frameworks",
            skill5: "Spring Boot",
            skill6: "Thymeleaf",
            skill7: "JPA/Hibernate",
            skillDesc2: "Construção de aplicações web com Spring Framework e integração com bancos de dados.",
            skillCategory3: "Banco de Dados",
            skill8: "MySQL",
            skill15: "SQL",
            skillDesc3: "Modelagem e manipulação de bancos de dados relacionais com MySQL e linguagem SQL.",
            skillCategory4: "Modelagem",
            skill9: "UML",
            skill10: "Casos de Uso",
            skill11: "Diagrama de Classes",
            skillDesc4: "Análise e modelagem de sistemas utilizando diagramas UML e técnicas de engenharia de software.",
            skillCategory5: "Em Aprendizado",
            skill12: "Python",
            skill13: "Spring Security",
            skill14: "React",
            skillDesc5: "Tecnologias que estou estudando atualmente para expandir meu conhecimento.",
            experienceTitle: "Experiência",
            exp1Period: "2024 - Presente",
            exp1Title: "Estágio - Engenharia de Processos",
            exp1Company: " - Krah Brasil",
            exp1Desc: "Auxílio nas demandas do setor, atividades administrativas e otimização dos processos da fábrica. Desenvolvimento de planilhas automatizadas e apoio na implementação de melhorias contínuas.",
            exp2Period: "2023 - 2024",
            exp2Title: "Jovem Aprendiz",
            exp2Company: " - Krah Brasil",
            exp2Desc: "Pela Krah atuei como jovem aprendiz no setor da Engenharia de Processos, intercalando os dias na empresa e no senai onde fiz o curso de Aprendizagem Industrial em Assistente Administrativo. Adquiri experiência em rotinas administrativas e organização de documentos.",
            exp3Period: "2022 - 2022",
            exp3Title: "Jovem Aprendiz",
            exp3Company: " - Metisa METALÚRGICA",
            exp3Desc: "Atuando como jovem aprendiz pela Metisa fiz o curso de Aprendizagem Industrial em Eletricista Industrial. Tive contato com conceitos de elétrica básica e segurança no trabalho.",
            servicesTitle: "Serviços",
            service1: "Landing Pages",
            service1Desc: "Páginas de destino profissionais e responsivas para capturar leads ou promover seu produto/serviço.",
            service1Feature1: "Design personalizado",
            service1Feature2: "100% responsivo",
            service1Feature3: "Formulário de contato",
            service1Feature4: "Integração com redes sociais",
            service1Feature5: "SEO básico",
            service1Feature6: "Banco de dados",
            service1Btn: "Contratar",
            service2: "Sites Institucionais",
            service2Desc: "Websites completos para empresas com várias páginas e funcionalidades básicas.",
            service2Feature1: "Até 5 páginas",
            service2Feature2: "Design personalizado e responsivo",
            service2Feature3: "Integração com redes sociais",
            service2Feature4: "Formulário de contato",
            service2Feature5: "SEO básico",
            service2Feature6: "Galeria de imagens",
            service2Btn: "Contratar",
            service3: "Sistemas Web",
            service3Desc: "Aplicações web personalizadas com banco de dados e funcionalidades específicas.",
            service3Feature1: "Desenvolvimento sob medida",
            service3Feature2: "Banco de dados",
            service3Feature3: "Painel administrativo",
            service3Feature4: "Autenticação de usuários",
            service3Feature5: "Relatórios em PDF",
            service3Feature6: "Suporte pós-entrega",
            service3Btn: "Orçamento",
            contactTitle: "Contato",
            contactSubtitle: "Vamos conversar!",
            contactText: "Estou disponível para oportunidades de trabalho, projetos freelance ou apenas para bater um papo sobre tecnologia. Sinta-se à vontade para entrar em contato!",
            emailTitle: "Email",
            emailLink: "carlosjhonne7@gmail.com",
            phoneTitle: "Telefone",
            phoneLink: "+55 (47) 99995-9458",
            locationTitle: "Localização",
            locationText: "Santa Catarina, Brasil",
            nameLabel: "Nome",
            emailLabel: "E-mail",
            subjectLabel: "Assunto",
            messageLabel: "Mensagem",
            submitBtn: "Enviar Mensagem",
            namePlaceholder: "Seu nome completo",
            emailPlaceholder: "seu@email.com",
            subjectPlaceholder: "Sobre o que deseja falar?",
            messagePlaceholder: "Descreva sua necessidade ou projeto...",
            footerText: "Transformando ideias em soluções digitais",
            copyright: "copyright © 2025 Carlos Jhonne. Todos os direitos reservados."
        };

        // Textos em inglês
        const enTexts = {
            greeting: "Hello, I'm <span>Carlos Jhonne</span>",
            subtitle: "Development Student & Technology Lover",
            intro: "Systems Development Technician at Senai | Java | Spring Boot | Web Developer",
            viewProjects: "View Projects",
            contactBtn: "Contact",
            aboutTitle: "About Me",
            aboutSubtitle: "A little about me",
            aboutText1: "Hey! I'm Carlos Jhonne, a developer focused on web solutions with Java Spring Boot and front-end technologies like HTML, CSS and JavaScript. I'm in the final semester of the Systems Development technical course at Senai and I've been building projects involving websites, systems and landing pages",
            aboutText2: "I have a direct and practical work style. I like to create well-structured, responsive and easy-to-use solutions. I'm always looking to improve and deliver something useful and functional for those who need it.",
            aboutText3: "My journey in programming began with the curiosity to understand how systems work behind the screens. Since then I've been dedicated to learning and creating projects that demonstrate my progress in web development.",
            projectsTitle: "Projects",
            project1Title: "Record Label Web",
            project1Desc: "Complete CRUD system for managing artists, albums and record labels, developed with Java Spring Boot, Thymeleaf and JPA. Includes simple login.",
            project1Demo: "Demo",
            project1Code: "Code",
            project2Title: "Smart Bench Control 4.0",
            project2Desc: "Web application developed with Spring Boot for managing smart devices and integration with the Smart 4.0 platform.",
            project2Demo: "Demo",
            project2Code: "Code",
            project3Title: "Web Resume Creator",
            project3Desc: "It's a simple web application made with Java Spring Boot and Thymeleaf that generates a resume in PDF from user-provided data.",
            project3Demo: "Demo",
            project3Code: "Code",
            skillsTitle: "Skills & Technologies",
            skillCategory1: "Languages",
            skill1: "Java",
            skill2: "JavaScript",
            skill3: "HTML5",
            skill4: "CSS3",
            skillDesc1: "Application development focused on Java for backend and web technologies for frontend.",
            skillCategory2: "Frameworks",
            skill5: "Spring Boot",
            skill6: "Thymeleaf",
            skill7: "JPA/Hibernate",
            skillDesc2: "Building web applications with Spring Framework and database integration.",
            skillCategory3: "Database",
            skill8: "MySQL",
            skill15: "SQL",
            skillDesc3: "Modeling and manipulation of relational databases with MySQL and SQL language.",
            skillCategory4: "Modeling",
            skill9: "UML",
            skill10: "Use Cases",
            skill11: "Class Diagram",
            skillDesc4: "System analysis and modeling using UML diagrams and software engineering techniques.",
            skillCategory5: "Learning",
            skill12: "Python",
            skill13: "Spring Security",
            skill14: "React",
            skillDesc5: "Technologies I'm currently studying to expand my knowledge.",
            experienceTitle: "Experience",
            exp1Period: "2024 - Present",
            exp1Title: "Internship - Process Engineering",
            exp1Company: " - Krah Brasil",
            exp1Desc: "Assistance in department demands, administrative activities and optimization of factory processes. Development of automated spreadsheets and support in implementing continuous improvements.",
            exp2Period: "2023 - 2024",
            exp2Title: "Young Apprentice",
            exp2Company: " - Krah Brasil",
            exp2Desc: "At Krah, I worked as a young apprentice in the Process Engineering department, alternating days between the company and Senai where I took the Industrial Apprenticeship course in Administrative Assistant. Gained experience in administrative routines and document organization.",
            exp3Period: "2022 - 2022",
            exp3Title: "Young Apprentice",
            exp3Company: " - Metisa METALURGICA",
            exp3Desc: "Working as a young apprentice at Metisa, I took the Industrial Apprenticeship course in Industrial Electrician. Had contact with basic electrical concepts and work safety.",
            servicesTitle: "Services",
            service1: "Landing Pages",
            service1Desc: "Professional and responsive landing pages to capture leads or promote your product/service.",
            service1Feature1: "Custom design",
            service1Feature2: "100% responsive",
            service1Feature3: "Contact form",
            service1Feature4: "Social media integration",
            service1Feature5: "Basic SEO",
            service1Feature6: "Database",
            service1Btn: "Hire",
            service2: "Institutional Websites",
            service2Desc: "Complete websites for companies with multiple pages and basic functionalities.",
            service2Feature1: "Up to 5 pages",
            service2Feature2: "Custom and responsive design",
            service2Feature3: "Social media integration",
            service2Feature4: "Contact form",
            service2Feature5: "Basic SEO",
            service2Feature6: "Image gallery",
            service2Btn: "Hire",
            service3: "Web Systems",
            service3Desc: "Custom web applications with database and specific functionalities.",
            service3Feature1: "Tailored development",
            service3Feature2: "Database",
            service3Feature3: "Admin panel",
            service3Feature4: "User authentication",
            service3Feature5: "PDF reports",
            service3Feature6: "Post-delivery support",
            service3Btn: "Get a Quote",
            contactTitle: "Contact",
            contactSubtitle: "Let's talk!",
            contactText: "I'm available for job opportunities, freelance projects or just to chat about technology. Feel free to get in touch!",
            emailTitle: "Email",
            emailLink: "carlosjhonne7@gmail.com",
            phoneTitle: "Phone",
            phoneLink: "+55 (47) 99995-9458",
            locationTitle: "Location",
            locationText: "Santa Catarina, Brazil",
            nameLabel: "Name",
            emailLabel: "Email",
            subjectLabel: "Subject",
            messageLabel: "Message",
            submitBtn: "Send Message",
            namePlaceholder: "Your full name",
            emailPlaceholder: "your@email.com",
            subjectPlaceholder: "What do you want to talk about?",
            messagePlaceholder: "Describe your needs or project...",
            footerText: "Turning ideas into digital solutions",
            copyright: "copyright © 2025 Carlos Jhonne. All rights reserved."
        };

        function updateTexts(language) {
            const texts = language === 'pt' ? ptTexts : enTexts;

            // Atualizar todos os textos
            for (const [key, value] of Object.entries(texts)) {
                const element = document.getElementById(key);
                if (element) {
                    if (key.endsWith('Placeholder')) {
                        // Se for um placeholder, atualiza o atributo placeholder do elemento correspondente
                        const fieldName = key.replace('Placeholder', '');
                        const inputElement = document.getElementById(fieldName);
                        if (inputElement) {
                            inputElement.placeholder = value;
                        }
                    } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = value;
                    } else {
                        // Verificar se o valor contém HTML (como o span no título)
                        if (value.includes('<') && value.includes('>')) {
                            element.innerHTML = value;
                        } else {
                            element.textContent = value;
                        }
                    }
                }
            }

            currentLanguage = language;
            languageToggle.textContent = language === 'pt' ? 'EN' : 'PT';
        }

        languageToggle.addEventListener('click', () => {
            const newLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
            updateTexts(newLanguage);
        });

        // Formulário de contato
        const contactForm = document.getElementById('contactForm');
        const formMessage = document.getElementById('formMessage');

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = document.getElementById('submitBtn');
            const originalBtnText = submitBtn.textContent;

            try {
                // Mostrar estado de carregamento
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (currentLanguage === 'pt' ? 'Enviando...' : 'Sending...');

                // Coletar dados do formulário
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    subject: document.getElementById('subject').value,
                    message: document.getElementById('message').value,
                    _captcha: 'false',
                    _template: 'table'
                };

                // Enviar para o FormSubmit
                const response = await fetch('https://formsubmit.co/ajax/carlosjhonne7@gmail.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();

                if (response.ok && result.success === "true") {
                    // Sucesso - mostrar mensagem e resetar formulário
                    showFormMessage(currentLanguage === 'pt' ?
                        'Mensagem enviada com sucesso! Em breve entrarei em contato.' :
                        'Message sent successfully! I will contact you soon.', 'success');
                    contactForm.reset();
                } else {
                    throw new Error(result.message || 'Erro no envio');
                }
            } catch (error) {
                // Erro - mostrar mensagem de erro
                showFormMessage(currentLanguage === 'pt' ?
                    'Erro ao enviar mensagem. Por favor, tente novamente mais tarde ou entre em contato diretamente por email/telefone.' :
                    'Error sending message. Please try again later or contact me directly by email/phone.', 'error');
                console.error('Erro no formulário:', error);
            } finally {
                // Restaurar botão
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        });

        function showFormMessage(message, type) {
            formMessage.textContent = message;
            formMessage.style.display = 'block';
            formMessage.style.backgroundColor = type === 'success' ? 'rgba(76, 175, 80, 0.2)' : 'rgba(255, 107, 132, 0.2)';
            formMessage.style.color = type === 'success' ? 'var(--success-color)' : 'var(--accent-color)';
            formMessage.style.border = `1px solid ${type === 'success' ? 'var(--success-color)' : 'var(--accent-color)'}`;

            // Esconder a mensagem após 5 segundos
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }

        // Botão de voltar ao topo
        const backToTop = document.getElementById('backToTop');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Scroll suave para links internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Atualizar classe do header ao rolar
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 5px 20px var(--shadow-color)';
            } else {
                header.style.boxShadow = '0 2px 15px var(--shadow-color)';
            }
        });

        // Ativar link ativo na navegação
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (pageYOffset >= (sectionTop - 150)) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${current}`) {
                    item.classList.add('active');
                }
            });
        });

        // Animação ao rolar
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('section, .project-card, .skill-category, .timeline-item, .service-card');

            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;

                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Aplicar estilos iniciais de animação
        document.querySelectorAll('section, .project-card, .skill-category, .timeline-item, .service-card').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });

        // Mostrar hero imediatamente
        document.querySelector('.hero').style.opacity = '1';

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);