import { comboPackages } from "../data";

export default function ComboSection() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto font-sans">
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-blue-950">COMBO Սակագնային Փաթեթներ</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">Միացրու Ինտերնետը, Տելեվիզորն ու Կապը մեկ փաթեթով և խնայիր ընտանեկան բյուջեն։</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {comboPackages.map((pkg) => (
          <div key={pkg.id} className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-orange-500 transition duration-300 relative flex flex-col justify-between">
            {pkg.badge && (
              <span className="absolute -top-4 right-6 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                {pkg.badge}
              </span>
            )}
            <div>
              <h3 className="text-2xl font-black text-blue-900 mb-2">{pkg.name}</h3>
              <div className="text-4xl font-black text-gray-800 mb-6">{pkg.price}<span className="text-sm font-medium text-gray-500">/ամիս</span></div>
              
              <ul className="space-y-4 border-t border-gray-100 pt-6 text-gray-600 font-medium">
                <li className="flex items-center gap-3">🌐 <span className="text-gray-800 font-bold">Ինտերնետ՝</span> {pkg.speed}</li>
                <li className="flex items-center gap-3">📺 <span className="text-gray-800 font-bold">TeamTV՝</span> {pkg.tv}</li>
                <li className="flex items-center gap-3">📱 <span className="text-gray-800 font-bold">Մոբայլ կապ՝</span> {pkg.mobile}</li>
              </ul>
            </div>

            <button className="w-full bg-blue-900 hover:bg-orange-500 text-white font-bold py-3.5 rounded-xl mt-8 transition duration-200">
              Միանալ փաթեթին
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}