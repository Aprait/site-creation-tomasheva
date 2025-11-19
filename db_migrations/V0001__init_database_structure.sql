-- Создание таблицы услуг (Services)
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    base_price VARCHAR(100),
    is_mandatory BOOLEAN DEFAULT FALSE,
    features JSONB,
    icon_ref VARCHAR(100),
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание таблицы кейсов (Cases)
CREATE TABLE cases (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(255),
    project_title VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    industry_tag VARCHAR(100),
    tech_stack JSONB,
    challenge_summary TEXT,
    results_metric VARCHAR(255),
    outcome_text TEXT,
    thumbnail_url VARCHAR(500),
    is_featured BOOLEAN DEFAULT FALSE,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание таблицы лидов (Leads)
CREATE TABLE leads (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255),
    inquiry_type VARCHAR(100) DEFAULT 'Консультация',
    message TEXT,
    selected_modules JSONB,
    source_page VARCHAR(100),
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание таблицы метаданных сайта
CREATE TABLE site_metadata (
    id SERIAL PRIMARY KEY,
    key VARCHAR(100) UNIQUE NOT NULL,
    value TEXT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Индексы для быстрого поиска
CREATE INDEX idx_services_category ON services(category);
CREATE INDEX idx_services_active ON services(is_active);
CREATE INDEX idx_cases_category ON cases(category);
CREATE INDEX idx_cases_featured ON cases(is_featured);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created ON leads(created_at DESC);

-- Вставка базовых метаданных
INSERT INTO site_metadata (key, value) VALUES 
('expert_name', 'Наталья Томашёва'),
('expert_title', 'Эксперт по системному росту и внедрению ИИ'),
('expert_experience', '20+ лет опыта в консалтинге'),
('site_tagline', 'Превращаем хаос в систему через силу ИИ и управленческих технологий');

-- Вставка начальных услуг
INSERT INTO services (title, slug, description, category, base_price, is_mandatory, features, icon_ref, display_order) VALUES
('Core Audit: Диагностика точек роста', 'core-audit', 'Глубокий аудит бизнес-процессов для выявления узких мест и точек роста. Анализ текущего состояния, построение карты процессов, выявление потерь и формирование дорожной карты оптимизации.', 'Base', 'от 250 000 ₽', true, '["Аудит бизнес-процессов", "Карта узких мест", "Дорожная карта роста", "Приоритизация изменений"]', 'Search', 1),
('System Tracking: Внедрение OKR', 'system-tracking', 'Внедрение системы Objectives and Key Results для синхронизации целей всей команды. Разработка дерева целей, обучение методологии, настройка ритма встреч и трекинга прогресса.', 'Growth', 'от 180 000 ₽', false, '["Разработка дерева OKR", "Обучение команды", "Настройка ритма встреч", "Трекинг и корректировки"]', 'Target', 2),
('AI Operations: Автоматизация и ИИ', 'ai-operations', 'Интеграция искусственного интеллекта в бизнес-процессы. Анализ задач для автоматизации, выбор и внедрение ИИ-инструментов, обучение персонала, измерение эффекта.', 'Tech', 'от 300 000 ₽', false, '["Аудит процессов для ИИ", "Подбор и интеграция решений", "Обучение команды работе с ИИ", "Измерение ROI"]', 'Bot', 3),
('Strategy Blueprint: Маркетинг и цифровизация', 'strategy-blueprint', 'Разработка стратегии цифровой трансформации и маркетинга. Позиционирование, воронки продаж, выбор каналов, автоматизация маркетинга через ИИ.', 'Strategy', 'от 220 000 ₽', false, '["Аудит текущего маркетинга", "Стратегия позиционирования", "Воронки и автоматизация", "План запуска"]', 'Lightbulb', 4),
('StratSession: Стратегические сессии', 'strat-session', 'Интенсивные стратегические сессии с топ-командой для выработки вектора развития. Фасилитация, проработка целей, поиск точек кратного роста, создание плана действий.', 'Strategy', 'от 350 000 ₽', false, '["Фасилитация сессии (1-2 дня)", "Проработка целей", "План на год", "Синхронизация команды"]', 'Users', 5),
('Venture Scale: От идеи до Series A', 'venture-scale', 'Сопровождение стартапов от идеи до привлечения инвестиций. Валидация гипотез, unit-экономика, pitch deck, поиск инвесторов, подготовка к раундам.', 'Startup', 'по запросу', false, '["Валидация бизнес-модели", "Unit-экономика", "Pitch deck и презентация", "Подготовка к инвестициям"]', 'Rocket', 6);

-- Вставка примеров кейсов
INSERT INTO cases (client_name, project_title, category, industry_tag, tech_stack, challenge_summary, results_metric, outcome_text, is_featured, display_order) VALUES
('Конфиденциальный клиент', 'Внедрение ИИ в отдел продаж', 'AI Operations', 'B2B SaaS', '["ChatGPT API", "CRM интеграция", "Python"]', 'Компания тратила 60% времени менеджеров на рутинные задачи: составление коммерческих предложений, анализ конкурентов, подготовку презентаций.', '300% рост эффективности', 'После внедрения ИИ-ассистента время на рутину сократилось до 15%. Менеджеры стали закрывать на 2.5x больше сделок за счет фокуса на живом общении.', true, 1),
('Производственная компания', 'Построение системы OKR', 'System Tracking', 'Производство', '["Notion", "Custom Dashboard"]', 'Компания росла хаотично. Отделы работали изолированно, цели не были синхронизированы, а сотрудники не понимали общий вектор движения.', 'x2.3 рост выручки за год', 'Внедрили систему OKR на 3 уровнях: компания → отделы → сотрудники. Установили квартальный ритм планирования и ревью. Через 12 месяцев выручка выросла в 2.3 раза.', true, 2),
('Ритейл', 'Цифровая трансформация маркетинга', 'Strategy Blueprint', 'Retail', '["Meta Ads", "Google Analytics", "AI копирайтинг"]', 'Маркетинг работал интуитивно, без данных. CAC рос, LTV падал, атрибуция отсутствовала. Нужна была системная перестройка.', 'CAC снижен на 45%', 'Построили аналитику полного цикла, внедрили ИИ для генерации креативов, автоматизировали сегментацию. CAC упал на 45%, конверсия выросла на 67%.', false, 3);
