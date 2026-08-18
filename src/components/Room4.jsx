import React from "react";

export default function Room4() {
  return (
    <div className="w-full bg-[#f7f5f0] py-16 md:py-24 font-sans text-[#003853]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 text-center space-y-10">
        
        {/* Գլխավոր վերնագիր */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Ինտերնետ Ռոումինգում 9 դր/ՄԲ
        </h2>

        {/* Հղում ցանկին */}
        <div>
          <a 
            href="#full-list" 
            className="text-sm sm:text-base font-medium text-[#003853] underline hover:text-[#ff4d4f] transition-colors"
          >
            Հասանելի ուղղությունների և սակագների ամբողջական ցանկ
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 text-left">
          <div className="grid grid-cols-1 divide-y divide-gray-100">
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 gap-2">
              <span className="font-semibold text-base sm:text-lg">Ինտերնետ</span>
              <span className="font-bold text-lg sm:text-xl text-[#003853]">9 դր/ՄԲ*</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 gap-2 bg-gray-50/50">
              <span className="font-semibold text-base sm:text-lg">Մուտքային զանգեր և ելքային զանգեր դեպի Հայաստան</span>
              <span className="font-bold text-lg sm:text-xl text-[#003853]">150 դր/ր</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 gap-2">
              <span className="font-semibold text-base sm:text-lg">Տեղական և միջազգային զանգեր</span>
              <span className="font-bold text-lg sm:text-xl text-[#003853]">250 դր/ր</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 gap-2 bg-gray-50/50">
              <span className="font-semibold text-base sm:text-lg">SMS</span>
              <span className="font-bold text-lg sm:text-xl text-[#003853]">25 դր</span>
            </div>

          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-500 text-left leading-relaxed pt-2">
          *ԱՄՆ, Ալբանիա, Անդորրա, Անգլիա, Անտիգուա և Բարբուդա, Արգենտինա, Ավստրալիա, Ավստրիա, Բելառուս, Բելգիա, Բոսնիա և Հերցեգովինա, Բուլղարիա, Գերմանիա, Գանա, Գրենադա, Գրենլանդիա, Դանիա, Դոմինիկա, Եգիպտոս, Էստոնիա, Թաիլանդ, Թայվան, Իռլանդիա, Իսլանդիա, Իսպանիա, Իսրայել, Իտալիա, Կանադա, Կայմանյան կղզիներ, Կիպրոս, Կոնգո, Կոսովո, Քաթար, Ղազախստան, Ղրղզստան, Ճապոնիա, Հունաստան, Հունգարիա, Խորվաթիա, Լատվիա, Լեհաստան, Լեսոտո, Լիտվա, Լիխտենշտայն, Լյուքսեմբուրգ, Մակեդոնիա, Մալավի, Մալթա, Մարոկկո, Մեծ Բրիտանիա, Մեն կղզի, Մյանմար, Մոզամբիկ, Մոլդովա, Մոնակո, Մոնտեգրո, Նիդերլանդներ, Նոր Զելանդիա, Նորվեգիա, Պապուա Նոր Գվինեա, Պորտուգալիա, Ռուսաստան, Ռումինիա, Սենթ Քիթս և Նևիս, Սենթ Լյուսիա, Սենթ Վինսենթ և Գրենադիններ, Սերբիա, Սլովակիա, Սլովենիա, Շվեդիա, Շվեյցարիա, Չեխիա, Չինաստան, Տաջիկստան, Տոնգա, Ուզբեկստան, Ուկրաինա, Ֆարերյան կղզիներ, Ֆիջի, Ֆինլանդիա, Ֆրանսիա, Վանուատու, Վրաստան
        </p>

      </div>
    </div>
  );
}