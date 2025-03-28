import { 
  BoltIcon, // Для "СКОРОСТЬ"
  WrenchScrewdriverIcon, // Для "ОПЫТ"
  ShieldCheckIcon, // Для "ГАРАНТИЯ"
  HomeIcon // Для "ВЫЕЗД НА ДОМ"
} from "@heroicons/react/24/solid";

const advantagesList = [
  { 
    title: "СКОРОСТЬ", 
    description: "Выезд мастера в течение 1-2 часов после вашего обращения.", 
    icon: <BoltIcon className="w-10 h-10 text-blue-500" /> 
  },
  { 
    title: "ОПЫТ", 
    description: "Сертифицированные мастера с опытом работы более 10 лет.", 
    icon: <WrenchScrewdriverIcon className="w-10 h-10 text-blue-500" /> 
  },
  { 
    title: "ГАРАНТИЯ", 
    description: "Предоставляем гарантию до 2 лет на все виды работ.", 
    icon: <ShieldCheckIcon className="w-10 h-10 text-blue-500" /> 
  },
  { 
    title: "ВЫЕЗД НА ДОМ", 
    description: "Ремонт бытовой техники в удобное для вас время без выходных.", 
    icon: <HomeIcon className="w-10 h-10 text-blue-500" /> 
  },
];

const Advantages = () => {
  return (
    <div className="py-0 container mx-auto px-4">
 
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {advantagesList.map((advantage, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg shadow flex flex-col items-center text-center">
            {advantage.icon}
            <h3 className="text-xl font-semibold mt-4">{advantage.title}</h3>
            <p className="text-gray-600 mt-2">{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;