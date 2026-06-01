let isEnglish = true;

        const translations = {
            en: {
                navHome: "Home",
                navExperience: "Experience",
                navPortfolio: "Portfolio",
                navContact: "Contact",
                mainTitle: "YI RONGRONG",
                subtitle: "Embedded Software Engineer",
                aboutTitle: "About Me",
                aboutText: `I am an Embedded Software Engineer passionate about building efficient and reliable systems.
                        With experience in firmware development, real-time operating systems, and hardware-software integration,
                        I strive to create software that bridges the gap between hardware and software.
                        I love solving complex problems and continuously learning new technologies.
                        <br><br>
                        I believe in writing clean, maintainable code and collaborating effectively with cross-functional teams
                        to deliver high-quality embedded solutions.`,
                expTitle: "Experience",
                contactTitle: "Contact Me",
                contactIntro: "I'm always open to new opportunities and interesting conversations. Feel free to reach out!",
                cvText: "Download CV",
                cvFile: "cv/Yi_Rongrong_CV.pdf",
                langBtn: "English"
            },
            zh: {
                navHome: "首页",
                navExperience: "经验",
                navPortfolio: "作品",
                navContact: "联系",
                mainTitle: "易蓉蓉",
                subtitle: "嵌入式软件工程师",
                aboutTitle: "关于我",
                aboutText: `我是一名嵌入式软件工程师，热衷于构建高效可靠的系统。
                        拥有固件开发、实时操作系统和软硬件集成方面的丰富经验，
                        我致力于创造连接硬件与软件的创新解决方案。
                        我热爱解决复杂问题，并持续学习前沿技术。
                        <br><br>
                        我相信编写简洁、可维护的代码，并与跨职能团队有效协作，
                        交付高质量的嵌入式解决方案。`,
                expTitle: "工作经历",
                contactTitle: "联系我",
                contactIntro: "我始终对新机会和有趣的对话持开放态度。欢迎联系我！",
                cvText: "下载简历",
                cvFile: "cv/嵌入式软件工程师-易蓉蓉的简历.pdf",
                langBtn: "中文"
            }
        };

        function switchLanguage() {
            const lang = isEnglish ? 'zh' : 'en';
            const t = translations[lang];
            
            // 更新导航栏
            document.querySelector('.nav-home').textContent = t.navHome;
            document.querySelector('.nav-experience').textContent = t.navExperience;
            document.querySelector('.nav-portfolio').textContent = t.navPortfolio;
            document.querySelector('.nav-contact').textContent = t.navContact;
            
            // 更新标题和 About
            document.getElementById('mainTitle').textContent = t.mainTitle;
            document.getElementById('subtitle').textContent = t.subtitle;
            document.getElementById('aboutTitle').textContent = t.aboutTitle;
            document.getElementById('aboutText').innerHTML = t.aboutText;
            
            // 更新 Experience 标题
            const expTitle = document.getElementById('expTitle');
            if (expTitle) expTitle.textContent = t.expTitle;
            
            // 更新 Contact 区域
            const contactTitle = document.getElementById('contactTitle');
            const contactIntro = document.getElementById('contactIntro');
            const cvBtn = document.getElementById('cvBtn');
            if (contactTitle) contactTitle.textContent = t.contactTitle;
            if (contactIntro) contactIntro.textContent = t.contactIntro;
            if (cvBtn) {
                cvBtn.href = t.cvFile;
                cvBtn.innerHTML = t.cvText;
            }
            
            // 更新按钮文字
            document.getElementById('langSwitch').textContent = t.langBtn;
            document.documentElement.lang = lang;
            isEnglish = !isEnglish;
        }

        document.getElementById('langSwitch').addEventListener('click', switchLanguage);
        
        // ========== 平滑滚动跳转 ==========
        document.querySelectorAll('.nav-menu a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId && targetId !== '#') {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });

        // ========== Portfolio 数据 ==========
        const companyProjects = [
            {
                img: "img/company_projects/APP/app.png",
                title: "APP Test Project",
                desc: "Mobile application testing framework for embedded systems integration.",
                tags: ["APP", "Testing", "Embedded"]
            },
            {
                img: "img/company_projects/G22C_W19J/W19J.png",
                title: "W19J Module",
                desc: "Wireless module development with comprehensive testing.",
                tags: ["Wireless", "Module", "Testing"]
            },
            {
                img: "img/company_projects/K6/2.jpg",
                title: "Vibration Test System",
                desc: "Vibration testing and analysis for K6 project.",
                tags: ["Vibration", "Testing", "Analysis"]
            },
            {
                img: "img/company_projects/ring/2.jpg",
                title: "Smart Ring Controller",
                desc: "Gesture control firmware for smart ring device.",
                tags: ["Gesture", "Wearable", "IMU"]
            },
            {
                img: "img/company_projects/W15J/WEATHER.png",
                title: "Weather Station Project",
                desc: "Embedded weather monitoring system with sensor integration.",
                tags: ["Weather", "Sensors", "Data"]
            },
            
        ];

        const personalProjects = [
            {
                img: "img/personal_projects/ble/2.jpg",
                
                title: "BLE Module Development",
                desc: "Bluetooth Low Energy module for IoT device connectivity and data transmission.",
                tags: ["BLE", "IoT", "Nordic"]
            },
            {
                img: "img/personal_projects/stm32/1.jpg",
                title: "STM32 Learning Projects",
                desc: "Various STM32 development projects including peripherals and RTOS.",
                tags: ["STM32", "ARM", "RTOS"]
            }
        ];

        // 当前索引
        let companyIndex = 0;
        let personalIndex = 0;
        
        // 自动轮播定时器
        let autoInterval;

        // 更新公司项目显示
        function updateCompanyProject() {
            const project = companyProjects[companyIndex];
            if (project) {
                const imgElement = document.getElementById('company-project-img');
                // 检查文件扩展名，决定使用 img 还是 video
                //用图片最好，视频的选项保留
                if (project.img.endsWith('.mp4')) {
                    // 对于视频，需要特殊处理
                    imgElement.outerHTML = `<video id="company-project-img" autoplay loop muted style="width:100%;height:100%;object-fit:cover"><source src="${project.img}" type="video/mp4"></video>`;
                } else {
                    imgElement.src = project.img;
                }
                document.getElementById('company-project-title').textContent = project.title;
                document.getElementById('company-project-desc').textContent = project.desc;
                const tagsContainer = document.getElementById('company-project-tags');
                tagsContainer.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
            }
            updateDots('company');
        }

        // 更新个人项目显示
        function updatePersonalProject() {
            const project = personalProjects[personalIndex];
            if (project) {
                document.getElementById('personal-project-img').src = project.img;
                document.getElementById('personal-project-title').textContent = project.title;
                document.getElementById('personal-project-desc').textContent = project.desc;
                const tagsContainer = document.getElementById('personal-project-tags');
                tagsContainer.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
            }
            updateDots('personal');
        }

        // 更新导航点
        function updateDots(type) {
            const projects = type === 'company' ? companyProjects : personalProjects;
            const currentIndex = type === 'company' ? companyIndex : personalIndex;
            const dotsContainer = document.getElementById(`${type}-dots`);
            
            dotsContainer.innerHTML = '';
            projects.forEach((_, idx) => {
                const dot = document.createElement('span');
                dot.className = 'dot' + (idx === currentIndex ? ' active' : '');
                dot.onclick = () => {
                    if (type === 'company') {
                        companyIndex = idx;
                        updateCompanyProject();
                        resetAutoTimer();
                    } else {
                        personalIndex = idx;
                        updatePersonalProject();
                        resetAutoTimer();
                    }
                };
                dotsContainer.appendChild(dot);
            });
        }

        // 切换项目
        function changeProject(type, direction) {
            if (type === 'company') {
                companyIndex = (companyIndex + direction + companyProjects.length) % companyProjects.length;
                updateCompanyProject();
            } else {
                personalIndex = (personalIndex + direction + personalProjects.length) % personalProjects.length;
                updatePersonalProject();
            }
            resetAutoTimer();
        }

        // 重置自动轮播定时器
        function resetAutoTimer() {
            if (autoInterval) clearInterval(autoInterval);
            autoInterval = setInterval(() => {
                // 获取当前激活的分类
                const activeContainer = document.querySelector('.projects-container.active-container');
                if (activeContainer && activeContainer.id === 'company-projects') {
                    companyIndex = (companyIndex + 1) % companyProjects.length;
                    updateCompanyProject();
                } else if (activeContainer && activeContainer.id === 'personal-projects') {
                    personalIndex = (personalIndex + 1) % personalProjects.length;
                    updatePersonalProject();
                }
            }, 5000);
        }

        // 分类切换
        const tabBtns = document.querySelectorAll('.tab-btn');
        const companyContainer = document.getElementById('company-projects');
        const personalContainer = document.getElementById('personal-projects');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                tabBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                if (category === 'company') {
                    companyContainer.classList.add('active-container');
                    personalContainer.classList.remove('active-container');
                    resetAutoTimer();
                } else {
                    personalContainer.classList.add('active-container');
                    companyContainer.classList.remove('active-container');
                    resetAutoTimer();
                }
            });
        });


        // 初始化
        updateCompanyProject();
        updatePersonalProject();
        resetAutoTimer();
        
        // 将 changeProject 挂载到 window 对象
        window.changeProject = changeProject;
