import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import LeaveRequest from '../../components/LeaveRequest';
import services from '../../data/services'; // Импортируйте массив услуг
import FAQ from '../../components/FAQItem';
import Banner from '../../components/Banner';
// import Portfolio from '../../components/Portfolio'; // Импортируем компонент портфолио
import AdvantagesList from '../../components/AdvantagesList'; // Компонент для преимуществ
import Reviews from '../../components/Reviews';
import SectionHeader from '../../components/SectionHeader';
import SnowfallEffect from '../../components/SnowfallEffect';

const ServicePage = () => {
    const router = useRouter();
    const { slug } = router.query;

    if (!slug) {
        return <div>Загрузка...</div>;
    }

    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return <div>Услуга не найдена</div>; // Обработка случая, если услуга не найдена
    }

    return (
        <Layout>
            <div className='relative h-[500px] overflow-hidden'>
                {slug === 'remont-holodilnikov' && <SnowfallEffect />} {/* Эффект только на этой странице */}
                <Banner bgimg={service.banner} className='h-[500px] text-white text-center' title={service.title} >
                    <a
                        href="https://wa.me/77718721585"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-10 px-4 lg:w-1/2 w-full text-center py-3 bg-red-500 font-bold  uppercase text-sm border-white border text-white rounded-full"
                    >
                        Вызвать мастера
                    </a>

                </Banner>
            </div>
            <div className="container mx-auto py-10">
                <SectionHeader
                    title="Описание услуги"
                    description={service.description}
                />

                <div className="mt-12">
                    <h2 className="text-3xl font-bold mb-6 text-center">Наши преимущества</h2>
                    <AdvantagesList advantages={service.advantages} />
                </div>
                {/* 
                <div className="mt-16">
                    <h2 className="text-3xl font-bold mb-6 text-center">Виды работ</h2>
                    <Portfolio portfolioItems={service.portfolio} />
                </div> */}

                <div className="mt-16 w-full">
                    <h2 className="text-3xl font-bold mb-6 text-center">Часто задаваемые вопросы</h2>
                    <FAQ faqData={service.faq} />
                </div>

                <div className="mt-16">
                    <h2 className="text-3xl font-bold mb-6 text-center">Отзывы клиентов</h2>
                    <Reviews reviews={service.reviews} />
                </div>
            </div>
            <LeaveRequest title='Скидка 20% при заказе через сайт'>
                <p className="text-lg mb-4">Закажите ремонт стиральной машины прямо сейчас и получите скидку 20% на работу мастера</p>
            </LeaveRequest>
        </Layout>
    );
};

export default ServicePage;