import Layout from '../components/Layout';
import Banner from '../components/Banner';
import PhoneNumber from '../components/PhoneNumber';

const Contacts = () => {
  return (
    <Layout>
      {/* Баннер с заголовком "Контакты" */}
      <Banner 
        bgimg="/img/ct.png"
        className="h-[300px] text-white" 
        title="Контакты сервиса"
      ></Banner>

      {/* Информация о контактах */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Левая колонка с текстом */}
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  Наша команда профессионалов готова помочь вам с ремонтом любой бытовой техники. 
                  Мы гарантируем быстрый отклик и качественный сервис.
                </p>
                <p className="mb-4">
                  Если у вас возникла проблема с бытовой техникой, не откладывайте ремонт. 
                  Неисправное оборудование может привести к более серьезным поломкам или даже 
                  представлять опасность для вашего дома.
                </p>
                <p className="mb-4">
                  Позвоните нам или напишите в WhatsApp, и мы оперативно ответим на все ваши вопросы 
                  и организуем выезд мастера в удобное для вас время.
                </p>
                <div className="mt-8">
                  <a 
                    href="https://wa.me/77718721585" 
                    className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                    Написать в WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Правая колонка с контактной информацией */}
            <div className="order-1 md:order-2 bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-8 text-center">Наши контакты</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Телефон</h4>
                    <PhoneNumber />
                    <p className="text-gray-600 text-sm mt-1">Звоните в любое удобное время</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <p>info@masterservice.com</p>
                    <p className="text-gray-600 text-sm mt-1">Мы отвечаем в течение 24 часов</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Режим работы</h4>
                    <p>Ежедневно с 8:00 до 22:00</p>
                    <p className="text-gray-600 text-sm mt-1">Без выходных и праздников</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;