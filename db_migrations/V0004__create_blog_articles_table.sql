-- Создаем таблицу для статей блога
CREATE TABLE IF NOT EXISTS blog_articles (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category VARCHAR(50) NOT NULL,
  category_name VARCHAR(100) NOT NULL,
  image_url TEXT,
  read_time VARCHAR(20),
  featured BOOLEAN DEFAULT FALSE,
  published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Индекс для быстрого поиска по категориям
CREATE INDEX IF NOT EXISTS idx_blog_category ON blog_articles(category);
CREATE INDEX IF NOT EXISTS idx_blog_featured ON blog_articles(featured);
CREATE INDEX IF NOT EXISTS idx_blog_published ON blog_articles(published);