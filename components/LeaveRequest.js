import React from "react";
import Banner from "./Banner";

const LeaveRequest = ({ title, children }) => {
  return (
    <Banner
      bgimg="/img/banner.png"
      className="h-[500px] text-white"
      title={title}
      objectPosition="center top" // Смещаем фокус вверх, чтобы было видно лицо
    >
      {children}
      <p className="text-lg font-semibold text-center bg-black/50 p-2 rounded">
        Оставьте свои данные, и мастер перезвонит вам в течение 5 минут
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
  );
};

export default LeaveRequest;