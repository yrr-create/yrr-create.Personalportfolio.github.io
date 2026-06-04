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
                aboutText: `
                Hi, I am Rongrong, an embedded firmware engineer with 4 years of experience in smart wearable products, including smart rings, watches, and bands.
<br><br>
My work focuses on full-device firmware development, BLE applications, touch driver integration, display/UI adaptation, peripheral debugging, firmware maintenance, and customer-specific firmware customization.
<br><br>
I work across multiple SDKs and customer project branches, using Source Insight, Code::Blocks, Visual Studio, SVN, SEGGER J-Link, and basic Git workflows for code reading, firmware development, flashing, debugging, validation, and issue tracking.
                `,
                expTitle: "Experience",
                contactTitle: "Contact Me",
                contactIntro: "I am open to embedded firmware opportunities, wearable device projects, and technical collaboration.",
                contactEmailLabel: "Email",
                contactEmail: "yirongrong012@gmail.com",
                contactFocusLabel: "Focus",
                contactFocus: "BLE Wearables · Embedded Firmware · MCU Development · IoT Devices",
                contactAvailabilityLabel: "Availability",
                contactAvailability: "Open to job opportunities, freelance projects, and collaboration.",
                cvText: "Download CV",
                cvFile: "CV/Yi_Rongrong_CV.pdf",
                sendEmailText: "Send Email",
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
                aboutText: `我是一名嵌入式固件工程师，拥有 4 年智能穿戴产品开发经验，主要参与智能戒指、手表、手环等产品的整机固件开发、问题定位修复与版本维护。工作内容覆盖 BLE 蓝牙应用开发、触控驱动集成适配、显示与 UI 资源适配、外设功能调试，以及客户定制版本的功能修改和问题跟进。
<br>
我熟悉 Source Insight、Code::Blocks、Visual Studio、SVN、SEGGER J-Link 等开发、版本管理和调试工具，同时具备 Git 基础使用经验。能够在多套 SDK 和客户项目分支中完成代码阅读、功能适配、固件编译、烧录验证和问题定位。日常开发中，我注重固件稳定性、可维护性和实际产品交付，具备从需求理解、代码调试、问题分析到固件验证的完整开发经验。
<br>
在项目协作中，我能够根据客户反馈和测试现象定位固件侧问题，并配合硬件、App 和测试人员完成验证闭环。相比单一功能实现，我更关注功能在真实产品中的稳定运行、不同客户版本之间的差异维护，以及后续交付风险。
                `,


                expTitle: "工作经历",
                contactTitle: "联系我",
                contactIntro: "我对嵌入式固件岗位、智能穿戴项目和技术协作保持开放态度。",
                contactEmailLabel: "邮箱",
                contactEmail: "3305855572@qq.com",
                contactFocusLabel: "方向",
                contactFocus: "BLE 可穿戴 · 嵌入式固件 · MCU 开发 · 物联网设备",
                contactAvailabilityLabel: "可联系方向",
                contactAvailability: "开放求职机会、接单项目和技术协作。",
                cvText: "下载简历",
                cvFile: "CV/嵌入式软件工程师-易蓉蓉的简历.pdf",
                sendEmailText: "发送邮件",
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
            const contactEmailLabel = document.getElementById('contactEmailLabel');
            const contactEmail = document.getElementById('contactEmail');
            const contactFocusLabel = document.getElementById('contactFocusLabel');
            const contactFocus = document.getElementById('contactFocus');
            const contactAvailabilityLabel = document.getElementById('contactAvailabilityLabel');
            const contactAvailability = document.getElementById('contactAvailability');
            const cvBtn = document.getElementById('cvBtn');
            const emailBtn = document.getElementById('emailBtn');
            if (contactTitle) contactTitle.textContent = t.contactTitle;
            if (contactIntro) contactIntro.textContent = t.contactIntro;
            if (contactEmailLabel) contactEmailLabel.textContent = t.contactEmailLabel;
            if (contactEmail) {
                contactEmail.textContent = t.contactEmail;
                contactEmail.href = `mailto:${t.contactEmail}`;
            }
            if (contactFocusLabel) contactFocusLabel.textContent = t.contactFocusLabel;
            if (contactFocus) contactFocus.textContent = t.contactFocus;
            if (contactAvailabilityLabel) contactAvailabilityLabel.textContent = t.contactAvailabilityLabel;
            if (contactAvailability) contactAvailability.textContent = t.contactAvailability;
            if (cvBtn) {
                cvBtn.href = t.cvFile;
                cvBtn.innerHTML = t.cvText;
            }
            if (emailBtn) {
                emailBtn.href = `mailto:${t.contactEmail}`;
                emailBtn.textContent = t.sendEmailText;
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
