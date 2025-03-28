import Link from 'next/link';
import Image from 'next/image'; // Импортируйте Image из next/image

const ServiceItem = ({ title, banner, description, slug }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <Link href={`/services/${slug}`}>
        <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
          {/* Изображение сверху карточки */}
          <Image 
            src={banner} 
            alt={title} 
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-lg" 
          />
        </div>
        <div className="card-body px-4 py-5">
          <h3 className="card-title text-xl font-semibold">{title}</h3>
          <p className="my-2">{description}</p>
          <div className="card-actions justify-end mt-4">
            <button className="btn w-full bg-blue-500 hover:bg-blue-600 text-white">Подробнее</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceItem;