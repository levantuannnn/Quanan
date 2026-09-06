import React, { useState } from "react";

// ====================
// DANH SÁCH MÓN ĂN
// ====================
const foods = [
  {
    id: 1,
    name: "Phở bò",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43",
  },
  {
    id: 2,
    name: "Cơm tấm",
    price: 50000,
    image:
      "https://images.unsplash.com/photo-1516685018646-549198525c1b",
  },
  {
    id: 3,
    name: "Bún bò Huế",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4",
  },
  {
    id: 4,
    name: "Mì xào bò",
    price: 55000,
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
  },
];

// ====================
// DANH SÁCH THỨC UỐNG
// ====================
const drinks = [
  {
    id: 1,
    name: "Coca Cola",
    price: 15000,
    image:
      "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e",
  },
  {
    id: 2,
    name: "Trà đào",
    price: 30000,
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
  },
  {
    id: 3,
    name: "Nước cam",
    price: 25000,
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
  },
  {
    id: 4,
    name: "Cafe",
    price: 25000,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  },
];

// ====================
// CARD MÓN ĂN
// ====================
function FoodCard({ item, quantity, onIncrease, onDecrease }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md">

      {/* Ảnh */}
      <div className="h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Thông tin */}
      <div className="p-4">

        {/* Tên món */}
        <h3 className="text-lg font-bold text-gray-800">
          {item.name}
        </h3>

        {/* Giá */}
        <p className="mt-2 text-lg font-bold text-orange-500">
          {item.price.toLocaleString("vi-VN")}đ
        </p>

        {/* Số lượng */}
        <div className="mt-4 flex items-center justify-between">

          <span className="text-sm font-medium text-gray-600">
            Số lượng
          </span>

          <div className="flex items-center gap-3">

            {/* Giảm */}
            <button
              onClick={onDecrease}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-200 font-bold hover:bg-gray-300"
            >
              -
            </button>

            {/* Số lượng */}
            <span className="w-6 text-center font-bold">
              {quantity}
            </span>

            {/* Tăng */}
            <button
              onClick={onIncrease}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 font-bold text-white hover:bg-orange-600"
            >
              +
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

// ====================
// COMPONENT MAIN
// ====================
function Main() {

  // Lưu số lượng món ăn
  const [foodQuantity, setFoodQuantity] = useState({});

  // Lưu số lượng thức uống
  const [drinkQuantity, setDrinkQuantity] = useState({});

  // Tăng món ăn
  const increaseFood = (id) => {
    setFoodQuantity((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  // Giảm món ăn
  const decreaseFood = (id) => {
    setFoodQuantity((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  // Tăng thức uống
  const increaseDrink = (id) => {
    setDrinkQuantity((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  // Giảm thức uống
  const decreaseDrink = (id) => {
    setDrinkQuantity((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  return (
    <main className="min-h-screen bg-gray-50">

      {/* ==================== */}
      {/* TIÊU ĐỀ */}
      {/* ==================== */}

      <section className="bg-orange-50 px-4 py-12 text-center">

        <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
          🍜 Thực đơn
        </h1>

        <p className="mt-3 text-gray-600">
          Chọn món ăn và thức uống bạn muốn gọi
        </p>

      </section>


      {/* ==================== */}
      {/* MÓN ĂN */}
      {/* ==================== */}

      <section className="mx-auto max-w-7xl px-4 py-10">

        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          🍜 Món ăn
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {foods.map((item) => (
            <FoodCard
              key={item.id}
              item={item}
              quantity={foodQuantity[item.id] || 0}
              onIncrease={() => increaseFood(item.id)}
              onDecrease={() => decreaseFood(item.id)}
            />
          ))}

        </div>

      </section>


      {/* ==================== */}
      {/* THỨC UỐNG */}
      {/* ==================== */}

      <section className="mx-auto max-w-7xl px-4 pb-12">

        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          🥤 Thức uống
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {drinks.map((item) => (
            <FoodCard
              key={item.id}
              item={item}
              quantity={drinkQuantity[item.id] || 0}
              onIncrease={() => increaseDrink(item.id)}
              onDecrease={() => decreaseDrink(item.id)}
            />
          ))}

        </div>

      </section>

    </main>
  );
}

export default Main;