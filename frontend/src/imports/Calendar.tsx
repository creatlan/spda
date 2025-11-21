function TimeSlot({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Time Slot">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[20px] relative shrink-0 text-[15px] text-black text-nowrap tracking-[-0.23px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        СМЕНА -<br aria-hidden="true" />
        День
      </p>
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[18px] relative shrink-0 text-[13px] text-black text-nowrap tracking-[-0.08px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        9-15
      </p>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[7px] top-[11px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "241", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[241px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-2px]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 241 2">
                <line id="Line 1" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" x1="1" x2="240" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="[grid-area:2_/_2] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell1() {
  return (
    <div className="[grid-area:2_/_3] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell2() {
  return (
    <div className="[grid-area:3_/_2] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell3() {
  return (
    <div className="[grid-area:3_/_3] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell4() {
  return (
    <div className="[grid-area:4_/_2] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell5() {
  return (
    <div className="[grid-area:4_/_3] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell6() {
  return (
    <div className="[grid-area:5_/_2] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell7() {
  return (
    <div className="[grid-area:5_/_3] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell8() {
  return (
    <div className="[grid-area:6_/_2] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell9() {
  return (
    <div className="[grid-area:6_/_3] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell10() {
  return (
    <div className="[grid-area:7_/_2] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell11() {
  return (
    <div className="[grid-area:7_/_3] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell12() {
  return (
    <div className="[grid-area:8_/_1] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell13() {
  return (
    <div className="[grid-area:8_/_2] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell14() {
  return (
    <div className="[grid-area:8_/_3] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell15() {
  return (
    <div className="[grid-area:9_/_1] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell16() {
  return (
    <div className="[grid-area:9_/_2] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell17() {
  return (
    <div className="[grid-area:9_/_3] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell18() {
  return (
    <div className="[grid-area:10_/_1] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell19() {
  return (
    <div className="[grid-area:10_/_2] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell20() {
  return (
    <div className="[grid-area:10_/_3] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell21() {
  return (
    <div className="[grid-area:11_/_1] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell22() {
  return (
    <div className="[grid-area:11_/_2] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell23() {
  return (
    <div className="[grid-area:11_/_3] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell24() {
  return (
    <div className="[grid-area:12_/_1] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell25() {
  return (
    <div className="[grid-area:12_/_2] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell26() {
  return (
    <div className="[grid-area:12_/_3] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell27() {
  return (
    <div className="[grid-area:13_/_1] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell28() {
  return (
    <div className="[grid-area:13_/_2] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CellWithText() {
  return (
    <div className="[grid-area:1_/_1] relative rounded-tl-[8px] shrink-0" data-name="Cell with Text">
      <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Вт - 06
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-tl-[8px]" />
    </div>
  );
}

function CellWithText1() {
  return (
    <div className="[grid-area:1_/_2] relative shrink-0" data-name="Cell with Text">
      <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Ср - 07
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CellWithText2() {
  return (
    <div className="[grid-area:1_/_3] relative rounded-tr-[8px] shrink-0" data-name="Cell with Text">
      <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Чт - 08
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-tr-[8px]" />
    </div>
  );
}

function Cell29() {
  return (
    <div className="[grid-area:2_/_1] h-[43.615px] relative shrink-0 w-[107.333px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell30() {
  return (
    <div className="[grid-area:3_/_1] h-[43.615px] relative shrink-0 w-[107.333px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell31() {
  return (
    <div className="[grid-area:4_/_1] h-[43.615px] relative shrink-0 w-[107.333px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell32() {
  return (
    <div className="[grid-area:5_/_1] h-[43.615px] relative shrink-0 w-[107.333px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell33() {
  return (
    <div className="[grid-area:6_/_1] h-[43.615px] relative shrink-0 w-[107.333px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell34() {
  return (
    <div className="[grid-area:7_/_1] h-[43.615px] relative shrink-0 w-[107.333px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TimeSlot1() {
  return (
    <div className="absolute bg-[#2d2d2d] box-border content-stretch flex flex-col gap-[2px] h-[255px] items-start left-[111px] pl-[12px] pr-[8px] py-[10px] rounded-[8px] top-[309px] w-[101px]" data-name="Time Slot">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[20px] relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.23px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        СМЕНА -<br aria-hidden="true" />
        Вечер
      </p>
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[13px] text-nowrap text-white tracking-[-0.08px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        15-21
      </p>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[7px] top-[11px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "241", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[241px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-2px]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 241 2">
                <line id="Line 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" x1="1" x2="240" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimeSlot2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] gap-[2px] h-[255px] items-start left-[110px] pl-[12px] pr-[8px] py-[10px] rounded-[8px] text-black text-nowrap top-[47px] w-[101px] whitespace-pre" data-name="Time Slot">
      <p className="leading-[20px] relative shrink-0 text-[15px] tracking-[-0.23px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Свободен
      </p>
      <p className="leading-[18px] relative shrink-0 text-[13px] tracking-[-0.08px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        9-15
      </p>
    </div>
  );
}

function TimeSlot3() {
  return (
    <div className="absolute bg-[#f2f2f7] box-border content-stretch flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] gap-[2px] h-[255px] items-start left-[3px] pl-[12px] pr-[8px] py-[10px] rounded-[8px] text-black text-nowrap top-[309px] w-[101px] whitespace-pre" data-name="Time Slot">
      <p className="leading-[20px] relative shrink-0 text-[15px] tracking-[-0.23px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Неудобно,
        <br aria-hidden="true" />
        но могу
        <br aria-hidden="true" />
        выйти
      </p>
      <p className="leading-[18px] relative shrink-0 text-[13px] tracking-[-0.08px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        15-21
      </p>
    </div>
  );
}

function TimeSlot4() {
  return (
    <div className="absolute bg-[#e5e5ea] box-border content-stretch flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] gap-[2px] h-[255px] items-start left-[218px] pl-[12px] pr-[8px] py-[10px] rounded-[8px] text-black text-nowrap top-[309px] w-[101px] whitespace-pre" data-name="Time Slot">
      <p className="leading-[20px] relative shrink-0 text-[15px] tracking-[-0.23px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Не могу
        <br aria-hidden="true" />
        выйти
      </p>
      <p className="leading-[18px] relative shrink-0 text-[13px] tracking-[-0.08px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        15-21
      </p>
    </div>
  );
}

function TimeSlot5() {
  return (
    <div className="absolute bg-[#f2f2f7] box-border content-stretch flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] gap-[2px] h-[255px] items-start left-[217px] pl-[12px] pr-[8px] py-[10px] rounded-[8px] text-black text-nowrap top-[47px] w-[101px] whitespace-pre" data-name="Time Slot">
      <p className="leading-[20px] relative shrink-0 text-[15px] tracking-[-0.23px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Неудобно,
        <br aria-hidden="true" />
        но могу
        <br aria-hidden="true" />
        выйти
      </p>
      <p className="leading-[18px] relative shrink-0 text-[13px] tracking-[-0.08px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        9-15
      </p>
    </div>
  );
}

function Cell35() {
  return (
    <div className="[grid-area:13_/_3] h-[43.615px] relative shrink-0 w-[107.333px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function Calendar() {
  return (
    <div className="grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(14,_minmax(0px,_1fr))] relative size-full" data-name="Calendar">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
      <Cell5 />
      <Cell6 />
      <Cell7 />
      <Cell8 />
      <Cell9 />
      <Cell10 />
      <Cell11 />
      <Cell12 />
      <Cell13 />
      <Cell14 />
      <Cell15 />
      <Cell16 />
      <Cell17 />
      <Cell18 />
      <Cell19 />
      <Cell20 />
      <Cell21 />
      <Cell22 />
      <Cell23 />
      <Cell24 />
      <Cell25 />
      <Cell26 />
      <Cell27 />
      <Cell28 />
      <CellWithText />
      <CellWithText1 />
      <CellWithText2 />
      <Cell29 />
      <Cell30 />
      <Cell31 />
      <Cell32 />
      <Cell33 />
      <Cell34 />
      <TimeSlot className="absolute bg-[#d1d1d6] box-border content-stretch flex flex-col gap-[2px] h-[255px] items-start left-[3px] pl-[12px] pr-[8px] py-[10px] rounded-[8px] top-[47px] w-[101px]" />
      <TimeSlot1 />
      <TimeSlot2 />
      <TimeSlot3 />
      <TimeSlot4 />
      <TimeSlot5 />
      <Cell35 />
    </div>
  );
}