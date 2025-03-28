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

      <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
        Вызвать мастера
      </button>
    </Banner>
  );
};

export default LeaveRequest;