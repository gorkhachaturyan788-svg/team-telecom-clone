import React, { useState } from "react";

export default function InternetCoverageForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    region: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    alert("Հայտը հաջողությամբ ուղարկվեց։");
  };

  return (
    <div className="max-w-[1240px] mx-auto px-[5%] py-[40px] font-['Segoe_UI',Arial,sans-serif] text-[#333]">
      <div className="text-[13px] text-[#666] mb-[20px]">
        Գլխավոր <span className="mx-[6px]">&gt;</span> Տեղեկատվություն <span className="mx-[6px]">&gt;</span> Team ինտերնետի հասանելիության ծածկույթ
      </div>

      <p className="text-[16px] text-[#444] leading-[1.6] mb-[30px] max-w-[900px]">
        Տվյալ հասցեում հասանելի ինտերնետի արագությունը ճշտելու համար լրացրեք հետևյալ դիմումը և սեղմեք ուղարկել: Սարքավորումների առաքում և տեղադրումն անվճար է ՀՀ ամբողջ տարածքով:
      </p>

      <h1 className="text-[32px] font-bold text-[#111] mb-[30px]">
        Թողնել հայտ
      </h1>

      <form onSubmit={handleSubmit} className="space-y-[20px] max-w-[1000px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          <div>
            <label htmlFor="fullName" className="block text-[14px] text-[#555] mb-[8px]">
              Անուն ազգանուն*
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              autoComplete="name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full h-[45px] px-[15px] border border-[#ccc] rounded-[6px] text-[15px] outline-none focus:border-[#0b4f70]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[14px] text-[#555] mb-[8px]">
              Էլ.հասցե
            </label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-[45px] px-[15px] border border-[#ccc] rounded-[6px] text-[15px] outline-none focus:border-[#0b4f70]"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-[14px] text-[#555] mb-[8px]">
              Հեռախոսի համար*
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="0"
              className="w-full h-[45px] px-[15px] border border-[#ccc] rounded-[6px] text-[15px] outline-none focus:border-[#0b4f70]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] items-end">
          <div>
            <label htmlFor="region" className="block text-[14px] text-[#555] mb-[8px]">
              Մարզ*
            </label>
            <select
              id="region"
              name="region"
              autoComplete="address-level1"
              value={formData.region}
              onChange={handleChange}
              required
              className="w-full h-[45px] px-[15px] border border-[#ccc] rounded-[6px] text-[15px] bg-white outline-none focus:border-[#0b4f70] text-[#777]"
            >
              <option value="">Ընտրել շրջանը</option>
              <option value="Yerevan">Երևան</option>
              <option value="Aragatsotn">Արագածոտն</option>
              <option value="Ararat">Արարատ</option>
              <option value="Armavir">Արմավիր</option>
              <option value="Gegharkunik">Գեղարքունիք</option>
              <option value="Kotayk">Կոտայք</option>
              <option value="Lori">Լոռի</option>
              <option value="Shirak">Շիրակ</option>
              <option value="Syunik">Սյունիք</option>
              <option value="Tavush">Տավուշ</option>
              <option value="VayotsDzor">Վայոց Ձոր</option>
            </select>
          </div>

          <div>
            <label htmlFor="address" className="block text-[14px] text-[#555] mb-[8px]">
              Հասցե*
            </label>
            <input
              id="address"
              type="text"
              name="address"
              autoComplete="street-address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full h-[45px] px-[15px] border border-[#ccc] rounded-[6px] text-[15px] outline-none focus:border-[#0b4f70]"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full md:w-[180px] h-[45px] bg-[#ef4743] hover:bg-[#d93834] text-white font-medium rounded-[6px] text-[16px] transition-colors cursor-pointer"
            >
              Ուղարկել
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}