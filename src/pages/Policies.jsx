import Navbar from "../components/Navbar";

function Policies() {
  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* Navbar */}
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Policies
        </h1>

        <div className="space-y-6 text-gray-300 text-lg">

          <div className="bg-[#111] p-5 rounded-xl border border-gray-800">
            ASK FOR PAYMENT NUMBER EVERYTIME BEFORE PAYING ✅
          </div>

          <div className="bg-[#111] p-5 rounded-xl border border-gray-800">
            PARCELS ARE DISPATCHED ON THE SAME DAY IF THE ORDER IS PLACED BEFORE 6:00PM ✅
          </div>

          <div className="bg-[#111] p-5 rounded-xl border border-gray-800">
            WE DONT HAVE ANY RETURN OR EXCHANGE POLICY ✅
          </div>

          <div className="bg-[#111] p-5 rounded-xl border border-gray-800">
            PRODUCT IS CHECKED BEFORE DISPATCH SO 99% THERE IS NO POSSIBILITY OF ANY DAMAGE.  
            <br /><br />
            STILL IF ANY DAMAGE IS FOUND THEN WE WILL EXCHANGE YOUR PRODUCT BUT YOU HAVE TO BEAR THE BOTH WAY COURIER CHARGES ‼️
          </div>

          <div className="bg-[#111] p-5 rounded-xl border border-gray-800">
            UNBOXING VIDEO IS MANDATORY IN ANY CASE ‼️
          </div>

        </div>
      </div>
    </div>
  );
}

export default Policies;