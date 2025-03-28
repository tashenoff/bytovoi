import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Навбар будет наверху */}
      <Navbar />
      
      {/* Основной контент с children, который растягивается */}
      <main className="flex-grow">{children}</main>
      
      {/* Футер будет прижат к низу */}
      <Footer />
    </div>
  );
};

export default Layout;
