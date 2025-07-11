import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <Badge
            variant="outline"
            className="mb-6 text-blue-600 border-blue-200"
          >
            Профессиональная веб-разработка
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            Создаём сайты для вашего бизнеса
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Специализируемся на разработке современных веб-решений для малого
            бизнеса, стартапов и корпораций. От идеи до запуска — мы создаём
            сайты, которые работают на результат.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
            >
              <Icon name="Rocket" className="mr-2" size={20} />
              Обсудить проект
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-blue-200 hover:bg-blue-50"
            >
              <Icon name="FileText" className="mr-2" size={20} />
              Посмотреть портфолио
            </Button>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <img
              src="/img/ded2bbde-a744-43b5-a0cc-245ecce8f79d.jpg"
              alt="Современная веб-разработка"
              className="rounded-xl shadow-2xl mx-auto animate-fade-in"
            />
          </div>
        </div>
      </section>

      {/* Специализация по клиентам */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Работаем с разными типами клиентов
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Каждый бизнес уникален. Мы адаптируем наш подход под специфику
              вашей отрасли и масштаб компании.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-blue-500">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Icon name="Store" size={32} className="text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Малый бизнес
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Локальные компании и индивидуальные предприниматели
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    Сайты-визитки и лендинги
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    Интернет-магазины
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    Системы записи и бронирования
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    Быстрый запуск за 1-2 недели
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-green-500">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Icon
                    name="TrendingUp"
                    size={32}
                    className="text-green-600"
                  />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Стартапы
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Молодые компании с инновационными идеями
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    MVP и прототипы
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    Масштабируемые веб-приложения
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    Интеграция с API и сервисами
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    Гибкая методология разработки
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-purple-500">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Icon
                    name="Building2"
                    size={32}
                    className="text-purple-600"
                  />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Корпорации
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Крупные компании и enterprise-решения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    Корпоративные порталы
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    CRM и ERP системы
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    Высокие требования к безопасности
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    Техподдержка и сопровождение
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Полный цикл веб-разработки
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              От концепции до поддержки — мы предоставляем все необходимые
              услуги для успешного запуска вашего проекта.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Icon name="Code" size={24} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Разработка</h3>
              <p className="text-sm text-gray-600">
                Современные технологии и лучшие практики
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Icon name="Palette" size={24} className="text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Дизайн</h3>
              <p className="text-sm text-gray-600">
                UX/UI дизайн и адаптивная верстка
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Icon name="Search" size={24} className="text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">SEO</h3>
              <p className="text-sm text-gray-600">
                Оптимизация для поисковых систем
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Icon name="Headphones" size={24} className="text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Поддержка</h3>
              <p className="text-sm text-gray-600">
                Техническое сопровождение 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Готовы обсудить ваш проект?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Расскажите о ваших задачах, и мы предложим оптимальное решение с
            учетом бюджета и сроков.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Связаться с нами
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-gray-600 text-white hover:bg-gray-800"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Заказать звонок
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
