import React from "react";

export default function Coverage() {
  return (
    <div className="max-w-[1240px] mx-auto px-[5%] py-[40px] font-['Segoe_UI',Arial,sans-serif] text-[#333]">
      <div className="text-[13px] text-[#666] mb-[20px]">
        Գլխավոր <span className="mx-[6px]">&gt;</span> Տեղեկատվություն <span className="mx-[6px]">&gt;</span> Ծածկույթ
      </div>

      <h1 className="text-[28px] font-bold text-[#0b4f70] mb-[25px]">
        Ծածկույթ
      </h1>

      <div className="space-y-[20px] text-[15px] leading-[1.7] text-[#444]">
        <p>
          Ամրակցված կապի ծառայություններով ապահովված բնակավայրերի ցանկի, կիրառվող տեխնոլոգիաների եւ մատուցվող ծառայությունների վերաբերյալ մանրամասն տեղեկատվությունը առ 01.01.2026թ. դրությամբ, հասանելի է{" "}
          <a href="#coverage-fixed" className="text-[#0b4f70] underline font-medium hover:text-[#196488]">
            այստեղ
          </a>
          :
        </p>

        <p>
          Շարժական կապի ծածկույթով ապահովված բնակավայրերի ցանկի, կիրառվող տեխնոլոգիաների եւ մատուցվող ծառայությունների, ինչպես նաև ծածկույթ չունեցող բնակավայրերի վերաբերյալ մանրամասն տեղեկատվությունը առ 01.01.2026թ. դրությամբ{" "}
          <a href="#coverage-mobile" className="text-[#0b4f70] underline font-medium hover:text-[#196488]">
            այստեղ
          </a>
          :
        </p>

        <p>
          Միջպետական նշանակության ավտոմոբիլային ճանապարհների (մայրուղիներ) հատվածներում կիրառվող շարժական բջջային կապի տեխնոլոգիաների (մատուցվող ծառայությունների) հասանելիության վերաբերյալ տեղեկատվությունը առ 01.01.2026թ. դրությամբ{" "}
          <a href="#coverage-roads" className="text-[#0b4f70] underline font-medium hover:text-[#196488]">
            այստեղ
          </a>
          :
        </p>
      </div>
    </div>
  );
}