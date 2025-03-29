import Layout from '../components/Layout';
import Banner from '../components/Banner';
import SectionTitle from '../components/SectionTitle';


const About = () => {
  return (
    <Layout>
      <Banner 
        bgimg="/img/bg.webp"
        className="h-[400px] text-white" 
        title="О нашем сервисном центре"
      ></Banner>
      
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <SectionTitle
              badgeText="История"
              badgeBgColor="bg-blue-500"
              badgeTextColor="text-white"
              title="Как мы начинали"
            />
            <div className="mt-8 text-lg leading-relaxed">
              <p className="mb-4">
                История нашего сервисного центра по ремонту бытовой техники началась в 2013 году, когда группа 
                опытных мастеров решила создать собственную компанию, специализирующуюся на качественном и быстром 
                ремонте бытовой техники.
              </p>
              <p className="mb-4">
                Начиная с небольшой мастерской и всего трех специалистов, за годы работы мы выросли в крупный сервисный центр, 
                обслуживающий тысячи клиентов ежегодно. Мы постоянно совершенствуем наши навыки и оборудование, 
                чтобы предоставлять клиентам лучший сервис в городе.
              </p>
            </div>
          </div>

      
          <div className="mb-16">
            <SectionTitle
              badgeText="Почему мы"
              badgeBgColor="bg-blue-500"
              badgeTextColor="text-white"
              title="Преимущества работы с нами"
            />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">🛠️ Профессионализм</h3>
                <p>
                  Все наши мастера имеют профильное образование и регулярно проходят обучение и сертификацию у ведущих производителей 
                  бытовой техники. Мы знаем особенности каждой модели и марки, что позволяет нам быстро находить и устранять неисправности.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">⏱️ Оперативность</h3>
                <p>
                  Мы ценим ваше время, поэтому организуем выезд мастера в течение 1-2 часов после обращения. 
                  В большинстве случаев ремонт выполняется непосредственно на дому в день обращения.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">💰 Доступные цены</h3>
                <p>
                  Мы поддерживаем разумную ценовую политику и прозрачную систему расчета стоимости услуг. 
                  Никаких скрытых платежей и неожиданных доплат – цена, озвученная мастером после диагностики, окончательная.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">🔒 Гарантия качества</h3>
                <p>
                  На все виды ремонтных работ мы предоставляем гарантию до 2 лет. Если в течение гарантийного срока возникнут проблемы, 
                  мы бесплатно устраним их в кратчайшие сроки.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;