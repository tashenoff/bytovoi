import Layout from '../components/Layout';
import Banner from '../components/Banner';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Используйте этот импорт для стилей Swiper
const Works = () => {
  const works = [
    {
      id: 1,
      title: 'Изготовление окон',
      image: 'https://images.pexels.com/photos/4567123/pexels-photo-4567123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: 'Описание работы 1',
    },
    {
      id: 2,
      title: 'Изготовление дверей',
      image: 'https://cdn.pixabay.com/photo/2018/03/21/20/26/door-3235038_1280.jpg',
      description: 'Описание работы 2',
    },
    {
      id: 3,
      title: 'Перегородки',
      image: 'https://img.freepik.com/free-photo/open-space-office-interior_144627-16046.jpg',
      description: 'Описание работы 3',
    },
    {
      id: 4,
      title: 'Переостекление балконов',
      image: 'https://images.pexels.com/photos/4062036/pexels-photo-4062036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: 'Описание работы 4',
    },
    {
      id: 5,
      title: 'Обслуживание зданий',
      image: 'https://images.pexels.com/photos/2801777/pexels-photo-2801777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: 'Описание работы 5',
    },
  ];

  return (
    <Layout>
      <Banner className="h-[400px]" title="Наши работы" />
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold">Наши проекты</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          Мы гордимся качеством наших работ и предлагаем широкий спектр услуг по изготовлению и установке пластиковых окон, дверей и перегородок. 
          Здесь вы можете увидеть некоторые из наших лучших проектов, которые мы реализовали для наших клиентов.
        </p>
      </div>

      <Swiper spaceBetween={30} slidesPerView={3}>
        {works.map(work => (
          <SwiperSlide key={work.id}>
            <div className="relative h-64"> {/* Установите фиксированную высоту */}
              <img 
                src={work.image} 
                alt={work.title} 
                className="w-full h-full object-cover rounded" // Используйте object-cover для обрезки
              />
              <h3 className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-2 rounded">{work.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Layout>
  );
};

export default Works;
