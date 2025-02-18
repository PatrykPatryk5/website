const socialLinks = {
  github: "https://github.com/aide-project",
  linkedin: "https://linkedin.com/company/aide-project",
  discord: "https://discord.gg/aide-project"
};

export const translations = {
  pl: {
    nav: {
      home: 'Strona Główna',
      about: 'O Nas',
      team: 'Zespół',
      projects: 'Projekty',
      contact: 'Kontakt',
      flagship: 'AIDE Assistant'
    },
    hero: {
      title: 'Innowacyjne Rozwiązania AI',
      subtitle: 'Tworzymy przyszłość z wykorzystaniem sztucznej inteligencji',
      cta: 'Zobacz Więcej'
    },
    roles: {
      'Project Coordinator': 'Koordynator Projektu',
      'Head Administrator': 'Główny Administrator',
      'System Administrator': 'Administrator Systemów',
      'Marketing Manager': 'Manager Marketingu',
      'Business Development Manager': 'Manager Rozwoju Biznesu',
      'Senior Developer': 'Starszy Programista',
      'Full Stack Developer': 'Programista Full Stack',
      'Frontend Developer': 'Programista Frontend',
      'Backend Developer': 'Programista Backend',
      'AI Developer': 'Programista AI'
    },
    discord: {
      title: 'Dołącz do Naszej Społeczności',
      description: 'Poznaj innych pasjonatów AI, dziel się wiedzą i doświadczeniem. Nasza społeczność Discord to miejsce, gdzie możesz znaleźć wsparcie, inspirację i nowe możliwości współpracy.',
      support: 'Wsparcie',
      bot: 'Bot AI',
      join: 'Dołącz Teraz'
    },
    about: {
      title: 'O Nas',
      subtitle: 'Tworzymy przyszłość z wykorzystaniem sztucznej inteligencji',
      description: 'Jesteśmy zespołem pasjonatów AI, którzy łączą zaawansowaną technologię z praktycznymi rozwiązaniami. Nasza misja to democratyzacja sztucznej inteligencji i tworzenie innowacyjnych rozwiązań dostępnych dla wszystkich.',
      features: {
        ai: {
          title: 'Zaawansowane AI',
          description: 'Wykorzystujemy najnowsze osiągnięcia w dziedzinie sztucznej inteligencji i uczenia maszynowego'
        },
        tools: {
          title: 'Nowoczesne Narzędzia',
          description: 'Pracujemy z najnowszymi technologiami i narzędziami, aby zapewnić najwyższą jakość rozwiązań'
        },
        community: {
          title: 'Społeczność',
          description: 'Budujemy aktywną społeczność pasjonatów AI i wspieramy wzajemny rozwój'
        }
      },
      stats: {
        projects: 'Zrealizowanych Projektów',
        clients: 'Zadowolonych Klientów',
        support: 'Wsparcie Techniczne'
      },
      techStack: {
        title: 'Nasz Stos Technologiczny'
      }
    },
    projects: {
      title: 'Nasze Projekty',
      subtitle: 'Odkryj nasze innowacyjne rozwiązania AI',
      flagship: {
        badge: 'Flagowy Projekt',
        title: 'AIDE Assistant',
        description: 'Zaawansowany asystent projektowy nowej generacji, który rewolucjonizuje sposób zarządzania projektami. Łączy w sobie kompleksowe zarządzanie zadaniami, automatyczne śledzenie czasu i zaawansowane możliwości AI. System oferuje intuicyjny interfejs webowy z rozbudowanymi funkcjami personalizacji, systemem pluginów i automatyzacją procesów. Wszystko to dostępne przez przeglądarkę, bez potrzeby instalacji dodatkowego oprogramowania.',
        features: [
          'Kompleksowe zarządzanie projektami z automatycznym przypisywaniem zadań i analizą postępów',
          'Zaawansowany system śledzenia czasu z automatyczną detekcją aktywności i raportowaniem',
          'Wbudowany silnik AI do generowania obrazów, analizy tekstu i automatyzacji zadań',
          'Rozbudowany system pluginów z możliwością tworzenia własnych rozszerzeń (dla użytkowników premium)',
          'Pełna integracja z popularnymi narzędziami (Discord, GitHub, Jira)',
          'Personalizowane motywy interfejsu z obsługą Custom CSS i własnych skryptów'
        ]
      },
      otherProjects: {
        title: 'Powiązane Projekty',
        projects: [
          {
            title: 'AIDE Discord Bot',
            description: 'Zaawansowany bot Discord zapewniający pełną integrację z systemem AIDE. Oferuje rozbudowane funkcje moderacji, zarządzania społecznością i automatyzacji zadań. Bot wykorzystuje własne modele AI do analizy treści, automatycznego tagowania i wsparcia użytkowników. Zapewnia dostęp do wszystkich kluczowych funkcji AIDE bezpośrednio z poziomu Discorda.',
            technologies: ['AI', 'Cloud', 'Web'],
            stats: {
              commands: '50+ komend',
              servers: '100+ serwerów',
              uptime: '99.9% dostępności'
            }
          },
          {
            title: 'AIDE API',
            description: 'Stabilne i wydajne API REST stanowiące fundament ekosystemu AIDE. Umożliwia bezproblemową integrację wszystkich funkcji z zewnętrznymi systemami i aplikacjami. API zostało zbudowane z myślą o skalowalności i wydajności, wykorzystując najnowsze technologie chmurowe i architekturę mikroserwisową. Wspiera autoryzację OAuth2, rate limiting i pełne logowanie zdarzeń.',
            technologies: ['Web', 'Cloud', 'AI'],
            stats: {
              endpoints: '200+ endpointów',
              requests: '1M+ zapytań/dzień',
              latency: '<50ms opóźnienia'
            }
          },
          {
            title: 'AIDE AI Models',
            description: 'Zestaw lokalnych modeli AI stanowiących rdzeń funkcji automatyzacji AIDE. Obejmuje modele do przetwarzania języka naturalnego, analizy obrazów i predykcji czasowej. Modele są trenowane i optymalizowane lokalnie, co zapewnia pełną kontrolę nad danymi i wydajnością. System wspiera automatyczne dostrajanie i adaptację do specyficznych potrzeb użytkowników.',
            technologies: ['AI', 'ML', 'Cloud'],
            stats: {
              models: '10+ modeli AI',
              accuracy: '95%+ dokładności',
              training: '24/7 uczenie'
            }
          }
        ]
      }
    },
    team: {
      title: 'Nasz Zespół',
      subtitle: 'Poznaj ekspertów tworzących przyszłość AI',
      sections: {
        leadership: 'Zarządzanie i Administracja',
        developers: 'Developerzy'
      },
      stats: {
        experience: 'Doświadczenie',
        projects: 'Projekty'
      }
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Odpowiedzi na najczęściej zadawane pytania',
      questions: [
        {
          question: 'Jakie technologie AI wykorzystujecie?',
          answer: 'Pracujemy z najnowszymi modelami AI, w tym z transformerami, sieciami neuronowymi i algorytmami uczenia głębokiego. Wykorzystujemy m.in. TensorFlow, PyTorch i własne rozwiązania. Nasze modele są trenowane lokalnie, co zapewnia pełną kontrolę nad danymi i wydajnością.'
        },
        {
          question: 'Jak działa system pluginów w AIDE?',
          answer: 'System pluginów AIDE pozwala użytkownikom premium tworzyć i instalować własne rozszerzenia. Pluginy mogą rozszerzać funkcjonalność asystenta, dodawać nowe narzędzia i automatyzować procesy. Wszystkie wtyczki przechodzą weryfikację bezpieczeństwa przed udostępnieniem.'
        },
        {
          question: 'Czy oferujecie wsparcie po wdrożeniu?',
          answer: 'Tak, zapewniamy kompleksowe wsparcie 24/7, monitoring systemów oraz regularne aktualizacje i optymalizacje wdrożonych rozwiązań. Nasz zespół techniczny jest dostępny przez Discord oraz system ticketów.'
        },
        {
          question: 'Jak wygląda proces personalizacji interfejsu?',
          answer: 'AIDE oferuje zaawansowany system personalizacji, włączając własne motywy, Custom CSS i skrypty. Użytkownicy premium mają dostęp do dodatkowych opcji dostosowania wyglądu, w tym zmiany kolorów, układu i animacji.'
        },
        {
          question: 'Jakie są wymagania systemowe dla AIDE?',
          answer: 'AIDE działa w przeglądarce internetowej, nie wymaga instalacji dodatkowego oprogramowania. Zalecamy korzystanie z najnowszych wersji Chrome, Firefox lub Safari. Wszystkie dane są synchronizowane w chmurze.'
        },
        {
          question: 'Jak działa system śledzenia czasu?',
          answer: 'System automatycznie śledzi czas spędzony nad projektami i zadaniami, wykorzystując zaawansowane algorytmy do wykrywania aktywności. Generuje szczegółowe raporty i statystyki, które można eksportować w różnych formatach.'
        },
        {
          question: 'Czy można integrować AIDE z innymi narzędziami?',
          answer: 'Tak, AIDE oferuje integracje z popularnymi narzędziami takimi jak Discord, GitHub, Jira i inne. Dzięki API REST, możliwa jest również własna implementacja integracji z dowolnym systemem.'
        },
        {
          question: 'Jakie są różnice między wersją darmową a premium?',
          answer: 'Wersja premium oferuje zaawansowane opcje personalizacji, generowanie obrazów AI bez limitów, priorytetowe wsparcie techniczne, możliwość tworzenia nieograniczonej liczby projektów i zadań oraz dostęp do ekskluzywnych pluginów premium. Wersja darmowa zawiera podstawowy system pluginów, standardowe wsparcie oraz limity na generowanie obrazów i liczbę projektów.'
        },
        {
          question: 'Czy AIDE oferuje wersję offline?',
          answer: 'Tak, AIDE oferuje tryb offline, który pozwala na pracę bez dostępu do internetu. Dane są synchronizowane automatycznie po przywróceniu połączenia. Niektóre funkcje AI mogą być ograniczone w trybie offline.'
        },
        {
          question: 'Jak wygląda proces aktualizacji AIDE?',
          answer: 'Aktualizacje są wdrażane automatycznie w wersji webowej. Dla aplikacji desktopowych i mobilnych, aktualizacje są dostępne przez odpowiednie sklepy z aplikacjami. Zawsze informujemy o nowych funkcjach i zmianach przez nasz system powiadomień.'
        },
        {
          question: 'Czy moje dane są bezpieczne?',
          answer: 'Bezpieczeństwo danych jest naszym priorytetem. Stosujemy szyfrowanie end-to-end, regularne audyty bezpieczeństwa i zgodność z RODO. Dane są przechowywane w certyfikowanych centrach danych w UE.'
        },
        {
          question: 'Jak działa system współpracy w AIDE?',
          answer: 'AIDE umożliwia pracę zespołową w czasie rzeczywistym. Użytkownicy mogą współdzielić projekty, przypisywać zadania, komentować i śledzić postępy. System uprawnień pozwala na precyzyjne kontrolowanie dostępu do zasobów.'
        },
        {
          question: 'Czy mogę przenieść dane z innych narzędzi do AIDE?',
          answer: 'Tak, AIDE oferuje narzędzia do importu danych z popularnych systemów zarządzania projektami. Wspieramy import z Jira, Trello, Asana i innych. Proces migracji jest w pełni dokumentowany i wspierany przez nasz zespół.'
        },
        {
          question: 'Jakie są limity w wersji darmowej?',
          answer: 'Wersja darmowa pozwala na zarządzanie do 30 projektów jednocześnie, generowanie do 50 obrazów AI miesięcznie i korzystanie z podstawowych pluginów. Dostępne jest również standardowe wsparcie techniczne przez system ticketów.'
        },
        {
          question: 'Czy AIDE wspiera integracje niestandardowe?',
          answer: 'Tak, dzięki naszemu API REST i systemowi webhooków, możesz tworzyć własne integracje. Dokumentacja API jest publicznie dostępna, a nasz zespół służy wsparciem przy implementacji.'
        },
        {
          question: 'Jak działa wsparcie techniczne?',
          answer: 'Oferujemy wielopoziomowy system wsparcia: dokumentację online, forum społeczności, system ticketów oraz czat na Discord. Użytkownicy premium mają dostęp do dedykowanego wsparcia i priorytetowej obsługi zgłoszeń.'
        },
        {
          question: 'Jakie typy projektów można zarządzać w AIDE?',
          answer: 'AIDE obsługuje różnorodne typy projektów: od małych zadań zespołowych po złożone projekty korporacyjne. System jest elastyczny i pozwala na zarządzanie projektami IT, marketingowymi, badawczymi oraz innymi. Każdy projekt może być dostosowany do specyficznych potrzeb zespołu.'
        },
        {
          question: 'Czy AIDE posiada funkcje raportowania i analityki?',
          answer: 'Tak, AIDE oferuje zaawansowane narzędzia do raportowania i analityki. Możesz generować szczegółowe raporty o postępie prac, czasie spędzonym nad zadaniami, wydajności zespołu i wiele innych. Wszystkie raporty są dostępne w formatach PDF, Excel i można je dostosować do własnych potrzeb.'
        },
        {
          question: 'Jak działa system powiadomień w AIDE?',
          answer: 'System powiadomień AIDE jest w pełni konfigurowalny. Otrzymujesz powiadomienia o zmianach w projektach, nowych zadaniach, komentarzach i terminach. Powiadomienia są dostępne przez email, powiadomienia push w przeglądarce oraz w aplikacji mobilnej. Możesz dokładnie określić, o czym chcesz być informowany.'
        },
        {
          question: 'Czy AIDE obsługuje metodologie Agile/Scrum?',
          answer: 'Tak, AIDE w pełni wspiera metodologie Agile i Scrum. Oferujemy tablice Kanban, planowanie sprintów, retrospektywy, wykresy burndown i wszystkie niezbędne narzędzia do prowadzenia projektów zgodnie z metodykami zwinnymi.'
        },
        {
          question: 'Na jakich platformach mobilnych dostępne jest AIDE?',
          answer: 'AIDE jest dostępne na systemach Android i iOS poprzez dedykowane aplikacje mobilne. Dodatkowo, nasza responsywna wersja webowa działa na wszystkich urządzeniach mobilnych przez przeglądarkę.'
        },
        {
          question: 'Jakie przeglądarki są wspierane?',
          answer: 'AIDE wspiera wszystkie nowoczesne przeglądarki w ich najnowszych wersjach: Chrome, Firefox, Safari, Edge. Zalecamy korzystanie z najnowszych wersji przeglądarek dla optymalnej wydajności i bezpieczeństwa.'
        },
        {
          question: 'Czy AIDE działa w chmurze czy lokalnie?',
          answer: 'AIDE oferuje obie opcje. Domyślnie działa w chmurze, co zapewnia łatwy dostęp i automatyczne aktualizacje. Dla firm wymagających większej kontroli, oferujemy również możliwość instalacji on-premise na własnych serwerach.'
        },
        {
          question: 'Jak często wykonywane są kopie zapasowe danych?',
          answer: 'Kopie zapasowe są wykonywane automatycznie co godzinę, z pełnymi backupami co 24 godziny. Dane są przechowywane w wielu lokalizacjach dla zapewnienia bezpieczeństwa. Użytkownicy premium mogą również ręcznie inicjować kopie zapasowe.'
        },
        {
          question: 'Czy AIDE spełnia wymogi GDPR/RODO?',
          answer: 'Tak, AIDE jest w pełni zgodne z RODO i innymi międzynarodowymi standardami ochrony danych. Wszystkie dane są przetwarzane zgodnie z najnowszymi wymogami prawnymi, a użytkownicy mają pełną kontrolę nad swoimi danymi.'
        },
        {
          question: 'Jak wygląda proces autoryzacji i uwierzytelniania?',
          answer: 'AIDE wykorzystuje wielopoziomowy system zabezpieczeń, w tym uwierzytelnianie dwuskładnikowe (2FA), logowanie przez OAuth2, oraz możliwość integracji z systemami SSO. Wszystkie połączenia są szyfrowane przy użyciu SSL/TLS.'
        },
        {
          question: 'Czy oferujecie szkolenia dla nowych użytkowników?',
          answer: 'Tak, oferujemy kompleksowe szkolenia online, webinary i materiały edukacyjne. Dla firm zapewniamy dedykowane sesje szkoleniowe. Wszyscy użytkownicy mają dostęp do bazy wiedzy i samouczków wideo.'
        },
        {
          question: 'Jak szybko można spodziewać się odpowiedzi od wsparcia?',
          answer: 'Standardowy czas odpowiedzi to 24 godziny dla użytkowników darmowych i 4 godziny dla użytkowników premium. Krytyczne problemy są obsługiwane priorytetowo. Wsparcie jest dostępne 24/7 przez system ticketów i chat.'
        },
        {
          question: 'Czy dostępne są materiały edukacyjne i dokumentacja?',
          answer: 'Tak, udostępniamy obszerną dokumentację techniczną, poradniki, przykłady użycia i najlepsze praktyki. Materiały są regularnie aktualizowane i dostępne w kilku językach. Prowadzimy też blog z poradami i aktualnościami.'
        },
        {
          question: 'Jak często pojawiają się nowe funkcje?',
          answer: 'Większe aktualizacje wydajemy co miesiąc, a mniejsze poprawki i ulepszenia są wdrażane na bieżąco. O wszystkich zmianach informujemy z wyprzedzeniem przez nasz blog i system powiadomień.'
        },
        {
          question: 'Czy użytkownicy mogą zgłaszać propozycje nowych funkcji?',
          answer: 'Tak, aktywnie zbieramy feedback od użytkowników. Propozycje można zgłaszać przez specjalny formularz, forum społeczności lub bezpośrednio do zespołu wsparcia. Regularnie implementujemy najbardziej pożądane funkcje.'
        },
        {
          question: 'Jakie są plany rozwoju AIDE na najbliższy rok?',
          answer: 'Planujemy wprowadzenie zaawansowanych funkcji AI do automatyzacji zadań, rozbudowę integracji z popularnymi narzędziami, nowe funkcje dla zespołów rozproszonych oraz dalsze usprawnienia w obszarze bezpieczeństwa i wydajności.'
        }
      ]
    },
    footer: {
      company: {
        name: 'AIDETeam',
        description: 'Innowacyjne rozwiązania AI dla Twojej firmy'
      },
      contact: {
        title: 'Kontakt',
        email: 'contact@aideteam.com',
        location: 'Warszawa, Polska'
      },
      social: {
        title: 'Social Media',
        links: {
          linkedin: 'LinkedIn',
          github: 'GitHub',
          discord: 'Discord',
          twitter: 'Twitter',
          facebook: 'Facebook'
        }
      },
      copyright: '© 2024 AIDETeam. Wszelkie prawa zastrzeżone.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      team: 'Team',
      projects: 'Projects',
      contact: 'Contact',
      flagship: 'AIDE Assistant'
    },
    hero: {
      title: 'Innovative AI Solutions',
      subtitle: 'Building the future with artificial intelligence',
      cta: 'Learn More'
    },
    roles: {
      'Project Coordinator': 'Project Coordinator',
      'Head Administrator': 'Head Administrator',
      'System Administrator': 'System Administrator',
      'Marketing Manager': 'Marketing Manager',
      'Business Development Manager': 'Business Development Manager',
      'Senior Developer': 'Senior Developer',
      'Full Stack Developer': 'Full Stack Developer',
      'Frontend Developer': 'Frontend Developer',
      'Backend Developer': 'Backend Developer',
      'AI Developer': 'AI Developer'
    },
    discord: {
      title: 'Join Our Community',
      description: 'Connect with fellow AI enthusiasts, share knowledge and experience. Our Discord community is the place where you can find support, inspiration and new collaboration opportunities.',
      support: 'Support',
      bot: 'AI Bot',
      join: 'Join Now'
    },
    about: {
      title: 'About',
      subtitle: 'Building the future with artificial intelligence',
      description: 'We are a team of AI enthusiasts who combine advanced technology with practical solutions. Our mission is to democratize artificial intelligence and create innovative solutions accessible to everyone.',
      features: {
        ai: {
          title: 'Advanced AI',
          description: 'We leverage the latest achievements in artificial intelligence and machine learning'
        },
        tools: {
          title: 'Modern Tools',
          description: 'We work with the latest technologies and tools to ensure the highest quality solutions'
        },
        community: {
          title: 'Community',
          description: 'We build an active AI enthusiast community and support mutual development'
        }
      },
      stats: {
        projects: 'Completed Projects',
        clients: 'Satisfied Clients',
        support: 'Technical Support'
      },
      techStack: {
        title: 'Our Technology Stack'
      }
    },
    projects: {
      title: 'Our Projects',
      subtitle: 'Discover our innovative AI solutions',
      flagship: {
        badge: 'Flagship Project',
        title: 'AIDE Assistant',
        description: 'Advanced project assistant of the new generation, combining comprehensive task management with powerful AI capabilities. Offers an intuitive web interface with extensive personalization and automation features.',
        features: [
          'Comprehensive project and task management',
          'Automatic time tracking and productivity analysis',
          'Advanced AI features and image generation',
          'Plugin and extension system',
          'Integration with popular tools',
          'Customizable themes and interface'
        ]
      },
      otherProjects: {
        title: 'Other Projects',
        projects: [
          {
            title: 'AI Vision System',
            description: 'Real-Time Image Recognition System'
          },
          {
            title: 'NLP Engine',
            description: 'Advanced Natural Language Processing Engine'
          },
          {
            title: 'AI Trading Bot',
            description: 'Autonomous Trading System Based on AI'
          }
        ]
      }
    },
    team: {
      title: 'Our Team',
      subtitle: 'Meet the experts creating the future of AI',
      sections: {
        leadership: 'Leadership and Administration',
        developers: 'Developers'
      },
      stats: {
        experience: 'Experience',
        projects: 'Projects'
      }
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Answers to the most frequently asked questions',
      questions: [
        {
          question: 'Which AI technologies do you use?',
          answer: 'We work with the latest AI models, including transformers, neural networks, and deep learning algorithms. We also use TensorFlow, PyTorch, and our own solutions.'
        },
        {
          question: 'How long does it take to deploy an AI solution?',
          answer: 'The deployment time depends on the complexity of the project. A typical project takes 2 to 6 months, including testing and optimization phase.'
        },
        {
          question: 'Do you offer support after deployment?',
          answer: 'Yes, we provide comprehensive support 24/7, system monitoring, and regular updates and optimizations for deployed solutions.'
        },
        {
          question: 'Which industries do you serve?',
          answer: 'Our solutions are applicable in many industries, including finance, medicine, e-commerce, and manufacturing. We tailor each solution to the specific industry.'
        },
        {
          question: 'Czy AIDE oferuje wersję offline?',
          answer: 'Tak, AIDE oferuje tryb offline, który pozwala na pracę bez dostępu do internetu. Dane są synchronizowane automatycznie po przywróceniu połączenia. Niektóre funkcje AI mogą być ograniczone w trybie offline.'
        },
        {
          question: 'Jak wygląda proces aktualizacji AIDE?',
          answer: 'Aktualizacje są wdrażane automatycznie w wersji webowej. Dla aplikacji desktopowych i mobilnych, aktualizacje są dostępne przez odpowiednie sklepy z aplikacjami. Zawsze informujemy o nowych funkcjach i zmianach przez nasz system powiadomień.'
        },
        {
          question: 'Czy moje dane są bezpieczne?',
          answer: 'Bezpieczeństwo danych jest naszym priorytetem. Stosujemy szyfrowanie end-to-end, regularne audyty bezpieczeństwa i zgodność z RODO. Dane są przechowywane w certyfikowanych centrach danych w UE.'
        },
        {
          question: 'Jak działa system współpracy w AIDE?',
          answer: 'AIDE umożliwia pracę zespołową w czasie rzeczywistym. Użytkownicy mogą współdzielić projekty, przypisywać zadania, komentować i śledzić postępy. System uprawnień pozwala na precyzyjne kontrolowanie dostępu do zasobów.'
        },
        {
          question: 'Czy mogę przenieść dane z innych narzędzi do AIDE?',
          answer: 'Tak, AIDE oferuje narzędzia do importu danych z popularnych systemów zarządzania projektami. Wspieramy import z Jira, Trello, Asana i innych. Proces migracji jest w pełni dokumentowany i wspierany przez nasz zespół.'
        },
        {
          question: 'What are the limits in the free version?',
          answer: 'The free version allows managing up to 30 projects simultaneously, generating up to 50 AI images per month, and using basic plugins. Standard technical support through the ticket system is also available.'
        },
        {
          question: 'Czy AIDE wspiera integracje niestandardowe?',
          answer: 'Tak, dzięki naszemu API REST i systemowi webhooków, możesz tworzyć własne integracje. Dokumentacja API jest publicznie dostępna, a nasz zespół służy wsparciem przy implementacji.'
        },
        {
          question: 'Jak działa wsparcie techniczne?',
          answer: 'Oferujemy wielopoziomowy system wsparcia: dokumentację online, forum społeczności, system ticketów oraz czat na Discord. Użytkownicy premium mają dostęp do dedykowanego wsparcia i priorytetowej obsługi zgłoszeń.'
        },
        {
          question: 'Jakie typy projektów można zarządzać w AIDE?',
          answer: 'AIDE obsługuje różnorodne typy projektów: od małych zadań zespołowych po złożone projekty korporacyjne. System jest elastyczny i pozwala na zarządzanie projektami IT, marketingowymi, badawczymi oraz innymi. Każdy projekt może być dostosowany do specyficznych potrzeb zespołu.'
        },
        {
          question: 'Czy AIDE posiada funkcje raportowania i analityki?',
          answer: 'Tak, AIDE oferuje zaawansowane narzędzia do raportowania i analityki. Możesz generować szczegółowe raporty o postępie prac, czasie spędzonym nad zadaniami, wydajności zespołu i wiele innych. Wszystkie raporty są dostępne w formatach PDF, Excel i można je dostosować do własnych potrzeb.'
        },
        {
          question: 'Jak działa system powiadomień w AIDE?',
          answer: 'System powiadomień AIDE jest w pełni konfigurowalny. Otrzymujesz powiadomienia o zmianach w projektach, nowych zadaniach, komentarzach i terminach. Powiadomienia są dostępne przez email, powiadomienia push w przeglądarce oraz w aplikacji mobilnej. Możesz dokładnie określić, o czym chcesz być informowany.'
        },
        {
          question: 'Czy AIDE obsługuje metodologie Agile/Scrum?',
          answer: 'Tak, AIDE w pełni wspiera metodologie Agile i Scrum. Oferujemy tablice Kanban, planowanie sprintów, retrospectives, burndown charts and all necessary tools to carry out projects according to agile methodologies.'
        },
        {
          question: 'Na jakich platformach mobilnych dostępne jest AIDE?',
          answer: 'AIDE jest dostępne na systemach Android i iOS poprzez dedykowane aplikacje mobilne. Dodatkowo, nasza responsywna wersja webowa działa na wszystkich urządzeniach mobilnych przez przeglądarkę.'
        },
        {
          question: 'Jakie przeglądarki są wspierane?',
          answer: 'AIDE wspiera wszystkie nowoczesne przeglądarki w ich najnowszych wersjach: Chrome, Firefox, Safari, Edge. Zalecamy korzystanie z najnowszych wersji przeglądarek dla optymalnej wydajności i bezpieczeństwa.'
        },
        {
          question: 'Czy AIDE działa w chmurze czy lokalnie?',
          answer: 'AIDE oferuje obie opcje. Domyślnie działa w chmurze, co zapewnia łatwy dostęp i automatyczne aktualizacje. Dla firm wymagających większej kontroli, oferujemy również możliwość instalacji on-premise na własnych serwerach.'
        },
        {
          question: 'Jak często wykonywane są kopie zapasowe danych?',
          answer: 'Kopie zapasowe są wykonywane automatycznie co godzinę, z pełnymi backupami co 24 godziny. Dane są przechowywane w wielu lokalizacjach dla zapewnienia bezpieczeństwa. Użytkownicy premium mogą również ręcznie inicjować kopie zapasowe.'
        },
        {
          question: 'Czy AIDE spełnia wymogi GDPR/RODO?',
          answer: 'Sí, AIDE es completamente compatible con GDPR y otros estándares internacionales de protección de datos. Todos los datos se procesan de acuerdo con las leyes y regulaciones más recientes, y los usuarios tienen control completo sobre sus datos.'
        },
        {
          question: 'Jak wygląda proces autoryzacji i uwierzytelniania?',
          answer: 'AIDE usa un sistema de seguridad de varios niveles, incluida la autenticación de dos factores (2FA), inicio de sesión a través de OAuth2 y la posibilidad de integrar con sistemas SSO. Todos los enlaces están cifrados usando SSL/TLS.'
        },
        {
          question: 'Czy oferujecie szkolenia dla nowych użytkowników?',
          answer: 'Tak, oferujemy kompleksowe szkolenia online, webinary i materiały edukacyjne. Dla firm zapewniamy dedykowane sesiones de capacitación. Todos los usuarios tienen acceso a la base de conocimientos y tutoriales en video.'
        },
        {
          question: 'Jak szybko można spodziewać się odpowiedzi od wsparcia?',
          answer: 'Standardowy czas odpowiedzi to 24 horas para usuarios gratuitos y 4 horas para usuarios premium. Los problemas críticos se manejan prioritariamente. El soporte está disponible 24/7 a través del sistema de tickets y chat.'
        },
        {
          question: 'Czy dostępne są materiały edukacyjne i documentación?',
          answer: 'Sí, proporcionamos documentación técnica extensa, guías, ejemplos de uso y las mejores prácticas. Los materiales se actualizan regularmente y están disponibles en varios idiomas. También llevamos un blog con consejos y actualizaciones.'
        },
        {
          question: 'Jak często aparecen nuevas funciones?',
          answer: 'Realizamos actualizaciones mayores cada mes, y pequeñas correcciones y mejoras se implementan continuamente. Nos informamos sobre todos los cambios con anticipación a través de nuestro blog y sistema de notificaciones.'
        },
        {
          question: '¿Los usuarios pueden presentar sugerencias de nuevas funciones?',
          answer: 'Sí, activamente recopilamos comentarios de los usuarios. Las sugerencias se pueden presentar a través de un formulario especial, foro de la comunidad o directamente al equipo de soporte. Regularmente implementamos las funciones más solicitadas.'
        },
        {
          question: '¿Cuáles son los planes de desarrollo de AIDE para el próximo año?',
          answer: 'Planeamos introducir funciones avanzadas de IA para automatización de tareas, ampliar la integración con herramientas populares, nuevas funciones para equipos distribuidos y mejoras adicionales en áreas de seguridad y rendimiento.'
        }
      ]
    },
    footer: {
      company: {
        name: 'AIDETeam',
        description: 'Innovative AI solutions for your business'
      },
      contact: {
        title: 'Contact',
        email: 'contact@aideteam.com',
        location: 'Warsaw, Poland'
      },
      social: {
        title: 'Social Media',
        links: {
          linkedin: 'LinkedIn',
          github: 'GitHub',
          discord: 'Discord',
          twitter: 'Twitter',
          facebook: 'Facebook'
        }
      },
      copyright: '© 2024 AIDETeam. All rights reserved.'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      team: 'Equipo',
      projects: 'Proyectos',
      contact: 'Contacto',
      flagship: 'AIDE Assistant'
    },
    hero: {
      title: 'Soluciones Innovadoras de IA',
      subtitle: 'Construyendo el futuro con inteligencia artificial',
      cta: 'Ver Más'
    },
    roles: {
      'Project Coordinator': 'Coordinador de Proyecto',
      'Head Administrator': 'Administrador Principal',
      'System Administrator': 'Administrador de Sistemas',
      'Marketing Manager': 'Gerente de Marketing',
      'Business Development Manager': 'Gerente de Desarrollo de Negocios',
      'Senior Developer': 'Desarrollador Senior',
      'Full Stack Developer': 'Desarrollador Full Stack',
      'Frontend Developer': 'Desarrollador Frontend',
      'Backend Developer': 'Desarrollador Backend',
      'AI Developer': 'Desarrollador de IA'
    },
    discord: {
      title: 'Únete a Nuestra Comunidad',
      description: 'Conéctate con otros entusiastas de la IA, comparte conocimientos y experiencia. Nuestra comunidad de Discord es el lugar donde puedes encontrar apoyo, inspiración y nuevas oportunidades de colaboración.',
      support: 'Soporte',
      bot: 'Bot IA',
      join: 'Únete Ahora'
    },
    about: {
      title: 'Nosotros',
      subtitle: 'Construyendo el futuro con inteligencia artificial',
      description: 'Somos un equipo de entusiastas de la IA que combinan tecnología avanzada con soluciones prácticas. Nuestra misión es democratizar la IA y crear soluciones innovadoras accesibles para todos.',
      features: {
        ai: {
          title: 'IA Avanzada',
          description: 'Utilizamos las últimas realizaciones en IA y aprendizaje automático'
        },
        tools: {
          title: 'Herramientas Modernas',
          description: 'Trabajamos con las últimas tecnologías y herramientas para garantizar la máxima calidad de las soluciones'
        },
        community: {
          title: 'Comunidad',
          description: 'Construimos una comunidad activa de entusiastas de la IA y apoyamos el desarrollo mutuo'
        }
      },
      stats: {
        projects: 'Proyectos Completados',
        clients: 'Clientes Satisfechos',
        support: 'Soporte Técnico'
      },
      techStack: {
        title: 'Nuestra Pila Tecnológica'
      }
    },
    projects: {
      title: 'Nuestros Proyectos',
      subtitle: 'Descubre nuestras soluciones de IA innovadoras',
      flagship: {
        badge: 'Proyecto Bandera',
        title: 'AIDE Assistant',
        description: 'Nuestro proyecto bandera - una asistente de IA avanzada de la nueva generación, que combina las últimas tecnologías de inteligencia artificial con una interfaz intuitiva.',
        features: [
          'Procesamiento de lenguaje natural avanzado',
          'Soluciones personalizadas para empresas',
          'Integración con herramientas populares',
          'Aprendizaje en tiempo real'
        ]
      },
      otherProjects: {
        title: 'Otros Proyectos',
        projects: [
          {
            title: 'Sistema de Visión IA',
            description: 'Sistema de reconocimiento de imágenes en tiempo real'
          },
          {
            title: 'Motor NLP',
            description: 'Motor avanzado de procesamiento de lenguaje natural'
          },
          {
            title: 'Robot de Comercio IA',
            description: 'Sistema de comercio automático basado en IA'
          }
        ]
      }
    },
    team: {
      title: 'Nuestro Equipo',
      subtitle: 'Conoce a los expertos que están creando el futuro de la IA',
      sections: {
        leadership: 'Liderazgo y Administración',
        developers: 'Desarrolladores'
      },
      stats: {
        experience: 'Experiencia',
        projects: 'Proyectos'
      }
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Respuestas a las preguntas más frecuentes',
      questions: [
        {
          question: '¿Qué tecnologías de IA utilizan?',
          answer: 'Trabajamos con los últimos modelos de IA, incluyendo transformadores, redes neuronales y algoritmos de aprendizaje profundo. También usamos TensorFlow, PyTorch y nuestras propias soluciones.'
        },
        {
          question: '¿Cuánto tiempo lleva implementar una solución de IA?',
          answer: 'El tiempo de implementación depende de la complejidad del proyecto. Un proyecto típico dura de 2 a 6 meses, incluyendo la fase de pruebas y optimización.'
        },
        {
          question: '¿En qué sectores sirven?',
          answer: 'Nuestras soluciones son aplicables en muchos sectores, incluyendo finanzas, medicina, comercio electrónico y manufactura. Nos adaptamos cada solución al sector específico.'
        },
        {
          question: 'Czy AIDE oferuje wersję offline?',
          answer: 'Tak, AIDE oferuje tryb offline, który pozwala na pracę bez dostępu do internetu. Dane są synchronizowane automatycznie po przywróceniu połączenia. Niektóre funkcje AI mogą być ograniczone w trybie offline.'
        },
        {
          question: 'Jak wygląda proces aktualizacji AIDE?',
          answer: 'Aktualizacjes son wdrażane automatycznie w wersji webowej. Dla aplikacjí desktopowych i mobilnych, aktualizacjes son dostępne przez odpowiednie sklepy z aplikacjími. Zawsze informujemy o nowych funkcjach i zmianach przez nasz system powiadomień.'
        },
        {
          question: 'Czy moje dane son bezpieczne?',
          answer: 'Bezpieczeństwo danych es nuestro prioridad. Stosujemos szyfrowanie end-to-end, regularne audyty bezpieczeństwa i zgodność con RODO. Datos son przechowywane en centros de datos certificados en UE.'
        },
        {
          question: 'Jak działa sistema de colaboración en AIDE?',
          answer: 'AIDE permite la colaboración en equipo en tiempo real. Los usuarios pueden compartir proyectos, asignar tareas, comentar y seguir el progreso. El sistema de permisos permite controlar de manera precisa el acceso a los recursos.'
        },
        {
          question: 'Czy puedo mover datos de otras herramientas a AIDE?',
          answer: 'Sí, AIDE ofrece herramientas para importar datos de sistemas populares de gestión de proyectos. Apoyamos la importación de Jira, Trello, Asana y otros. El proceso de migración es completamente documentado e apoyado por nuestro equipo.'
        },
        {
          question: '¿Cuáles son los límites en la versión gratuita?',
          answer: 'La versión gratuita permite gestionar hasta 30 proyectos simultáneamente, generar hasta 50 imágenes de IA por mes y usar plugins básicos. También está disponible el soporte técnico estándar a través del sistema de tickets.'
        },
        {
          question: 'Czy AIDE soporta integraciones personalizadas?',
          answer: 'Sí, gracias a nuestro API REST y sistema de webhooks, puedes crear tus propias integraciones. La documentación API es públicamente accesible, y nuestro equipo está aquí para apoyarte en la implementación.'
        },
        {
          question: 'Jak działa el soporte técnico?',
          answer: 'Ofrecemos un sistema de soporte de varios niveles: documentación en línea, foro de la comunidad, sistema de tickets y chat en Discord. Los usuarios premium tienen acceso al soporte dedicado y priorizado de atención a la solicitud.'
        },
        {
          question: '¿Qué tipos de proyectos se pueden gestionar en AIDE?',
          answer: 'AIDE soporta varios tipos de proyectos: desde pequeños proyectos de equipo hasta proyectos corporativos complejos. El sistema es flexible y permite gestionar proyectos de IT, marketing, de investigación y otros. Cada proyecto puede ser adaptado a las necesidades específicas del equipo.'
        },
        {
          question: '¿AIDE tiene funciones de informes y análisis?',
          answer: 'Sí, AIDE ofrece herramientas avanzadas para informes y análisis. Puedes generar informes detallados sobre el progreso del trabajo, el tiempo invertido en tareas, la productividad del equipo y mucho más. Todos los informes están disponibles en formatos PDF, Excel y se pueden personalizar según tus necesidades.'
        },
        {
          question: '¿Cómo funciona el sistema de notificaciones en AIDE?',
          answer: 'El sistema de notificaciones de AIDE es completamente configurable. Recibirás notificaciones sobre cambios en proyectos, nuevas tareas, comentarios y plazos. Las notificaciones están disponibles a través de correo electrónico, notificaciones push en el navegador y en la aplicación móvil. Puedes especificar exactamente lo que quieres que te notifiques.'
        },
        {
          question: '¿AIDE soporta metodologías Agile/Scrum?',
          answer: 'Sí, AIDE soporta completamente metodologías Agile y Scrum. Ofrecemos tableros Kanban, planificación de sprints, retrospectivas, gráficos burndown y todas las herramientas necesarias para llevar a cabo proyectos de acuerdo con metodologías ágiles.'
        },
        {
          question: '¿En qué plataformas móviles está disponible AIDE?',
          answer: 'AIDE está disponible en sistemas Android e iOS a través de aplicaciones móviles dedicadas. Además, nuestra versión web responsiva funciona en todas las tabletas y teléfonos móviles a través del navegador.'
        },
        {
          question: '¿Qué navegadores son compatibles?',
          answer: 'AIDE soporta todos los navegadores modernos en sus últimas versiones: Chrome, Firefox, Safari, Edge. Te recomendamos usar las últimas versiones de los navegadores para una mejor velocidad y seguridad.'
        },
        {
          question: '¿AIDE funciona en la nube o localmente?',
          answer: 'AIDE ofrece ambas opciones. Por defecto, funciona en la nube, lo que proporciona un acceso fácil y actualizaciones automáticas. Para empresas que requieren mayor control, también ofrecemos la opción de instalación on-premise en sus propios servidores.'
        },
        {
          question: '¿Con qué frecuencia se realizan copias de seguridad de datos?',
          answer: 'Las copias de seguridad se realizan automáticamente cada hora, con copias de seguridad completas cada 24 horas. Los datos se almacenan en varias ubicaciones para garantizar la seguridad. Los usuarios premium también pueden iniciar manualmente copias de seguridad.'
        },
        {
          question: '¿AIDE cumple con los requisitos de GDPR/RODO?',
          answer: 'Sí, AIDE es completamente compatible con GDPR y otros estándares internacionales de protección de datos. Todos los datos se procesan de acuerdo con las leyes y regulaciones más recientes, y los usuarios tienen control completo sobre sus datos.'
        },
        {
          question: '¿Cómo funciona el proceso de autenticación y autenticación?',
          answer: 'AIDE usa un sistema de seguridad de varios niveles, incluida la autenticación de dos factores (2FA), inicio de sesión a través de OAuth2 y la posibilidad de integrar con sistemas SSO. Todos los enlaces están cifrados usando SSL/TLS.'
        },
        {
          question: '¿AIDE ofrece capacitaciones para nuevos usuarios?',
          answer: 'Sí, ofrecemos capacitaciones completas en línea, webinary y materiales educativos. Para empresas, ofrecemos sesiones de capacitación dedicadas. Todos los usuarios tienen acceso a la base de conocimientos y tutoriales en video.'
        },
        {
          question: '¿Con qué rapidez se puede esperar una respuesta del soporte?',
          answer: 'El tiempo de respuesta estándar es de 24 horas para usuarios gratuitos y 4 horas para usuarios premium. Los problemas críticos se manejan prioritariamente. El soporte está disponible 24/7 a través del sistema de tickets y chat.'
        },
        {
          question: '¿Están disponibles materiales educativos y documentación?',
          answer: 'Sí, proporcionamos documentación técnica extensa, guías, ejemplos de uso y las mejores prácticas. Los materiales se actualizan regularmente y están disponibles en varios idiomas. También llevamos un blog con consejos y actualizaciones.'
        },
        {
          question: '¿Con qué frecuencia aparecen nuevas funciones?',
          answer: 'Realizamos actualizaciones mayores cada mes, y pequeñas correcciones y mejoras se implementan continuamente. Nos informamos sobre todos los cambios con anticipación a través de nuestro blog y sistema de notificaciones.'
        },
        {
          question: '¿Los usuarios pueden presentar sugerencias de nuevas funciones?',
          answer: 'Sí, activamente recopilamos comentarios de los usuarios. Las sugerencias se pueden presentar a través de un formulario especial, foro de la comunidad o directamente al equipo de soporte. Regularmente implementamos las funciones más solicitadas.'
        },
        {
          question: '¿Cuáles son los planes de desarrollo de AIDE para el próximo año?',
          answer: 'Planeamos introducir funciones avanzadas de IA para automatización de tareas, ampliar la integración con herramientas populares, nuevas funciones para equipos distribuidos y mejoras adicionales en áreas de seguridad y rendimiento.'
        }
      ]
    },
    footer: {
      company: {
        name: 'AIDETeam',
        description: 'Soluciones de IA innovadoras para su empresa'
      },
      contact: {
        title: 'Contacto',
        email: 'contact@aideteam.com',
        location: 'Varsovia, Polonia'
      },
      social: {
        title: 'Medios Sociales',
        links: {
          linkedin: 'LinkedIn',
          github: 'GitHub',
          discord: 'Discord',
          twitter: 'Twitter',
          facebook: 'Facebook'
        }
      },
      copyright: '© 2024 AIDETeam. Todos los derechos reservados.'
    }
  }
};

