let isEnglish = true;

        const translations = {
            en: {
                navHome: "Home",
                navExperience: "Experience",
                navPortfolio: "Portfolio",
                navContact: "Contact",
                companyProjectsText: "Company Projects",
                personalProjectsText: "Personal Projects",
                keyWorkText: "Key Work",
                backText: "Click Back",
                detailsText: "More details",
                mainTitle: "YI RONGRONG",
                subtitle: "Embedded Software Engineer",
                aboutTitle: "About Me",
                aboutText: `
                Hi, I am Rongrong, an embedded firmware engineer with 4 years of experience in mass-produced smart wearable products, including smart rings, watches, and bands.
<br><br>
My main production experience is based on the Actions Technology AB56xx series wearable firmware platform, with additional project exposure to DA1468x and BK3288/BK32886 related firmware projects.
<br><br>
My work focuses on Bluetooth/BLE application development, application-layer features, UI/display adaptation, full-device firmware maintenance, issue investigation, flashing, validation, and customer-specific firmware customization.
<br><br>
I work across multiple SDKs and customer project branches using Source Insight, Code::Blocks, Visual Studio, SVN, SEGGER J-Link, and Git for code reading, firmware development, debugging, version control, and issue tracking.
                `,
                expTitle: "Experience",
                expContent: `
                <div class="timeline-item">
                    <div class="timeline-date">
                        <span class="date-tag">2023 - Present</span>
                    </div>
                    <div class="timeline-content">
                        <h3>Embedded Firmware Engineer</h3>
                        <h4>Shenzhen Jianyun Hulian Technology Co., Ltd.</h4>
                        <ul>
                            <li>Responsible for firmware development and maintenance of smart wearable products, including AI bracelets, smart rings and smart watches, using C/C++ for embedded feature development and iteration.</li>
                            <li>Developed, ported and debugged capacitive touch panel (CTP), display, sensor, charging, motor and other peripheral drivers based on AB5682C and AB202x platforms.</li>
                            <li>Implemented and optimized BLE communication features, including device pairing, data synchronization, notification handling, OTA/FOTA support and connection stability tuning.</li>
                            <li>Collaborated with hardware, QA and production teams to analyze defects, verify fixes and improve firmware stability for mass production.</li>
                            <li>Managed code versions using SVN, and maintained technical documents, release notes, issue records and debugging logs.</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">
                        <span class="date-tag">2024 - 2026</span>
                    </div>
                    <div class="timeline-content">
                        <h3>Bachelor's Degree | Part-time Undergraduate</h3>
                        <h4>Changsha University of Science and Technology | Computer Science and Technology</h4>
                        <p class="timeline-note"><strong>Core Courses:</strong> Assembly Language and Interface Technology, Operating Systems, Computer Organization Principles, C Programming, Computer Network Principles and Technology, Software Engineering.</p>

                        <h4>Graduation Design | BLE + SoftAP Camera Debugging App</h4>
                        <ul>
                            <li>Built an Android Kotlin debugging app for smart camera/glasses devices as a graduation design project.</li>
                            <li>Implemented BLE device discovery, GATT connection, SoftAP activation commands, Wi-Fi hotspot connection, and TCP SDK communication.</li>
                            <li>Supported live camera preview, audio channel testing, device status reading, factory control, logging, and issue diagnosis.</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">
                        <span class="date-tag">2020 - 2023</span>
                    </div>
                    <div class="timeline-content">
                        <h3>Associate Degree</h3>
                        <h4>Hunan Chemical Industry Polytechnic | Software Technology</h4>
                        <p class="timeline-note"><strong>Core Courses:</strong> Programming Fundamentals (C/C++), Data Structures and Algorithms, Linux Technology and Applications, Software Engineering, Python Programming, Database Principles.</p>
                        <p class="timeline-note"><strong>Awards:</strong> National Second Prize | National Undergraduate Mathematical Contest in Modeling (NUMCM)</p>

                        <h4>Student Union Office | Administrative Assistant</h4>
                        <p class="timeline-note">Planned and coordinated internal activities, sorted and filed official documents to ensure daily office efficiency.</p>
                        <h4>Teaching Assistant</h4>
                        <p class="timeline-note">Provided academic and daily guidance for freshmen.</p>

                        <h4>Online Flower Shop System</h4>
                        <ul>
                            <li>Built a personal online flower shop system based on an existing template, focusing on backend logic adjustment, database design, testing, bug fixes, and technical documentation.</li>
                            <li>Applied object-oriented programming to organize and adjust backend logic, and built relational database tables for data storage.</li>
                            <li>Conducted unit testing and bug fixes, and compiled technical documents.</li>
                        </ul>
                    </div>
                </div>
                `,
                contactTitle: "Contact Me",
                contactEmailLabel: "Email",
                contactEmail: "yirongrong012@gmail.com",
                contactFocusLabel: "Focus",
                contactFocus: "BLE Wearables · Embedded Firmware · MCU Development · IoT Devices",
                contactAvailabilityLabel: "Availability",
                contactAvailability: "Open to job opportunities, freelance projects, and collaboration.",
                cvText: "Download CV",
                cvFile: "CV/Yi_Rongrong_CV.pdf",
                sendEmailText: "Copy Email",
                copiedEmailText: "Email Copied",
                langBtn: "English"
            },
            zh: {
                navHome: "首页",
                navExperience: "经验",
                navPortfolio: "作品",
                navContact: "联系",
                companyProjectsText: "公司项目",
                personalProjectsText: "个人项目",
                keyWorkText: "主要工作",
                backText: "点击返回",
                detailsText: "查看详情",
                mainTitle: "易蓉蓉",
                subtitle: "嵌入式固件工程师",
                aboutTitle: "关于我",
                aboutText: `我是一名嵌入式固件工程师，拥有 4 年智能穿戴量产产品开发经验，参与过智能戒指、手表、手环等产品的固件开发与维护。
<br><br>
我的主要量产项目经验基于中科蓝讯 AB56xx 系列穿戴固件平台，同时也接触过 DA1468x、BK3288/BK32886 相关固件项目。
<br><br>
我的工作内容主要覆盖 Bluetooth/BLE 应用开发、应用层功能维护、UI/显示资源适配、整机固件维护、问题定位、烧录验证，以及客户定制版本的功能修改和问题跟进。
<br><br>
我日常使用 Source Insight、Code::Blocks、Visual Studio、SVN、SEGGER J-Link 和 Git 进行代码阅读、固件开发、调试、版本管理和问题跟踪。
                `,


                expTitle: "工作经历",
                expContent: `
                <div class="timeline-item">
                    <div class="timeline-date">
                        <span class="date-tag">2023 - 至今</span>
                    </div>
                    <div class="timeline-content">
                        <h3>嵌入式固件工程师</h3>
                        <h4>深圳市简云互联科技有限公司</h4>
                        <ul>
                            <li>负责智能穿戴产品的固件开发与维护，包括 AI 手环、智能戒指和智能手表，使用 C/C++ 进行嵌入式功能开发和版本迭代。</li>
                            <li>基于 AB5682C 和 AB202x 平台进行电容触摸屏、显示屏、传感器、充电、马达等外设驱动的移植、适配和调试。</li>
                            <li>实现并优化 BLE 通信相关功能，包括设备配对、数据同步、消息通知处理、OTA/FOTA 支持和连接稳定性调试。</li>
                            <li>配合硬件、测试和生产团队分析缺陷、验证修复结果，并提升量产阶段固件稳定性。</li>
                            <li>使用 SVN 进行代码版本管理，并维护技术文档、发布说明、问题记录和调试日志。</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">
                        <span class="date-tag">2024 - 2026</span>
                    </div>
                    <div class="timeline-content">
                        <h3>本科 | 非全日制</h3>
                        <h4>长沙理工大学 | 计算机科学与技术</h4>
                        <p class="timeline-note"><strong>核心课程：</strong>汇编语言与接口技术、操作系统、计算机组成原理、C 语言程序设计、计算机网络原理与技术、软件工程。</p>

                        <h4>毕业设计 | BLE + SoftAP 摄像头调试 App</h4>
                        <ul>
                            <li>作为毕业设计项目，开发面向智能摄像头/眼镜设备的 Android Kotlin 调试 App。</li>
                            <li>实现 BLE 设备发现、GATT 连接、SoftAP 激活指令、Wi-Fi 热点连接和 TCP SDK 通信流程。</li>
                            <li>支持实时摄像头预览、音频通道测试、设备状态读取、工厂控制、日志记录和问题诊断。</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">
                        <span class="date-tag">2020 - 2023</span>
                    </div>
                    <div class="timeline-content">
                        <h3>大专</h3>
                        <h4>湖南化工职业技术学院 | 软件技术</h4>
                        <p class="timeline-note"><strong>核心课程：</strong>C/C++ 程序设计基础、数据结构与算法、Linux 技术与应用、软件工程、Python 程序设计、数据库原理。</p>
                        <p class="timeline-note"><strong>获奖：</strong>全国大学生数学建模竞赛国家二等奖</p>

                        <h4>学生会办公室 | 行政助理</h4>
                        <p class="timeline-note">策划并协调内部活动，整理和归档正式文件，协助保障办公室日常工作效率。</p>
                        <h4>助教</h4>
                        <p class="timeline-note">为新生提供学习和日常事务方面的指导。</p>

                        <h4>网上花店系统</h4>
                        <ul>
                            <li>基于现有模板搭建个人网上花店系统，重点完成后端逻辑调整、数据库设计、测试、问题修复和技术文档整理。</li>
                            <li>应用面向对象编程方法组织和调整后端逻辑，并建立关系型数据库表用于数据存储。</li>
                            <li>进行单元测试和问题修复，并编写技术文档。</li>
                        </ul>
                    </div>
                </div>
                `,
                contactTitle: "联系我",
                contactEmailLabel: "邮箱",
                contactEmail: "3305855572@qq.com",
                contactFocusLabel: "方向",
                contactFocus: "BLE 可穿戴 · 嵌入式固件 · MCU 开发 · 物联网设备",
                contactAvailabilityLabel: "可联系方向",
                contactAvailability: "开放求职机会、接单项目和技术协作。",
                cvText: "下载简历",
                cvFile: "CV/嵌入式软件工程师-易蓉蓉的简历.pdf",
                sendEmailText: "复制邮箱",
                copiedEmailText: "已复制",
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
            document.querySelector('[data-category="company"]').textContent = t.companyProjectsText;
            document.querySelector('[data-category="personal"]').textContent = t.personalProjectsText;
            
            // 更新标题和 About
            document.getElementById('mainTitle').textContent = t.mainTitle;
            document.getElementById('subtitle').textContent = t.subtitle;
            document.getElementById('aboutTitle').textContent = t.aboutTitle;
            document.getElementById('aboutText').innerHTML = t.aboutText;
            
            // 更新 Experience 标题
            const expTitle = document.getElementById('expTitle');
            if (expTitle) expTitle.textContent = t.expTitle;
            const timeline = document.querySelector('#experience .timeline');
            if (timeline) timeline.innerHTML = t.expContent;
            
            // 更新 Contact 区域
            const contactTitle = document.getElementById('contactTitle');
            const contactEmailLabel = document.getElementById('contactEmailLabel');
            const contactEmail = document.getElementById('contactEmail');
            const contactFocusLabel = document.getElementById('contactFocusLabel');
            const contactFocus = document.getElementById('contactFocus');
            const contactAvailabilityLabel = document.getElementById('contactAvailabilityLabel');
            const contactAvailability = document.getElementById('contactAvailability');
            const cvBtn = document.getElementById('cvBtn');
            const emailBtn = document.getElementById('emailBtn');
            if (contactTitle) contactTitle.textContent = t.contactTitle;
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
            updateCompanyProject();
            updatePersonalProject();
        }

        document.getElementById('langSwitch').addEventListener('click', switchLanguage);

        function copyTextFallback(text) {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.setAttribute('readonly', '');
            textArea.style.position = 'fixed';
            textArea.style.left = '-9999px';
            document.body.appendChild(textArea);
            textArea.select();
            const copied = document.execCommand('copy');
            document.body.removeChild(textArea);
            return copied;
        }

        async function copyContactEmail(event) {
            event.preventDefault();

            const lang = isEnglish ? 'en' : 'zh';
            const t = translations[lang];
            const emailBtn = document.getElementById('emailBtn');

            try {
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(t.contactEmail);
                } else if (!copyTextFallback(t.contactEmail)) {
                    window.location.href = `mailto:${t.contactEmail}`;
                    return;
                }

                if (emailBtn) {
                    emailBtn.textContent = t.copiedEmailText;
                    window.setTimeout(() => {
                        const currentLang = isEnglish ? 'en' : 'zh';
                        emailBtn.textContent = translations[currentLang].sendEmailText;
                    }, 1600);
                }
            } catch (error) {
                window.location.href = `mailto:${t.contactEmail}`;
            }
        }

        document.getElementById('emailBtn').addEventListener('click', copyContactEmail);
        
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
                title: "BLE + SoftAP Camera Debugging App",
                titleZh: "BLE + SoftAP 摄像头调试 App",
                desc: "Android Kotlin debugging tool for smart camera/glasses devices. It uses BLE to discover and activate the device, connects to the device SoftAP Wi-Fi, and builds a TCP SDK link for live camera preview, audio, device status, and factory control.",
                descZh: "基于 Android Kotlin 开发的智能摄像头/眼镜设备调试工具。App 通过 BLE 发现并激活设备，连接设备 SoftAP Wi-Fi，并通过 TCP SDK 建立实时预览、音频、设备状态和工厂控制通道。",
                tags: ["Android", "BLE", "SoftAP", "TCP", "Camera"],
                tagsZh: ["Android", "BLE", "SoftAP", "TCP", "摄像头"],
                keyWork: [
                    "Implemented BLE scanning, device filtering, RSSI-based selection, GATT connection, and notification handling.",
                    "Sent BLE commands to switch the device into SoftAP mode and parsed the returned Wi-Fi SSID.",
                    "Connected to the device hotspot using WifiNetworkSpecifier and bound the app network to SoftAP.",
                    "Integrated the TCP SDK for live preview, audio, device status, and control.",
                    "Added logs and breadcrumbs to diagnose BLE, Wi-Fi, TCP, and preview issues."
                ],
                keyWorkZh: [
                    "实现 BLE 扫描、设备过滤、RSSI 最强设备选择、GATT 连接和通知监听。",
                    "通过 BLE 下发进入 SoftAP 模式的控制命令，并解析设备返回的 Wi-Fi SSID。",
                    "使用 WifiNetworkSpecifier 连接设备热点，并将 App 网络绑定到 SoftAP 连接。",
                    "集成 TCP SDK，实现实时预览、音频、设备状态和控制通道。",
                    "增加日志和 breadcrumb，用于定位 BLE、Wi-Fi、TCP 和预览链路问题。"
                ]
            },
            {
                img: "img/company_projects/G22C/call.jpg",
                title: "G22C Round Smart Watch Firmware Production Project",
                titleZh: "G22C 圆屏智能手表固件量产项目",
                desc: "Production firmware project for a 360x360 round-screen smart watch based on the AB5682C platform, covering UI adaptation, BLE connectivity, FOTA, health features, sports modes, and release packaging.",
                descZh: "基于 AB5682C 平台交付的 360x360 圆屏智能手表固件项目，覆盖 UI 适配、BLE 连接、FOTA、健康功能、运动模式和出货包生成。",
                tags: ["AB5682C", "BLE", "FOTA", "Round UI", "Production"],
                tagsZh: ["AB5682C", "BLE", "FOTA", "圆屏 UI", "量产"],
                keyWork: [
                    "Adapted and debugged round-screen UI, menus, sports modes, settings, and device-side interactions.",
                    "Integrated 360x360 GC9C01 round display, touch input, button/rotary controls, motor alerts, and related peripherals.",
                    "Debugged connectivity features including BLE, ANCS, FOTA, and Bluetooth calling.",
                    "Supported issue investigation and release fixes for heart rate, step counting, sports records, sleep, and other health features.",
                    "Handled customer customization, UI resource packaging, version output, and pre-production issue closure.",
                    "Assisted firmware release packaging, version validation, and pre-production issue closure."
                ],
                keyWorkZh: [
                    "负责圆屏 UI、菜单、运动模式、设置项等功能适配与联调。",
                    "适配 360x360 GC9C01 圆屏显示、触控、按键/旋钮、马达等外设。",
                    "调试 BLE、ANCS、FOTA、蓝牙通话等连接类功能。",
                    "参与心率、计步、运动记录、睡眠等健康功能的问题定位与出货修复。",
                    "处理客户定制需求、资源打包、版本输出和量产前问题闭环。",
                    "协助完成固件出货包生成、版本验证和量产交付前的问题闭环。"
                ]
            },
            {
                img: "img/company_projects/K6/2.jpg",
                title: "Vibration Test System",
                desc: "Vibration testing and analysis for K6 project.",
                tags: ["Vibration", "Testing", "Analysis"]
            },
            {
                img: "img/company_projects/ring/yuya.jpg",
                title: "Tuya BLE Smart Ring Firmware Adaptation",
                titleZh: "Tuya BLE 智能戒指固件适配项目",
                desc: "AB202x-based smart ring firmware adaptation with Tuya BLE protocol integration, device authorization, app binding, health data upload, FOTA, dot-matrix display, sensor collection, and low-power feature debugging.",
                descZh: "基于 AB202x 平台完成一款 Tuya BLE 智能戒指固件适配，负责涂鸦 BLE 协议栈接入、设备授权配置、App 绑定通信、健康数据上报、FOTA 升级、点阵显示、传感器采集和低功耗功能联调。",
                tags: ["AB202x", "Tuya BLE", "FOTA", "Sensors", "Low Power"],
                tagsZh: ["AB202x", "Tuya BLE", "FOTA", "传感器", "低功耗"],
                keyWork: [
                    "Adapted smart ring firmware on the AB202x platform with low-power BLE communication and health data collection.",
                    "Integrated TuyaOS / Tuya BLE protocol features for app binding, device authentication, data synchronization, and OTA upgrade.",
                    "Configured Tuya device authorization information including PID, UUID, AuthKey, BLE advertising, connection, and data reporting logic.",
                    "Supported core smart ring features including heart rate, SpO2, step counting, sleep, brightness, find device, camera control, and message reminders.",
                    "Debugged connection stability, light display, low power behavior, sensor collection, dot-matrix display, and version iteration issues."
                ],
                keyWorkZh: [
                    "基于 AB202x 平台完成智能戒指固件适配，支持低功耗 BLE 通信与健康数据采集。",
                    "接入 TuyaOS / Tuya BLE 协议栈，实现涂鸦 App 绑定、设备认证、数据同步和 OTA 升级能力。",
                    "完成 Tuya 设备 PID、UUID、AuthKey 等授权信息配置，并适配 BLE 广播、连接和数据上报逻辑。",
                    "适配心率、血氧、计步、睡眠、亮度、找设备、拍照控制、消息提醒等智能戒指核心功能。",
                    "参与连接稳定性、灯光显示、低功耗、传感器采集、点阵显示和版本迭代问题调试。"
                ]
            },
            {
                img: "img/company_projects/W25/W25.png",
                title: "W25 Rectangular Smart Watch Firmware Adaptation",
                titleZh: "W25 长方屏智能手表固件适配项目",
                desc: "AB5682C-based firmware adaptation for a 172x320 rectangular-screen smart watch, covering display, touch, UI layout, Bluetooth features, health monitoring, sports modes, notifications, FOTA, and factory test workflows.",
                descZh: "基于 AB5682C 平台完成一款 172x320 长方屏智能手表固件适配，覆盖屏幕显示、触控、UI 布局、蓝牙功能、健康监测、运动模式、消息提醒、FOTA 和工厂测试流程。",
                tags: ["AB5682C", "172x320", "Touch", "FOTA", "Production"],
                tagsZh: ["AB5682C", "172x320", "触控", "FOTA", "量产"],
                keyWork: [
                    "Adapted the 172x320 rectangular-screen UI and layout on the AB5682C wearable firmware platform.",
                    "Integrated the GUI_TFT_JD9853_HSD147_172320 display configuration and CST816D touch solution.",
                    "Debugged full watch features including BLE, ANCS, FOTA, Bluetooth calling, heart rate, step counting, sports modes, messages, women's health, and factory tests.",
                    "Handled screen, touch, UI resource, and hardware-related adaptation issues during firmware integration.",
                    "Supported release package output, upgrade file validation, and pre-production issue closure."
                ],
                keyWorkZh: [
                    "基于 AB5682C 平台适配 172x320 长方屏 UI 和页面布局。",
                    "适配 GUI_TFT_JD9853_HSD147_172320 屏幕方案和 CST816D 触控方案。",
                    "联调 BLE、ANCS、FOTA、蓝牙通话、心率、计步、运动、消息、女性健康和工厂测试等完整手表功能。",
                    "处理屏幕、触控、UI 资源和硬件适配相关问题。",
                    "支持版本出货包输出、升级文件验证和量产前问题闭环。"
                ]
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
        //1.获取所有导航菜单的链接
        const navLinks = document.querySelectorAll('.nav-menu a');
        //2.绑定点击事件
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                //3.移除所有链接的active类名
                navLinks.forEach(nav  => {
                    nav.classList.remove('active')
                });
                //4.给当前点击的链接添加active类名
                this.classList.add('active');
            });
        });


        // 当前索引
        let companyIndex = 0;
        let personalIndex = 0;
        let companyDetailsOpen = false;
        let personalDetailsOpen = false;
        
        // 自动轮播定时器
        let autoInterval;
        const carouselPauseReasons = new Set();

        function getProjectText(project, field) {
            const zhField = `${field}Zh`;
            return !isEnglish && project[zhField] ? project[zhField] : project[field];
        }

        function getCurrentLangText(key) {
            return translations[isEnglish ? 'en' : 'zh'][key];
        }

        function getCurrentProject(type) {
            return type === 'company' ? companyProjects[companyIndex] : personalProjects[personalIndex];
        }

        function renderProjectContent(type, project, detailsOpen) {
            const content = document.querySelector(`#${type}-project-card .project-content`);
            const card = document.getElementById(`${type}-project-card`);
            const carousel = document.querySelector(`#${type}-projects .carousel`);
            const details = getProjectText(project, 'keyWork');

            card.classList.toggle('detail-open', detailsOpen);
            carousel.classList.toggle('detail-open', detailsOpen);

            if (detailsOpen && details && details.length) {
                content.innerHTML = `
                    <button class="project-back-btn" type="button" onclick="closeProjectDetails('${type}')">${getCurrentLangText('backText')}</button>
                    <h3>${getCurrentLangText('keyWorkText')}</h3>
                    <ul class="project-key-work">
                        ${details.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                `;
                return;
            }

            const detailsButton = details && details.length
                ? `<button class="project-more-btn" type="button" onclick="openProjectDetails('${type}')" aria-label="${getCurrentLangText('detailsText')}" title="${getCurrentLangText('detailsText')}">···</button>`
                : '';

            content.innerHTML = `
                <h3 id="${type}-project-title">${getProjectText(project, 'title')}</h3>
                <p id="${type}-project-desc">${getProjectText(project, 'desc')}</p>
                <div class="project-tags" id="${type}-project-tags">
                    ${getProjectText(project, 'tags').map(tag => `<span>${tag}</span>`).join('')}
                </div>
                ${detailsButton}
            `;
        }

        function renderProjectMedia(type, project) {
            const mediaContainer = document.querySelector(`#${type}-project-card .project-image`);
            const mediaId = `${type}-project-img`;
            const altText = getProjectText(project, 'title');
            mediaContainer.classList.toggle('has-video', project.img.endsWith('.mp4'));

            if (project.img.endsWith('.mp4')) {
                mediaContainer.innerHTML = `
                    <video id="${mediaId}" autoplay loop muted playsinline>
                        <source src="${project.img}" type="video/mp4">
                    </video>
                `;
            } else {
                mediaContainer.innerHTML = `<img id="${mediaId}" src="${project.img}" alt="${altText}">`;
            }
        }

        // 更新公司项目显示
        function updateCompanyProject() {
            const project = companyProjects[companyIndex];
            if (project) {
                renderProjectMedia('company', project);
                renderProjectContent('company', project, companyDetailsOpen);
            }
            updateDots('company');
        }

        // 更新个人项目显示
        function updatePersonalProject() {
            const project = personalProjects[personalIndex];
            if (project) {
                renderProjectMedia('personal', project);
                renderProjectContent('personal', project, personalDetailsOpen);
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
                companyDetailsOpen = false;
                resumeCarousel('details');
                companyIndex = (companyIndex + direction + companyProjects.length) % companyProjects.length;
                updateCompanyProject();
            } else {
                personalDetailsOpen = false;
                resumeCarousel('details');
                personalIndex = (personalIndex + direction + personalProjects.length) % personalProjects.length;
                updatePersonalProject();
            }
            resetAutoTimer();
        }

        function openProjectDetails(type) {
            pauseCarousel('details');
            if (type === 'company') {
                companyDetailsOpen = true;
                updateCompanyProject();
            } else {
                personalDetailsOpen = true;
                updatePersonalProject();
            }
        }

        function closeProjectDetails(type) {
            if (type === 'company') {
                companyDetailsOpen = false;
                updateCompanyProject();
            } else {
                personalDetailsOpen = false;
                updatePersonalProject();
            }
            resumeCarousel('details');
        }

        function pauseCarousel(reason) {
            carouselPauseReasons.add(reason);
        }

        function resumeCarousel(reason) {
            carouselPauseReasons.delete(reason);
            if (carouselPauseReasons.size === 0) {
                resetAutoTimer();
            }
        }

        function advanceActiveProject() {
            if (carouselPauseReasons.size > 0) return;

            // 获取当前激活的分类
            const activeContainer = document.querySelector('.projects-container.active-container');
            if (activeContainer && activeContainer.id === 'company-projects') {
                companyIndex = (companyIndex + 1) % companyProjects.length;
                updateCompanyProject();
            } else if (activeContainer && activeContainer.id === 'personal-projects') {
                personalIndex = (personalIndex + 1) % personalProjects.length;
                updatePersonalProject();
            }
        }

        // 重置自动轮播定时器
        function resetAutoTimer() {
            if (autoInterval) clearInterval(autoInterval);
            autoInterval = setInterval(advanceActiveProject, 5000);
        }

        function setupCarouselPause() {
            document.querySelectorAll('.carousel').forEach(carousel => {
                carousel.addEventListener('mouseenter', () => pauseCarousel('hover'));
                carousel.addEventListener('mouseleave', () => resumeCarousel('hover'));
                carousel.addEventListener('pointerdown', () => pauseCarousel('press'));
                carousel.addEventListener('pointerup', () => resumeCarousel('press'));
                carousel.addEventListener('pointercancel', () => resumeCarousel('press'));
                carousel.addEventListener('focusin', () => pauseCarousel('focus'));
                carousel.addEventListener('focusout', () => resumeCarousel('focus'));
            });
        }

        function openImageLightbox(type) {
            const project = getCurrentProject(type);
            if (!project || project.img.endsWith('.mp4')) return;

            const lightbox = document.getElementById('imageLightbox');
            const lightboxImage = document.getElementById('lightboxImage');
            const lightboxCaption = document.getElementById('lightboxCaption');

            lightboxImage.src = project.img;
            lightboxImage.alt = getProjectText(project, 'title');
            lightboxCaption.textContent = getProjectText(project, 'title');
            lightbox.classList.add('open');
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            pauseCarousel('lightbox');
        }

        function closeImageLightbox() {
            const lightbox = document.getElementById('imageLightbox');
            const lightboxImage = document.getElementById('lightboxImage');

            lightbox.classList.remove('open');
            lightbox.setAttribute('aria-hidden', 'true');
            lightboxImage.src = '';
            document.body.style.overflow = '';
            resumeCarousel('lightbox');
        }

        function setupImageLightbox() {
            document.getElementById('company-project-card').querySelector('.project-image').addEventListener('click', () => openImageLightbox('company'));
            document.getElementById('personal-project-card').querySelector('.project-image').addEventListener('click', () => openImageLightbox('personal'));
            document.getElementById('lightboxClose').addEventListener('click', closeImageLightbox);
            document.getElementById('imageLightbox').addEventListener('click', event => {
                if (event.target.id === 'imageLightbox') {
                    closeImageLightbox();
                }
            });
            document.addEventListener('keydown', event => {
                if (event.key === 'Escape' && document.getElementById('imageLightbox').classList.contains('open')) {
                    closeImageLightbox();
                }
            });
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
                    personalDetailsOpen = false;
                    resumeCarousel('details');
                    companyContainer.classList.add('active-container');
                    personalContainer.classList.remove('active-container');
                    updatePersonalProject();
                    updateCompanyProject();
                    resetAutoTimer();
                } else {
                    companyDetailsOpen = false;
                    resumeCarousel('details');
                    personalContainer.classList.add('active-container');
                    companyContainer.classList.remove('active-container');
                    updateCompanyProject();
                    updatePersonalProject();
                    resetAutoTimer();
                }
            });
        });


        // 初始化
        setupCarouselPause();
        setupImageLightbox();
        updateCompanyProject();
        updatePersonalProject();
        resetAutoTimer();
        
        // 将 changeProject 挂载到 window 对象
        window.changeProject = changeProject;
        window.openProjectDetails = openProjectDetails;
        window.closeProjectDetails = closeProjectDetails;
