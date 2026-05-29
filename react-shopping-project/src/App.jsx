

function App() {


  return (
    <>
  <div className="h-screen bg-pink-100 flex justify-center items-center">

      <div className="w-[450px] h-[500px] bg-white rounded-4xl shadow-2xl p-6">

       
        <div className="text-center">
          <h1 className="text-4xl font-bold text-pink-600 ">
            🛍️ Shopping Mall
          </h1>

          <p className="text-gray-500 mt-2">
            Choose your favorite item ✨
          </p>
        </div>

       
        <div className="mt-8 flex flex-col gap-5">

          {/* Dress */}
          <div className="bg-pink-50 p-5 rounded-2xl flex justify-between items-center shadow-sm">

            <div>
              <h2 className="text-xl font-bold">
                👗 Cute Dress
              </h2>

              <p className="text-gray-500">
                Price: $30
              </p>
            </div>

            <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full font-semibold">
              Buy
            </button>

          </div>

          {/* Bag */}
          <div className="bg-purple-50 p-5 rounded-2xl flex justify-between items-center shadow-sm">

            <div>
              <h2 className="text-xl font-bold">
                👜 Stylish Bag
              </h2>

              <p className="text-gray-500">
                Price: $20
              </p>
            </div>

            <button className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-full font-semibold">
              Buy
            </button>

          </div>

          {/* Shoes */}
          <div className="bg-rose-50 p-5 rounded-2xl flex justify-between items-center shadow-sm">

            <div>
              <h2 className="text-xl font-bold">
                👠 Fashion Shoes
              </h2>

              <p className="text-gray-500">
                Price: $40
              </p>
            </div>

            <button className="bg-rose-500 hover:bg-rose-600 text-white px-5 py-2 rounded-full font-semibold">
              Buy
            </button>

          </div>

        </div>

      </div>

    </div>
    </>
  )
}

export default App
