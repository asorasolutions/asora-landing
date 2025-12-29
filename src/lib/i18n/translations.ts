/**
 * Translations for Asora Solutions
 * Supports English and Spanish
 */

export type Locale = 'en' | 'es';

export const translations = {
  en: {
    // Navigation
    nav: {
      services: 'Services',
      solutions: 'Solutions',
      about: 'About',
      faq: 'FAQ',
      contact: 'Contact',
      getStarted: 'Get Started',
    },

    // Hero
    hero: {
      badge: 'AI-Powered Business Solutions',
      headline1: 'Transform Your Business',
      headline2: 'Through Intelligent Technology',
      description:
        'We deliver AI-powered solutions, custom software development, and digital transformation services that drive measurable business results.',
      cta1: 'Explore Solutions',
      cta2: 'Book a Consultation',
      scroll: 'Scroll',
      demo: {
        status: 'Ready to assist',
        userMessage: 'How can AI help my business grow?',
        aiMessage: 'I can automate customer service, qualify leads 24/7, and provide data-driven insights to boost your revenue.',
      },
      workflow: {
        title: 'AI Automation',
        subtitle: 'Real-time processing',
        active: 'Active',
        input: 'Input',
        inputStatus: 'Request received',
        processing: 'Processing',
        processingStatus: 'AI analyzing data...',
        output: 'Output',
        outputStatus: 'Results delivered',
        currentStatus: 'Current Status',
        step: 'Step',
        efficiency: 'Efficiency',
      },
    },

    // Stats
    stats: {
      clients: 'Clients Served',
      projects: 'Projects Delivered',
      satisfaction: 'Client Satisfaction',
      support: 'AI Support',
    },

    // Services
    services: {
      sectionLabel: 'What We Offer',
      title: 'Comprehensive',
      titleHighlight: 'Solutions',
      titleEnd: 'for Modern Businesses',
      description:
        'From AI-powered automation to custom software development, we provide end-to-end technology solutions tailored to your needs.',

      // Categories
      consulting: {
        title: 'Consulting & Implementation',
        subtitle: 'Digital Transformation Experts',
        description:
          'Strategic consulting and hands-on implementation to modernize your technology infrastructure.',
      },
      marketing: {
        title: 'Marketing & Content',
        subtitle: 'AI-Powered Creative Solutions',
        description:
          'Leverage artificial intelligence to create, distribute, and optimize your marketing content at scale.',
      },
      infrastructure: {
        title: 'Technology Infrastructure',
        subtitle: 'Enterprise Cloud Solutions',
        description:
          'Build a robust, secure, and scalable technology foundation for your digital operations.',
      },

      // Individual services
      items: {
        aiAssistants: {
          title: 'AI Virtual Assistants',
          description:
            'Industry-specific conversational AI for customer service, appointment scheduling, and information management.',
        },
        leadIntelligence: {
          title: 'Lead Intelligence Platform',
          description:
            'Automated prospect discovery, qualification, and outreach for service-based businesses.',
        },
        workflowAutomation: {
          title: 'Workflow Automation Engine',
          description:
            'Process optimization and task automation for repetitive business operations.',
        },
        analytics: {
          title: 'Performance Analytics Dashboard',
          description: 'Real-time business metrics and predictive insights.',
        },
        contentDistribution: {
          title: 'Multi-Platform Content Distribution',
          description:
            'Unified content creation, scheduling, and publishing across social media channels.',
        },
        aiIntegration: {
          title: 'AI Integration Strategy',
          description:
            'Assessment, planning, and implementation of AI tools for business processes.',
        },
        legacyModernization: {
          title: 'Legacy System Modernization',
          description:
            'Migration planning and execution for outdated technology infrastructure.',
        },
        processOptimization: {
          title: 'Process Optimization Audits',
          description:
            'Comprehensive workflow analysis and improvement recommendations.',
        },
        enterpriseDev: {
          title: 'Enterprise Application Development',
          description: 'Tailored software solutions for specific business requirements.',
        },
        apiIntegration: {
          title: 'API Integration Services',
          description: 'Connecting disparate systems and third-party applications.',
        },
        mobileDev: {
          title: 'Mobile Application Development',
          description: 'Native and progressive web applications.',
        },
        uiux: {
          title: 'UI/UX Design Services',
          description:
            'User interface design, user experience optimization, and usability testing.',
        },
        aiContent: {
          title: 'AI Content Production',
          description: 'Blog posts, social media copy, product descriptions, and scripts.',
        },
        videoAudio: {
          title: 'Video & Audio Creation',
          description: 'AI voiceovers, video editing, podcast production, and shorts.',
        },
        visualDesign: {
          title: 'Visual Design Assets',
          description: 'Logos, graphics, brand guidelines, and marketing materials.',
        },
        multiPlatform: {
          title: 'Multi-Platform Publishing',
          description: 'Automated content distribution across social channels.',
        },
        analyticsTracking: {
          title: 'Analytics & Performance Tracking',
          description: 'ROI measurement, A/B testing, and campaign optimization.',
        },
        seo: {
          title: 'SEO & Web Strategy',
          description:
            'Technical SEO, keyword strategy, and search visibility optimization.',
        },
        cloudMigration: {
          title: 'Cloud Migration Services',
          description: 'AWS, Azure, Google Cloud implementation and optimization.',
        },
        security: {
          title: 'Security Implementation',
          description: 'Cybersecurity audits, implementation, and monitoring.',
        },
        systemIntegration: {
          title: 'System Integration',
          description: 'Enterprise software connectivity and data synchronization.',
        },
      },
    },

    // Chat Demo
    chatDemo: {
      sectionLabel: 'AI in Action',
      title: 'Experience Our',
      titleHighlight: 'AI Assistants',
      description:
        'See how our AI-powered virtual assistants handle real business scenarios. From customer service to lead qualification and appointment scheduling, watch intelligent automation in action.',
      scenarios: {
        customerService: {
          title: 'Customer Service',
          description: 'See how our AI handles customer inquiries',
        },
        leadQualification: {
          title: 'Lead Qualification',
          description: 'Watch AI qualify and nurture leads',
        },
        appointment: {
          title: 'Appointment Booking',
          description: 'Seamless scheduling automation',
        },
      },
      online: 'Online',
      replay: 'Replay',
      demoNote: 'This is a demo - messages are simulated',
    },

    // About
    about: {
      sectionLabel: 'Why Choose Us',
      title: 'Your Partner in',
      titleHighlight: 'Digital Excellence',
      description:
        'We combine cutting-edge technology with strategic thinking to deliver solutions that transform businesses and drive sustainable growth.',
      features: {
        resultsDriven: {
          title: 'Results-Driven',
          description:
            'We focus on delivering measurable outcomes that directly impact your bottom line and business growth.',
        },
        expertTeam: {
          title: 'Expert Team',
          description:
            'Our specialists bring deep expertise in AI, software development, and digital transformation.',
        },
        rapidDelivery: {
          title: 'Rapid Delivery',
          description:
            'Agile methodologies and proven processes ensure fast time-to-value for your projects.',
        },
        qualityFirst: {
          title: 'Quality First',
          description:
            'We maintain the highest standards in code quality, security, and user experience.',
        },
      },
      mission:
        'Our mission is to empower businesses with intelligent technology solutions that automate processes, enhance decision-making, and unlock new opportunities for growth.',
      missionAuthor: 'Asora Solutions Team',
      expertise: {
        title: 'Asora Team',
        subtitle: 'Expert Solutions',
        projects: 'Projects',
        satisfaction: 'Satisfaction',
        experts: 'Experts',
        expertiseLabel: 'Expertise',
        aiMl: 'AI/ML',
        cloud: 'Cloud',
        analytics: 'Analytics',
        activeDev: 'Active Development',
        projectsInProgress: 'projects in progress',
        live: 'Live',
        topRated: 'Top Rated',
        rating: 'Rating',
      },
    },

    // Contact
    contact: {
      sectionLabel: 'Get in Touch',
      title: 'Ready to',
      titleHighlight: 'Transform',
      titleEnd: 'Your Business?',
      description:
        "Schedule a consultation with our team to discuss how we can help you leverage AI and technology to achieve your business goals. We'll analyze your needs and create a customized solution strategy.",
      email: 'Email us',
      phone: 'Call us',
      location: 'Location',
      sendEmail: 'Send an Email',
      callNow: 'Call Now',
      bookConsultation: 'Book a Consultation',
      bookDescription:
        "Choose a time that works for you and let's discuss your project requirements.",
      benefits: {
        freeCall: 'Free 30-minute discovery call',
        personalized: 'Personalized solution recommendations',
        noCommitment: 'No commitment required',
      },
      scheduleButton: 'Schedule with Google Calendar',
      availability: 'Available Monday - Friday, 9 AM - 6 PM EST',
    },

    // FAQ
    faq: {
      sectionLabel: 'FAQ',
      title: 'Frequently Asked',
      titleHighlight: 'Questions',
      description: 'Find answers to common questions about our services, process, and technology.',
      moreQuestions: 'Still have questions?',
      contactUs: 'Contact us',
      items: {
        services: {
          question: 'What services does Asora Solutions offer?',
          answer: 'We offer a comprehensive range of AI-powered business solutions including SaaS products (AI virtual assistants, lead intelligence, workflow automation), consulting & implementation services, marketing & content creation, and technology infrastructure solutions. Our services are designed to help businesses automate processes, enhance decision-making, and drive sustainable growth.',
        },
        pricing: {
          question: 'How does your pricing work?',
          answer: 'Our pricing is tailored to each client\'s specific needs and project scope. We offer flexible engagement models including project-based pricing, monthly retainers, and subscription plans for our SaaS products. During our free consultation, we\'ll discuss your requirements and provide a detailed proposal with transparent pricing.',
        },
        timeline: {
          question: 'How long does a typical project take?',
          answer: 'Project timelines vary based on complexity and scope. Simple AI integrations can be completed in 2-4 weeks, while comprehensive digital transformation projects may take 2-6 months. During our initial consultation, we\'ll provide a detailed timeline based on your specific requirements and priorities.',
        },
        process: {
          question: 'What does your development process look like?',
          answer: 'We follow an agile methodology with clear phases: Discovery (understanding your needs), Planning (creating a detailed roadmap), Development (iterative building with regular check-ins), Testing (thorough quality assurance), and Deployment (smooth launch with ongoing support). You\'ll have visibility throughout the entire process.',
        },
        technology: {
          question: 'What technologies do you work with?',
          answer: 'We work with cutting-edge technologies including modern AI/ML frameworks (OpenAI, Claude, custom models), cloud platforms (AWS, Azure, Google Cloud), web technologies (React, Next.js, Node.js), and enterprise integration tools. We select the best technology stack based on your specific needs and existing infrastructure.',
        },
        support: {
          question: 'Do you provide ongoing support after project completion?',
          answer: 'Yes, we offer comprehensive post-launch support including 24/7 AI-powered monitoring, regular maintenance updates, performance optimization, and dedicated account management. Our support packages are flexible and can be customized to match your operational requirements.',
        },
      },
    },

    // Footer
    footer: {
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'All rights reserved.',
    },

    // Service Page
    servicePage: {
      whatWeOffer: 'What We Offer',
      offerDescription: 'Explore our comprehensive range of solutions designed to transform your business.',
    },

    // Privacy Policy
    privacy: {
      lastUpdated: 'Last updated',
      intro: 'At Asora Solutions, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.',
      informationCollect: 'Information We Collect',
      informationCollectContent: 'We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, and any other information you choose to provide.',
      howWeUse: 'How We Use Your Information',
      howWeUseContent: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.',
      informationSharing: 'Information Sharing',
      informationSharingContent: 'We do not share your personal information with third parties except as described in this policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.',
      dataSecurity: 'Data Security',
      dataSecurityContent: 'We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. We use industry-standard encryption and security protocols.',
      cookies: 'Cookies and Tracking',
      cookiesContent: 'We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.',
      yourRights: 'Your Rights',
      yourRightsContent: 'You have the right to access, update, or delete your personal information at any time. You may also opt out of receiving promotional communications from us by following the instructions in those messages.',
      changes: 'Changes to This Policy',
      changesContent: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.',
      contact: 'Contact Us',
      contactContent: 'If you have any questions about this Privacy Policy, please contact us at contact@asorasolutions.com.',
    },

    // Terms of Service
    terms: {
      lastUpdated: 'Last updated',
      intro: 'Welcome to Asora Solutions. These Terms of Service govern your use of our website and services. Please read these terms carefully before using our services.',
      acceptance: 'Acceptance of Terms',
      acceptanceContent: 'By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.',
      services: 'Our Services',
      servicesContent: 'Asora Solutions provides AI-powered business solutions, consulting services, software development, and digital transformation services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.',
      userObligations: 'User Obligations',
      userObligationsContent: 'You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
      intellectualProperty: 'Intellectual Property',
      intellectualPropertyContent: 'All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the exclusive property of Asora Solutions and are protected by copyright, trademark, and other intellectual property laws.',
      payment: 'Payment Terms',
      paymentContent: 'Payment terms are specified in individual service agreements. All fees are non-refundable unless otherwise stated in writing. We reserve the right to modify our pricing with reasonable notice to existing customers.',
      limitation: 'Limitation of Liability',
      limitationContent: 'Asora Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you for the services in the twelve months preceding the claim.',
      indemnification: 'Indemnification',
      indemnificationContent: 'You agree to indemnify and hold harmless Asora Solutions and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.',
      termination: 'Termination',
      terminationContent: 'We may terminate or suspend your access to our services immediately, without prior notice, for any breach of these Terms of Service. Upon termination, your right to use our services will cease immediately.',
      governing: 'Governing Law',
      governingContent: 'These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Asora Solutions operates, without regard to its conflict of law provisions.',
      changes: 'Changes to Terms',
      changesContent: 'We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page. Your continued use of our services after such modifications constitutes acceptance of the updated terms.',
      contact: 'Contact Information',
      contactContent: 'For any questions regarding these Terms of Service, please contact us at contact@asorasolutions.com.',
    },
  },

  es: {
    // Navigation
    nav: {
      services: 'Servicios',
      solutions: 'Soluciones',
      about: 'Nosotros',
      faq: 'FAQ',
      contact: 'Contacto',
      getStarted: 'Comenzar',
    },

    // Hero
    hero: {
      badge: 'Soluciones Empresariales con IA',
      headline1: 'Transforma Tu Negocio',
      headline2: 'Con Tecnología Inteligente',
      description:
        'Ofrecemos soluciones impulsadas por IA, desarrollo de software personalizado y servicios de transformación digital que generan resultados medibles.',
      cta1: 'Explorar Soluciones',
      cta2: 'Agendar Consulta',
      scroll: 'Desplazar',
      demo: {
        status: 'Listo para asistir',
        userMessage: '¿Cómo puede la IA ayudar a crecer mi negocio?',
        aiMessage: 'Puedo automatizar el servicio al cliente, calificar leads 24/7 y proporcionar insights basados en datos para aumentar tus ingresos.',
      },
      workflow: {
        title: 'Automatización IA',
        subtitle: 'Procesamiento en tiempo real',
        active: 'Activo',
        input: 'Entrada',
        inputStatus: 'Solicitud recibida',
        processing: 'Procesando',
        processingStatus: 'IA analizando datos...',
        output: 'Salida',
        outputStatus: 'Resultados entregados',
        currentStatus: 'Estado Actual',
        step: 'Paso',
        efficiency: 'Eficiencia',
      },
    },

    // Stats
    stats: {
      clients: 'Clientes Atendidos',
      projects: 'Proyectos Entregados',
      satisfaction: 'Satisfacción del Cliente',
      support: 'Soporte IA',
    },

    // Services
    services: {
      sectionLabel: 'Lo Que Ofrecemos',
      title: 'Soluciones',
      titleHighlight: 'Integrales',
      titleEnd: 'para Empresas Modernas',
      description:
        'Desde automatización impulsada por IA hasta desarrollo de software personalizado, proporcionamos soluciones tecnológicas de extremo a extremo adaptadas a tus necesidades.',

      // Categories
      consulting: {
        title: 'Consultoría e Implementación',
        subtitle: 'Expertos en Transformación Digital',
        description:
          'Consultoría estratégica e implementación práctica para modernizar tu infraestructura tecnológica.',
      },
      marketing: {
        title: 'Marketing y Contenido',
        subtitle: 'Soluciones Creativas con IA',
        description:
          'Aprovecha la inteligencia artificial para crear, distribuir y optimizar tu contenido de marketing a escala.',
      },
      infrastructure: {
        title: 'Infraestructura Tecnológica',
        subtitle: 'Soluciones Cloud Empresariales',
        description:
          'Construye una base tecnológica robusta, segura y escalable para tus operaciones digitales.',
      },

      // Individual services
      items: {
        aiAssistants: {
          title: 'Asistentes Virtuales IA',
          description:
            'IA conversacional específica por industria para servicio al cliente, programación de citas y gestión de información.',
        },
        leadIntelligence: {
          title: 'Plataforma de Inteligencia de Leads',
          description:
            'Descubrimiento automatizado de prospectos, calificación y alcance para empresas de servicios.',
        },
        workflowAutomation: {
          title: 'Motor de Automatización de Flujos',
          description:
            'Optimización de procesos y automatización de tareas para operaciones comerciales repetitivas.',
        },
        analytics: {
          title: 'Dashboard de Análisis de Rendimiento',
          description: 'Métricas empresariales en tiempo real e insights predictivos.',
        },
        contentDistribution: {
          title: 'Distribución de Contenido Multiplataforma',
          description:
            'Creación, programación y publicación unificada de contenido en redes sociales.',
        },
        aiIntegration: {
          title: 'Estrategia de Integración de IA',
          description:
            'Evaluación, planificación e implementación de herramientas de IA para procesos empresariales.',
        },
        legacyModernization: {
          title: 'Modernización de Sistemas Legacy',
          description:
            'Planificación y ejecución de migración para infraestructura tecnológica obsoleta.',
        },
        processOptimization: {
          title: 'Auditorías de Optimización de Procesos',
          description:
            'Análisis integral de flujos de trabajo y recomendaciones de mejora.',
        },
        enterpriseDev: {
          title: 'Desarrollo de Aplicaciones Empresariales',
          description:
            'Soluciones de software personalizadas para requisitos empresariales específicos.',
        },
        apiIntegration: {
          title: 'Servicios de Integración de APIs',
          description: 'Conexión de sistemas dispares y aplicaciones de terceros.',
        },
        mobileDev: {
          title: 'Desarrollo de Aplicaciones Móviles',
          description: 'Aplicaciones nativas y web progresivas.',
        },
        uiux: {
          title: 'Servicios de Diseño UI/UX',
          description:
            'Diseño de interfaz de usuario, optimización de experiencia y pruebas de usabilidad.',
        },
        aiContent: {
          title: 'Producción de Contenido con IA',
          description:
            'Artículos de blog, copy para redes sociales, descripciones de productos y guiones.',
        },
        videoAudio: {
          title: 'Creación de Video y Audio',
          description:
            'Voces en off con IA, edición de video, producción de podcasts y shorts.',
        },
        visualDesign: {
          title: 'Activos de Diseño Visual',
          description:
            'Logos, gráficos, guías de marca y materiales de marketing.',
        },
        multiPlatform: {
          title: 'Publicación Multiplataforma',
          description: 'Distribución automatizada de contenido en canales sociales.',
        },
        analyticsTracking: {
          title: 'Análisis y Seguimiento de Rendimiento',
          description: 'Medición de ROI, pruebas A/B y optimización de campañas.',
        },
        seo: {
          title: 'SEO y Estrategia Web',
          description:
            'SEO técnico, estrategia de palabras clave y optimización de visibilidad en búsquedas.',
        },
        cloudMigration: {
          title: 'Servicios de Migración Cloud',
          description: 'Implementación y optimización de AWS, Azure y Google Cloud.',
        },
        security: {
          title: 'Implementación de Seguridad',
          description: 'Auditorías de ciberseguridad, implementación y monitoreo.',
        },
        systemIntegration: {
          title: 'Integración de Sistemas',
          description:
            'Conectividad de software empresarial y sincronización de datos.',
        },
      },
    },

    // Chat Demo
    chatDemo: {
      sectionLabel: 'IA en Acción',
      title: 'Experimenta Nuestros',
      titleHighlight: 'Asistentes IA',
      description:
        'Observa cómo nuestros asistentes virtuales impulsados por IA manejan escenarios empresariales reales. Desde servicio al cliente hasta calificación de leads y programación de citas, ve la automatización inteligente en acción.',
      scenarios: {
        customerService: {
          title: 'Servicio al Cliente',
          description: 'Ve cómo nuestra IA maneja consultas de clientes',
        },
        leadQualification: {
          title: 'Calificación de Leads',
          description: 'Observa cómo la IA califica y nutre leads',
        },
        appointment: {
          title: 'Reserva de Citas',
          description: 'Automatización de programación sin fricciones',
        },
      },
      online: 'En línea',
      replay: 'Repetir',
      demoNote: 'Esto es una demo - los mensajes son simulados',
    },

    // About
    about: {
      sectionLabel: 'Por Qué Elegirnos',
      title: 'Tu Socio en',
      titleHighlight: 'Excelencia Digital',
      description:
        'Combinamos tecnología de vanguardia con pensamiento estratégico para entregar soluciones que transforman empresas e impulsan el crecimiento sostenible.',
      features: {
        resultsDriven: {
          title: 'Orientados a Resultados',
          description:
            'Nos enfocamos en entregar resultados medibles que impactan directamente tu rentabilidad y crecimiento empresarial.',
        },
        expertTeam: {
          title: 'Equipo Experto',
          description:
            'Nuestros especialistas aportan profunda experiencia en IA, desarrollo de software y transformación digital.',
        },
        rapidDelivery: {
          title: 'Entrega Rápida',
          description:
            'Metodologías ágiles y procesos probados aseguran un rápido tiempo de valor para tus proyectos.',
        },
        qualityFirst: {
          title: 'Calidad Primero',
          description:
            'Mantenemos los más altos estándares en calidad de código, seguridad y experiencia de usuario.',
        },
      },
      mission:
        'Nuestra misión es empoderar a las empresas con soluciones tecnológicas inteligentes que automatizan procesos, mejoran la toma de decisiones y desbloquean nuevas oportunidades de crecimiento.',
      missionAuthor: 'Equipo Asora Solutions',
      expertise: {
        title: 'Equipo Asora',
        subtitle: 'Soluciones Expertas',
        projects: 'Proyectos',
        satisfaction: 'Satisfacción',
        experts: 'Expertos',
        expertiseLabel: 'Experiencia',
        aiMl: 'IA/ML',
        cloud: 'Nube',
        analytics: 'Analítica',
        activeDev: 'Desarrollo Activo',
        projectsInProgress: 'proyectos en progreso',
        live: 'En Vivo',
        topRated: 'Mejor Valorado',
        rating: 'Calificación',
      },
    },

    // Contact
    contact: {
      sectionLabel: 'Contáctanos',
      title: '¿Listo para',
      titleHighlight: 'Transformar',
      titleEnd: 'Tu Negocio?',
      description:
        'Agenda una consulta con nuestro equipo para discutir cómo podemos ayudarte a aprovechar la IA y la tecnología para alcanzar tus objetivos empresariales. Analizaremos tus necesidades y crearemos una estrategia de solución personalizada.',
      email: 'Escríbenos',
      phone: 'Llámanos',
      location: 'Ubicación',
      sendEmail: 'Enviar Email',
      callNow: 'Llamar Ahora',
      bookConsultation: 'Agendar Consulta',
      bookDescription:
        'Elige un horario que te funcione y discutamos los requisitos de tu proyecto.',
      benefits: {
        freeCall: 'Llamada de descubrimiento gratuita de 30 minutos',
        personalized: 'Recomendaciones de solución personalizadas',
        noCommitment: 'Sin compromiso requerido',
      },
      scheduleButton: 'Agendar con Google Calendar',
      availability: 'Disponible Lunes - Viernes, 9 AM - 6 PM EST',
    },

    // FAQ
    faq: {
      sectionLabel: 'FAQ',
      title: 'Preguntas',
      titleHighlight: 'Frecuentes',
      description: 'Encuentra respuestas a preguntas comunes sobre nuestros servicios, proceso y tecnología.',
      moreQuestions: '¿Aún tienes preguntas?',
      contactUs: 'Contáctanos',
      items: {
        services: {
          question: '¿Qué servicios ofrece Asora Solutions?',
          answer: 'Ofrecemos una amplia gama de soluciones empresariales impulsadas por IA, incluyendo productos SaaS (asistentes virtuales IA, inteligencia de leads, automatización de flujos de trabajo), servicios de consultoría e implementación, creación de marketing y contenido, y soluciones de infraestructura tecnológica. Nuestros servicios están diseñados para ayudar a las empresas a automatizar procesos, mejorar la toma de decisiones e impulsar el crecimiento sostenible.',
        },
        pricing: {
          question: '¿Cómo funciona su modelo de precios?',
          answer: 'Nuestros precios se adaptan a las necesidades específicas de cada cliente y el alcance del proyecto. Ofrecemos modelos de contratación flexibles incluyendo precios por proyecto, retenciones mensuales y planes de suscripción para nuestros productos SaaS. Durante nuestra consulta gratuita, discutiremos tus requisitos y proporcionaremos una propuesta detallada con precios transparentes.',
        },
        timeline: {
          question: '¿Cuánto tiempo toma un proyecto típico?',
          answer: 'Los tiempos de proyecto varían según la complejidad y el alcance. Las integraciones simples de IA pueden completarse en 2-4 semanas, mientras que los proyectos integrales de transformación digital pueden tomar 2-6 meses. Durante nuestra consulta inicial, proporcionaremos un cronograma detallado basado en tus requisitos y prioridades específicas.',
        },
        process: {
          question: '¿Cómo es su proceso de desarrollo?',
          answer: 'Seguimos una metodología ágil con fases claras: Descubrimiento (entender tus necesidades), Planificación (crear una hoja de ruta detallada), Desarrollo (construcción iterativa con revisiones regulares), Pruebas (aseguramiento de calidad exhaustivo) y Despliegue (lanzamiento fluido con soporte continuo). Tendrás visibilidad durante todo el proceso.',
        },
        technology: {
          question: '¿Con qué tecnologías trabajan?',
          answer: 'Trabajamos con tecnologías de vanguardia incluyendo frameworks modernos de IA/ML (OpenAI, Claude, modelos personalizados), plataformas cloud (AWS, Azure, Google Cloud), tecnologías web (React, Next.js, Node.js) y herramientas de integración empresarial. Seleccionamos el mejor stack tecnológico basado en tus necesidades específicas e infraestructura existente.',
        },
        support: {
          question: '¿Ofrecen soporte continuo después de completar el proyecto?',
          answer: 'Sí, ofrecemos soporte integral post-lanzamiento incluyendo monitoreo 24/7 impulsado por IA, actualizaciones de mantenimiento regulares, optimización de rendimiento y gestión de cuenta dedicada. Nuestros paquetes de soporte son flexibles y pueden personalizarse para adaptarse a tus requisitos operacionales.',
        },
      },
    },

    // Footer
    footer: {
      quickLinks: 'Enlaces Rápidos',
      services: 'Servicios',
      contact: 'Contacto',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      rights: 'Todos los derechos reservados.',
    },

    // Service Page
    servicePage: {
      whatWeOffer: 'Lo Que Ofrecemos',
      offerDescription: 'Explora nuestra amplia gama de soluciones diseñadas para transformar tu negocio.',
    },

    // Privacy Policy
    privacy: {
      lastUpdated: 'Última actualización',
      intro: 'En Asora Solutions, nos tomamos tu privacidad en serio. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información cuando visitas nuestro sitio web o utilizas nuestros servicios.',
      informationCollect: 'Información que Recopilamos',
      informationCollectContent: 'Recopilamos información que nos proporcionas directamente, como cuando creas una cuenta, realizas una compra o nos contactas para soporte. Esto puede incluir tu nombre, dirección de correo electrónico, número de teléfono y cualquier otra información que elijas proporcionar.',
      howWeUse: 'Cómo Usamos Tu Información',
      howWeUseContent: 'Usamos la información que recopilamos para proporcionar, mantener y mejorar nuestros servicios, procesar transacciones, enviarte avisos técnicos y mensajes de soporte, y responder a tus comentarios y preguntas.',
      informationSharing: 'Compartir Información',
      informationSharingContent: 'No compartimos tu información personal con terceros excepto como se describe en esta política. Podemos compartir información con proveedores, consultores y otros proveedores de servicios que necesitan acceso a dicha información para realizar trabajo en nuestro nombre.',
      dataSecurity: 'Seguridad de Datos',
      dataSecurityContent: 'Tomamos medidas razonables para ayudar a proteger la información sobre ti contra pérdida, robo, uso indebido, acceso no autorizado, divulgación, alteración y destrucción. Utilizamos cifrado y protocolos de seguridad estándar de la industria.',
      cookies: 'Cookies y Seguimiento',
      cookiesContent: 'Utilizamos cookies y tecnologías de seguimiento similares para rastrear la actividad en nuestro sitio web y mantener cierta información. Puedes instruir a tu navegador para que rechace todas las cookies o para que indique cuándo se está enviando una cookie.',
      yourRights: 'Tus Derechos',
      yourRightsContent: 'Tienes derecho a acceder, actualizar o eliminar tu información personal en cualquier momento. También puedes optar por no recibir comunicaciones promocionales de nuestra parte siguiendo las instrucciones en esos mensajes.',
      changes: 'Cambios a Esta Política',
      changesContent: 'Podemos actualizar esta política de privacidad de vez en cuando. Te notificaremos de cualquier cambio publicando la nueva política en esta página y actualizando la fecha de "Última Actualización".',
      contact: 'Contáctanos',
      contactContent: 'Si tienes alguna pregunta sobre esta Política de Privacidad, contáctanos en contact@asorasolutions.com.',
    },

    // Terms of Service
    terms: {
      lastUpdated: 'Última actualización',
      intro: 'Bienvenido a Asora Solutions. Estos Términos de Servicio rigen tu uso de nuestro sitio web y servicios. Por favor lee estos términos cuidadosamente antes de usar nuestros servicios.',
      acceptance: 'Aceptación de Términos',
      acceptanceContent: 'Al acceder o usar nuestros servicios, aceptas estar sujeto a estos Términos de Servicio y todas las leyes y regulaciones aplicables. Si no estás de acuerdo con alguno de estos términos, tienes prohibido usar nuestros servicios.',
      services: 'Nuestros Servicios',
      servicesContent: 'Asora Solutions proporciona soluciones empresariales impulsadas por IA, servicios de consultoría, desarrollo de software y servicios de transformación digital. Nos reservamos el derecho de modificar, suspender o descontinuar cualquier aspecto de nuestros servicios en cualquier momento.',
      userObligations: 'Obligaciones del Usuario',
      userObligationsContent: 'Aceptas usar nuestros servicios solo para fines legales y de acuerdo con estos términos. Eres responsable de mantener la confidencialidad de las credenciales de tu cuenta y de todas las actividades que ocurran bajo tu cuenta.',
      intellectualProperty: 'Propiedad Intelectual',
      intellectualPropertyContent: 'Todo el contenido, características y funcionalidad de nuestros servicios, incluyendo pero no limitado a texto, gráficos, logotipos y software, son propiedad exclusiva de Asora Solutions y están protegidos por derechos de autor, marcas registradas y otras leyes de propiedad intelectual.',
      payment: 'Términos de Pago',
      paymentContent: 'Los términos de pago se especifican en los acuerdos de servicio individuales. Todas las tarifas no son reembolsables a menos que se indique lo contrario por escrito. Nos reservamos el derecho de modificar nuestros precios con aviso razonable a los clientes existentes.',
      limitation: 'Limitación de Responsabilidad',
      limitationContent: 'Asora Solutions no será responsable de ningún daño indirecto, incidental, especial, consecuente o punitivo resultante de tu uso de nuestros servicios. Nuestra responsabilidad total no excederá el monto pagado por ti por los servicios en los doce meses anteriores a la reclamación.',
      indemnification: 'Indemnización',
      indemnificationContent: 'Aceptas indemnizar y mantener indemne a Asora Solutions y sus oficiales, directores, empleados y agentes de cualquier reclamación, daño, pérdida o gasto que surja de tu uso de nuestros servicios o violación de estos términos.',
      termination: 'Terminación',
      terminationContent: 'Podemos terminar o suspender tu acceso a nuestros servicios inmediatamente, sin previo aviso, por cualquier incumplimiento de estos Términos de Servicio. Al terminar, tu derecho a usar nuestros servicios cesará inmediatamente.',
      governing: 'Ley Aplicable',
      governingContent: 'Estos Términos se regirán e interpretarán de acuerdo con las leyes de la jurisdicción en la que opera Asora Solutions, sin tener en cuenta sus disposiciones sobre conflictos de leyes.',
      changes: 'Cambios a los Términos',
      changesContent: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Notificaremos a los usuarios de cualquier cambio material publicando los nuevos términos en esta página. Tu uso continuado de nuestros servicios después de dichas modificaciones constituye la aceptación de los términos actualizados.',
      contact: 'Información de Contacto',
      contactContent: 'Para cualquier pregunta sobre estos Términos de Servicio, contáctanos en contact@asorasolutions.com.',
    },
  },
} as const;
