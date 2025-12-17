import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
}

const mockArticles: Article[] = [
  {
    id: 1,
    title: 'Топ-10 трендов веб-дизайна 2024',
    description: 'Разбираем самые актуальные тренды в современном веб-дизайне: от минимализма до ярких градиентов',
    category: 'Дизайн',
    tags: ['дизайн', 'тренды', 'веб'],
    date: '15 декабря 2024',
    readTime: '5 мин'
  },
  {
    id: 2,
    title: 'React 19: Что нового?',
    description: 'Обзор новых возможностей React 19 и как они изменят разработку современных приложений',
    category: 'Разработка',
    tags: ['react', 'frontend', 'javascript'],
    date: '12 декабря 2024',
    readTime: '8 мин'
  },
  {
    id: 3,
    title: 'Психология цвета в маркетинге',
    description: 'Как правильно использовать цвета для повышения конверсии и привлечения внимания аудитории',
    category: 'Маркетинг',
    tags: ['маркетинг', 'дизайн', 'психология'],
    date: '10 декабря 2024',
    readTime: '6 мин'
  },
  {
    id: 4,
    title: 'AI в креативных индустриях',
    description: 'Как искусственный интеллект меняет подход к созданию контента и визуального дизайна',
    category: 'Технологии',
    tags: ['ai', 'технологии', 'будущее'],
    date: '8 декабря 2024',
    readTime: '7 мин'
  },
  {
    id: 5,
    title: 'SEO-оптимизация в 2024',
    description: 'Актуальные стратегии продвижения сайтов и что действительно работает сегодня',
    category: 'Маркетинг',
    tags: ['seo', 'маркетинг', 'продвижение'],
    date: '5 декабря 2024',
    readTime: '10 мин'
  },
  {
    id: 6,
    title: 'Микро-анимации в UI',
    description: 'Как небольшие анимации улучшают пользовательский опыт и делают интерфейс живым',
    category: 'Дизайн',
    tags: ['ui', 'анимация', 'ux'],
    date: '3 декабря 2024',
    readTime: '4 мин'
  }
];

const categories = ['Все', 'Дизайн', 'Разработка', 'Маркетинг', 'Технологии'];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [email, setEmail] = useState('');

  const allTags = Array.from(new Set(mockArticles.flatMap(article => article.tags)));

  const filteredArticles = mockArticles.filter(article => {
    const categoryMatch = selectedCategory === 'Все' || article.category === selectedCategory;
    const tagMatch = selectedTags.length === 0 || selectedTags.some(tag => article.tags.includes(tag));
    return categoryMatch && tagMatch;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Подписка:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Блог
            </h1>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Menu" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-black mb-4 animate-fade-in">
            Исследуй мир идей
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto animate-fade-in">
            Статьи про дизайн, разработку, маркетинг и технологии
          </p>
          <div className="flex gap-4 justify-center max-w-md mx-auto animate-scale-in">
            <Input 
              type="email" 
              placeholder="Твой email" 
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button variant="secondary" onClick={handleSubscribe}>
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Категории</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-bold mb-4">Теги</h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? 'default' : 'outline'}
                className="cursor-pointer hover:scale-105 transition-transform px-4 py-2 text-sm"
                onClick={() => toggleTag(tag)}
              >
                #{tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <Card 
              key={article.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in cursor-pointer overflow-hidden border-2 hover:border-primary"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent" />
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="font-semibold">
                    {article.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    {article.readTime}
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {article.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <Icon name="Calendar" size={16} />
                    {article.date}
                  </span>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Читать
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center p-8 shadow-xl border-2">
            <Icon name="Mail" size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="text-3xl font-bold mb-4">Подпишись на рассылку</h3>
            <p className="text-muted-foreground mb-6">
              Получай свежие статьи и новости прямо на почту
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Введи свой email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Подписаться
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-white border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Блог. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