const teamMembers = [
  {
    id: 1,
    role: 'Project Coordinator',
    name: 'm4t3k_33',
    nickname: 'Frontend Lead',
    specialty: 'Frontend Development & Project Management',
    skills: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Redux', 'GraphQL', 'Jest', 'Webpack'],
    experience: '5+ lat doświadczenia',
    projects: '30+ projektów',
    bio: 'Główny frontend developer i koordynator projektu AIDE. Odpowiedzialny za rozwój interfejsu webowego i koordynację prac zespołu.',
    socials: {
      github: `${socialLinks.github}/m4t3k33`,
      discord: socialLinks.discord
    }
  },
  {
    id: 2,
    role: 'Head Administrator',
    name: 'Stainowy',
    nickname: 'UI/UX Master',
    specialty: 'Discord Integration & UI/UX Design',
    skills: ['Discord.js', 'Node.js', 'Figma', 'Adobe XD', 'WebSocket', 'REST API', 'MongoDB', 'Redis'],
    experience: '4+ lat doświadczenia',
    projects: '20+ projektów',
    bio: 'Główny administrator i projektant UI/UX. Odpowiedzialny za bota Discord, zarządzanie społecznością i integracje z Discordem.',
    socials: {
      github: `${socialLinks.github}/stainowy`,
      discord: socialLinks.discord
    }
  },
  {
    id: 3,
    role: 'System Administrator',
    name: 'Graynix',
    nickname: 'Mobile Master',
    specialty: 'Android Development & Discord Support',
    skills: ['Kotlin', 'Java', 'Android SDK', 'Firebase', 'Room', 'Retrofit', 'Jetpack Compose', 'Dagger'],
    experience: '3+ lat doświadczenia',
    projects: '15+ aplikacji',
    bio: 'Administrator systemowy i developer Androida. Odpowiedzialny za rozwój aplikacji mobilnej i wsparcie integracji z Discordem.',
    socials: {
      github: `${socialLinks.github}/graynix`,
      discord: socialLinks.discord
    }
  },
  {
    id: 4,
    role: 'System Administrator',
    name: '🐭 [mysz]',
    nickname: 'Apple Guru',
    specialty: 'iOS & macOS Development',
    skills: ['Swift', 'SwiftUI', 'Objective-C', 'Core Data', 'Combine', 'XCTest', 'CocoaPods', 'ARKit'],
    experience: '3+ lat doświadczenia',
    projects: '10+ aplikacji',
    bio: 'Administrator systemowy i iOS developer. Odpowiedzialny za rozwój i wsparcie aplikacji na platformach Apple.',
    socials: {
      github: `${socialLinks.github}/mouseguru`,
      discord: socialLinks.discord
    }
  },
  {
    id: 5,
    role: 'Backend Developer',
    name: 'Krzysiek',
    nickname: 'Backend Master',
    specialty: 'Backend Development',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'Microservices', 'RabbitMQ'],
    experience: '4+ lat doświadczenia',
    projects: '25+ systemów',
    bio: 'Główny backend developer. Odpowiedzialny za rozwój backendu i architekturę systemu.',
    socials: {
      github: `${socialLinks.github}/krzysiek`,
      discord: socialLinks.discord
    }
  },
  {
    id: 6,
    role: 'AI Developer',
    name: 'MALYMATI2007',
    nickname: 'AI Specialist',
    specialty: 'AI & Machine Learning',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'CUDA', 'Pandas', 'NumPy'],
    experience: '2+ lat doświadczenia',
    projects: '10+ modeli AI',
    bio: 'Developer AI. Odpowiedzialny za rozwój i trening modeli AI.',
    socials: {
      github: `${socialLinks.github}/malymati`,
      discord: socialLinks.discord
    }
  },
  {
    id: 7,
    role: 'AI Developer',
    name: '🗿Patryk🍷',
    nickname: 'ML Engineer',
    specialty: 'Machine Learning & Data Science',
    skills: ['Python', 'Keras', 'Jupyter', 'Hadoop', 'Spark', 'MLflow', 'FastAPI', 'Docker'],
    experience: '2+ lat doświadczenia',
    projects: '8+ projektów ML',
    bio: 'Developer AI i Data Scientist. Odpowiedzialny za analizę danych i rozwój modeli ML.',
    socials: {
      github: `${socialLinks.github}/patryk`,
      discord: socialLinks.discord
    }
  },
  {
    id: 8,
    role: 'AI Developer',
    name: 'nejt12475',
    nickname: 'AI Researcher',
    specialty: 'AI Research & Development',
    skills: ['Python', 'JAX', 'Transformers', 'ONNX', 'Ray', 'DVC', 'Weights & Biases', 'Optuna'],
    experience: '2+ lat doświadczenia',
    projects: '5+ projektów AI',
    bio: 'Developer AI i researcher. Odpowiedzialny za badania i rozwój nowych modeli AI.',
    socials: {
      github: `${socialLinks.github}/nejt`,
      discord: socialLinks.discord
    }
  }
];

export { teamMembers };