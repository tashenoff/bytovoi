import Layout from '../components/Layout';
import Banner from '../components/Banner';
import About from '../components/About';
import Advantages from '../components/Advantages';
import LeaveRequest from '../components/LeaveRequest';
import FAQ from '../components/FAQItem';
import faqHome from '../data/faqHome';
import ServicesCarousel from '../components/ServicesCarousel'; // Импортируем карусель
import services from '../data/services'; // Импортируем данные услуг
// import Steps from '../components/Steps';

const Home = () => {
  return (
    <Layout>
      <Banner
        bgimg="/img/uslugi.png"
        className="h-[700px] w-full text-white"
        title="Профессиональный ремонт бытовой техники"
      >
        <p className="py-5 lg:w-1/2 w-full">
          Быстрый и качественный ремонт стиральных машин, холодильников, духовок и пылесосов. <br />
          Выезд мастера на дом в течение 1-2 часов. Гарантия на все виды работ!
        </p>
        <a
          href="https://wa.me/77718721585"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 px-4 lg:w-1/2 w-full text-center py-3 bg-blue-500 border-white border text-white rounded-full"
        >
          Вызвать мастера
        </a>
      </Banner>

      <Advantages />

      {/* Добавляем карусель услуг */}
      <ServicesCarousel services={services} />
      {/* <Steps /> */}
      <FAQ faqData={faqHome} />
      <About />
      <LeaveRequest title="Нужна срочная помощь?" />
    </Layout>
  );
};

export default Home;