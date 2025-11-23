import svgPaths from "./svg-xxbelapiyp";

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-white" data-name="Text">
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[22px] tracking-[-0.26px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Следующая смена
      </p>
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[0px] text-[17px] tracking-[-0.43px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span>{`08.11.2024  `}</span>
        <span className="font-['SF_Pro:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>
          15:00-21:00
        </span>
      </p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="h-[48px] relative rounded-[100px] shrink-0 w-full" data-name="_Buttons">
      <div aria-hidden="true" className="absolute border border-[#8e8e93] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center justify-center px-[16px] py-[13px] relative w-full">
          <div className="absolute inset-0 rounded-[100px]" data-name="BG" />
          <div className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] relative shrink-0 text-[17px] text-nowrap text-white tracking-[-0.43px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px] whitespace-pre">Найти замену</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#2d2d2d] relative rounded-[16px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)] shrink-0 w-full" data-name="Card">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center px-[24px] py-[20px] relative w-full">
          <Text />
          <Buttons />
        </div>
      </div>
    </div>
  );
}

function SunMedium() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="sun-medium">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="sun-medium">
          <path d={svgPaths.p23f74c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <SunMedium />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        5
      </p>
    </div>
  );
}

function Moon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="moon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="moon">
          <path d={svgPaths.pccb100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <Moon />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        4
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Container />
      <Container1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip px-[24px] py-[16px] relative rounded-[16px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.2)] shrink-0 w-[175px]" data-name="Card">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[25px] relative shrink-0 text-[20px] text-black text-nowrap tracking-[-0.45px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        9 смен
      </p>
      <Frame8 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] gap-[8px] items-start justify-center overflow-clip px-[24px] py-[16px] relative rounded-[16px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.2)] shrink-0 text-nowrap w-[175px] whitespace-pre" data-name="Card">
      <p className="leading-[25px] relative shrink-0 text-[#34c759] text-[20px] tracking-[-0.45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        + 973 ₽
      </p>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[0px] text-[17px] text-black tracking-[-0.43px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>{`Сегодня `}</span>
        <span className="text-[#34c759]" style={{ fontVariationSettings: "'wdth' 100" }}>
          +173 ₽
        </span>
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Card1 />
      <Card2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[22px] text-black tracking-[-0.26px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        В этом месяце
      </p>
      <Frame12 />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-left">
          <path d="M15 18L9 12L15 6" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-left">
          <path d="M15 18L9 12L15 6" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Month() {
  return (
    <div className="box-border content-stretch flex items-center justify-between px-0 py-[4px] relative rounded-[8px] shrink-0 w-full" data-name="Month">
      <ChevronLeft />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[22px] text-black text-center text-nowrap tracking-[-0.26px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ноябрь
      </p>
      <ChevronRight />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 bg-[#e5e5ea] grow min-h-px min-w-px relative rounded-tl-[16px] self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#c7c7cc] border-solid inset-[-0.5px] pointer-events-none rounded-tl-[16.5px]" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-between px-[4px] py-[8px] relative size-full">
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[16px] text-[rgba(60,60,67,0.6)] text-nowrap tracking-[-0.31px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            пн
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 bg-[#e5e5ea] grow min-h-px min-w-px relative self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#c7c7cc] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-between px-[4px] py-[8px] relative size-full">
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[16px] text-[rgba(60,60,67,0.6)] text-nowrap tracking-[-0.31px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            вт
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 bg-[#e5e5ea] grow min-h-px min-w-px relative self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#c7c7cc] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-between px-[4px] py-[8px] relative size-full">
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[16px] text-[rgba(60,60,67,0.6)] text-nowrap tracking-[-0.31px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            ср
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 bg-[#e5e5ea] grow min-h-px min-w-px relative self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#c7c7cc] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-between px-[4px] py-[8px] relative size-full">
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[16px] text-[rgba(60,60,67,0.6)] text-nowrap tracking-[-0.31px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            чт
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 bg-[#e5e5ea] grow min-h-px min-w-px relative self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#c7c7cc] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-between px-[4px] py-[8px] relative size-full">
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[16px] text-[rgba(60,60,67,0.6)] text-nowrap tracking-[-0.31px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            пт
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 bg-[#e5e5ea] grow min-h-px min-w-px relative self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#c7c7cc] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-between px-[4px] py-[8px] relative size-full">
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[16px] text-[rgba(60,60,67,0.6)] text-nowrap tracking-[-0.31px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            сб
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 bg-[#e5e5ea] grow min-h-px min-w-px relative rounded-tr-[16px] self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#c7c7cc] border-solid inset-[-0.5px] pointer-events-none rounded-tr-[16.5px]" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-between px-[4px] py-[8px] relative size-full">
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[16px] text-[rgba(60,60,67,0.6)] text-nowrap tracking-[-0.31px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            вс
          </p>
        </div>
      </div>
    </div>
  );
}

function Days() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Days">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame />
    </div>
  );
}

function Items() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day32() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-0 p-[12px] top-0 w-[53px]" data-name="DAY 33">
      <div aria-hidden="true" className="absolute border border-[#f2f2f7] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-40 relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">29</p>
      <Items />
    </div>
  );
}

function Items1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day33() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[53px] p-[12px] top-0 w-[53px]" data-name="DAY 34">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-40 relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">30</p>
      <Items1 />
    </div>
  );
}

function Items2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day34() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[106px] p-[12px] top-0 w-[53px]" data-name="DAY 35">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-40 relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">31</p>
      <Items2 />
    </div>
  );
}

function Items3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[159px] p-[12px] top-0 w-[52px]" data-name="DAY 1">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">1</p>
      <Items3 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[27px] left-[162px] rounded-[8px] top-[70px] w-[46px]" data-name="Пустая Смена">
      <div aria-hidden="true" className="absolute border border-[#d1d1d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Items4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[211px] p-[12px] top-0 w-[53px]" data-name="DAY 2">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">2</p>
      <Items4 />
    </div>
  );
}

function Items5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[264px] p-[12px] top-0 w-[53px]" data-name="DAY 3">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">3</p>
      <Items5 />
    </div>
  );
}

function Items6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day3() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[317px] p-[12px] top-0 w-[53px]" data-name="DAY 4">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">4</p>
      <Items6 />
    </div>
  );
}

function Items7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day4() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-0 p-[12px] top-[100px] w-[53px]" data-name="DAY 5">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">5</p>
      <Items7 />
    </div>
  );
}

function Items8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day5() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[53px] p-[12px] top-[100px] w-[53px]" data-name="DAY 6">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">6</p>
      <Items8 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[#8e8e93] box-border content-stretch flex flex-col gap-[10px] items-center justify-center left-[11px] px-[9px] py-[3px] rounded-[100px] top-[8px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-nowrap text-white whitespace-pre">7</p>
    </div>
  );
}

function Day6() {
  return (
    <div className="absolute bg-white h-[100px] left-[106px] top-[100px] w-[53px]" data-name="DAY 7">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <Frame7 />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[27px] left-[56px] rounded-[8px] top-[169px] w-[46px]" data-name="Пустая Смена">
      <div aria-hidden="true" className="absolute border border-[#d1d1d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute h-[27px] left-[268px] rounded-[8px] top-[70px] w-[46px]" data-name="Пустая Смена">
      <div aria-hidden="true" className="absolute border border-[#d1d1d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SunMedium1() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="sun-medium">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="sun-medium">
          <path d={svgPaths.p23f74c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute bg-[#d1d1d6] box-border content-stretch flex gap-[10px] h-[27px] items-center justify-center left-[56px] overflow-clip px-[6px] py-0 rounded-[8px] top-[140px] w-[46px]" data-name="Смена">
      <SunMedium1 />
    </div>
  );
}

function SunMedium2() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="sun-medium">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="sun-medium">
          <path d={svgPaths.p23f74c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute bg-[#d1d1d6] box-border content-stretch flex gap-[10px] h-[27px] items-center justify-center left-[268px] overflow-clip px-[6px] py-0 rounded-[8px] top-[41px] w-[46px]" data-name="Смена">
      <SunMedium2 />
    </div>
  );
}

function Items9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day7() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[159px] p-[12px] top-[100px] w-[52px]" data-name="DAY 8">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">8</p>
      <Items9 />
    </div>
  );
}

function Items10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day8() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[211px] p-[12px] top-[100px] w-[53px]" data-name="DAY 9">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">9</p>
      <Items10 />
    </div>
  );
}

function Items11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day9() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[264px] p-[12px] top-[100px] w-[53px]" data-name="DAY 10">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">10</p>
      <Items11 />
    </div>
  );
}

function Items12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day10() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[317px] p-[12px] top-[100px] w-[53px]" data-name="DAY 11">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">11</p>
      <Items12 />
    </div>
  );
}

function Items13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day11() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-0 p-[12px] top-[200px] w-[53px]" data-name="DAY 12">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">12</p>
      <Items13 />
    </div>
  );
}

function Items14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day12() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[53px] p-[12px] top-[200px] w-[53px]" data-name="DAY 13">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">13</p>
      <Items14 />
    </div>
  );
}

function Items15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day13() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[106px] p-[12px] top-[200px] w-[53px]" data-name="DAY 14">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">14</p>
      <Items15 />
    </div>
  );
}

function Items16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day14() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[159px] p-[12px] top-[200px] w-[52px]" data-name="DAY 15">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">15</p>
      <Items16 />
    </div>
  );
}

function Items17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day15() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[211px] p-[12px] top-[200px] w-[53px]" data-name="DAY 16">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">16</p>
      <Items17 />
    </div>
  );
}

function Items18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day16() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[264px] p-[12px] top-[200px] w-[53px]" data-name="DAY 17">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">17</p>
      <Items18 />
    </div>
  );
}

function Items19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day17() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[317px] p-[12px] top-[200px] w-[53px]" data-name="DAY 18">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">18</p>
      <Items19 />
    </div>
  );
}

function Items20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day18() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-0 p-[12px] top-[300px] w-[53px]" data-name="DAY 19">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">19</p>
      <Items20 />
    </div>
  );
}

function Items21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day19() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[53px] p-[12px] top-[300px] w-[53px]" data-name="DAY 20">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">20</p>
      <Items21 />
    </div>
  );
}

function Items22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day20() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[106px] p-[12px] top-[300px] w-[53px]" data-name="DAY 21">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">21</p>
      <Items22 />
    </div>
  );
}

function Items23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day21() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[159px] p-[12px] top-[300px] w-[52px]" data-name="DAY 22">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">22</p>
      <Items23 />
    </div>
  );
}

function Items24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day22() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[211px] p-[12px] top-[300px] w-[53px]" data-name="DAY 23">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">23</p>
      <Items24 />
    </div>
  );
}

function Items25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day23() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[264px] p-[12px] top-[300px] w-[53px]" data-name="DAY 24">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">24</p>
      <Items25 />
    </div>
  );
}

function Items26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day24() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[317px] p-[12px] top-[300px] w-[53px]" data-name="DAY 25">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">25</p>
      <Items26 />
    </div>
  );
}

function Items27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day25() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-0 p-[12px] rounded-bl-[16px] top-[400px] w-[53px]" data-name="DAY 26">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[16.5px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">26</p>
      <Items27 />
    </div>
  );
}

function Items28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day26() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[53px] p-[12px] top-[400px] w-[53px]" data-name="DAY 27">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">27</p>
      <Items28 />
    </div>
  );
}

function Items29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day27() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[106px] p-[12px] top-[400px] w-[53px]" data-name="DAY 28">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">28</p>
      <Items29 />
    </div>
  );
}

function Items30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day28() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[159px] p-[12px] top-[400px] w-[52px]" data-name="DAY 29">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">29</p>
      <Items30 />
    </div>
  );
}

function Items31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day29() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[211px] p-[12px] top-[400px] w-[53px]" data-name="DAY 30">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">30</p>
      <Items31 />
    </div>
  );
}

function Items32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day30() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[264px] p-[12px] top-[400px] w-[53px]" data-name="DAY 31">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">31</p>
      <Items32 />
    </div>
  );
}

function Items33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-start p-[2px] w-full" />
      </div>
    </div>
  );
}

function Day31() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[100px] items-center justify-between left-[317px] p-[12px] rounded-br-[16px] top-[400px] w-[53px]" data-name="DAY 32">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-[-0.5px] pointer-events-none rounded-br-[16.5px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-40 relative shrink-0 text-[21px] text-black text-nowrap whitespace-pre">1</p>
      <Items33 />
    </div>
  );
}

function SunMedium3() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="sun-medium">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="sun-medium">
          <path d={svgPaths.p23f74c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute bg-[#d1d1d6] box-border content-stretch flex gap-[10px] h-[27px] items-center justify-center left-[162px] overflow-clip px-[6px] py-0 rounded-[8px] top-[41px] w-[46px]" data-name="Смена">
      <SunMedium3 />
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute h-[27px] left-[57px] rounded-[8px] top-[271px] w-[46px]" data-name="Пустая Смена">
      <div aria-hidden="true" className="absolute border border-[#d1d1d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SunMedium4() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="sun-medium">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="sun-medium">
          <path d={svgPaths.p23f74c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute bg-[#d1d1d6] box-border content-stretch flex gap-[10px] h-[27px] items-center justify-center left-[57px] overflow-clip px-[6px] py-0 rounded-[8px] top-[242px] w-[46px]" data-name="Смена">
      <SunMedium4 />
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute h-[27px] left-[321px] rounded-[8px] top-[170px] w-[46px]" data-name="Пустая Смена">
      <div aria-hidden="true" className="absolute border border-[#d1d1d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SunMedium5() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="sun-medium">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="sun-medium">
          <path d={svgPaths.p23f74c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute bg-[#d1d1d6] box-border content-stretch flex gap-[10px] h-[27px] items-center justify-center left-[321px] overflow-clip px-[6px] py-0 rounded-[8px] top-[141px] w-[46px]" data-name="Смена">
      <SunMedium5 />
    </div>
  );
}

function Moon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="moon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="moon">
          <path d={svgPaths.pccb100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Component10() {
  return (
    <div className="absolute bg-black box-border content-stretch flex gap-[10px] h-[27px] items-center justify-center left-[108px] overflow-clip px-[6px] py-0 rounded-[8px] top-[169px] w-[46px]" data-name="Смена">
      <Moon1 />
    </div>
  );
}

function Moon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="moon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="moon">
          <path d={svgPaths.pccb100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Component11() {
  return (
    <div className="absolute bg-black box-border content-stretch flex gap-[10px] h-[27px] items-center justify-center left-[215px] overflow-clip px-[6px] py-0 rounded-[8px] top-[169px] w-[46px]" data-name="Смена">
      <Moon2 />
    </div>
  );
}

function Moon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="moon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="moon">
          <path d={svgPaths.pccb100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Component12() {
  return (
    <div className="absolute bg-black box-border content-stretch flex gap-[10px] h-[27px] items-center justify-center left-[320px] overflow-clip px-[6px] py-0 rounded-[8px] top-[70px] w-[46px]" data-name="Смена">
      <Moon3 />
    </div>
  );
}

function Moon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="moon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="moon">
          <path d={svgPaths.pccb100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Component13() {
  return (
    <div className="absolute bg-black box-border content-stretch flex gap-[10px] h-[27px] items-center justify-center left-[162px] overflow-clip px-[6px] py-0 rounded-[8px] top-[270px] w-[46px]" data-name="Смена">
      <Moon4 />
    </div>
  );
}

function Component14() {
  return (
    <div className="absolute h-[27px] left-[108px] rounded-[8px] top-[140px] w-[46px]" data-name="Пустая Смена">
      <div aria-hidden="true" className="absolute border border-[#d1d1d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Component15() {
  return (
    <div className="absolute h-[27px] left-[215px] rounded-[8px] top-[140px] w-[46px]" data-name="Пустая Смена">
      <div aria-hidden="true" className="absolute border border-[#d1d1d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Component16() {
  return (
    <div className="absolute h-[27px] left-[320px] rounded-[8px] top-[41px] w-[46px]" data-name="Пустая Смена">
      <div aria-hidden="true" className="absolute border border-[#d1d1d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Component17() {
  return (
    <div className="absolute h-[27px] left-[162px] rounded-[8px] top-[241px] w-[46px]" data-name="Пустая Смена">
      <div aria-hidden="true" className="absolute border border-[#d1d1d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Calendar() {
  return (
    <div className="h-[500px] relative shrink-0 w-full" data-name="Calendar">
      <Day32 />
      <Day33 />
      <Day34 />
      <Day />
      <Component />
      <Day1 />
      <Day2 />
      <Day3 />
      <Day4 />
      <Day5 />
      <Day6 />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Day7 />
      <Day8 />
      <Day9 />
      <Day10 />
      <Day11 />
      <Day12 />
      <Day13 />
      <Day14 />
      <Day15 />
      <Day16 />
      <Day17 />
      <Day18 />
      <Day19 />
      <Day20 />
      <Day21 />
      <Day22 />
      <Day23 />
      <Day24 />
      <Day25 />
      <Day26 />
      <Day27 />
      <Day28 />
      <Day29 />
      <Day30 />
      <Day31 />
      <Component5 />
      <Component6 />
      <Component7 />
      <Component8 />
      <Component9 />
      <Component10 />
      <Component11 />
      <Component12 />
      <Component13 />
      <Component14 />
      <Component15 />
      <Component16 />
      <Component17 />
    </div>
  );
}

function Calendar1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start relative shadow-[0px_0px_20px_0px_rgba(0,0,0,0.2)] shrink-0 w-full" data-name="Calendar">
      <Days />
      <Calendar />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Month />
      <Calendar1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 top-[72px] w-[370px]">
      <Card />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute h-[707px] left-[16px] top-[73px] w-[370px]" data-name="Content">
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold h-[40px] leading-[41px] left-0 text-[34px] text-black top-0 tracking-[0.4px] w-[370px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        WorkPlan
      </p>
      <Frame15 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        30 смен
      </p>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#8e8e93]" style={{ fontVariationSettings: "'wdth' 100" }}>
        240 часов
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[25px] relative shrink-0 text-[20px] text-nowrap tracking-[-0.45px] w-full whitespace-pre">
      <Frame22 />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[#34c759]" style={{ fontVariationSettings: "'wdth' 100" }}>
        +34075 ₽
      </p>
    </div>
  );
}

function SunMedium6() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="sun-medium">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="sun-medium">
          <path d={svgPaths.p23f74c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <SunMedium6 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-nowrap text-white tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`18 дневных `}</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#8e8e93] text-[17px] text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        144 часов
      </p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame23 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#34c759] text-[17px] text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        +14075 ₽
      </p>
    </div>
  );
}

function Moon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="moon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="moon">
          <path d={svgPaths.pccb100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <Moon5 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-nowrap text-white tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`12 вечерних `}</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#8e8e93] text-[17px] text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        96 часов
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame24 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#34c759] text-[17px] text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        +14075 ₽
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame20 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame19 />
      <Frame21 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#2d2d2d] relative rounded-[16px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start px-[20px] py-[16px] relative w-full">
          <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[22px] text-nowrap text-white tracking-[-0.26px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Всего
          </p>
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        9 смен
      </p>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[rgba(60,60,67,0.3)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        72 часа
      </p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[25px] relative shrink-0 text-[20px] text-nowrap tracking-[-0.45px] w-full whitespace-pre">
      <Frame27 />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[#34c759]" style={{ fontVariationSettings: "'wdth' 100" }}>
        +24075 ₽
      </p>
    </div>
  );
}

function SunMedium7() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="sun-medium">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="sun-medium">
          <path d={svgPaths.p23f74c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <SunMedium7 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`5 дневных `}</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-[rgba(60,60,67,0.3)] text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        40 часов
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame29 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#34c759] text-[17px] text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        +14075 ₽
      </p>
    </div>
  );
}

function Moon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="moon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="moon">
          <path d={svgPaths.pccb100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <Moon6 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`4 вечерних `}</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-[rgba(60,60,67,0.3)] text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        32 часов
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame30 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#34c759] text-[17px] text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        +14000 ₽
      </p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Frame31 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[16px] relative w-full">
          <Frame28 />
          <Frame32 />
        </div>
      </div>
    </div>
  );
}

function SunMedium8() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="sun-medium">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="sun-medium">
          <path d={svgPaths.p23f74c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <SunMedium8 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        01.11.2024
      </p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-[rgba(60,60,67,0.3)] text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        6 часов
      </p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[327px]">
      <Frame33 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#34c759] text-[17px] text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        +4075 ₽
      </p>
    </div>
  );
}

function SunMedium9() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="sun-medium">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="sun-medium">
          <path d={svgPaths.p23f74c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <SunMedium9 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        03.11.2024
      </p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-[rgba(60,60,67,0.3)] text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        6 часов
      </p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[327px]">
      <Frame34 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#34c759] text-[17px] text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        +1075 ₽
      </p>
    </div>
  );
}

function Moon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="moon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="moon">
          <path d={svgPaths.pccb100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[110px]" data-name="Container">
      <Moon7 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        04.11.2024
      </p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-[rgba(60,60,67,0.3)] text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        6 часов
      </p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[327px]">
      <Frame36 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#34c759] text-[17px] text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        +4075 ₽
      </p>
    </div>
  );
}

function SunMedium10() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="sun-medium">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="sun-medium">
          <path d={svgPaths.p23f74c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <SunMedium10 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        06.11.2024
      </p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-[rgba(60,60,67,0.3)] text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        6 часов
      </p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[327px]">
      <Frame38 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#34c759] text-[17px] text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        +475 ₽
      </p>
    </div>
  );
}

function Moon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="moon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="moon">
          <path d={svgPaths.pccb100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[110px]" data-name="Container">
      <Moon8 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        07.11.2024
      </p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-[rgba(60,60,67,0.3)] text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        6 часов
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[327px]">
      <Frame40 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#34c759] text-[17px] text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        +4075 ₽
      </p>
    </div>
  );
}

function SunMedium11() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="sun-medium">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="sun-medium">
          <path d={svgPaths.p23f74c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <SunMedium11 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        11.11.2024
      </p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-[rgba(60,60,67,0.3)] text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        6 часов
      </p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[327px]">
      <Frame42 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#34c759] text-[17px] text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        +1075 ₽
      </p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[25px] min-w-full relative shrink-0 text-[20px] text-black tracking-[-0.45px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ноябрь
      </p>
      <Frame18 />
      <Frame11 />
      <Frame35 />
      <Frame37 />
      <Frame39 />
      <Frame41 />
      <Frame43 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[32px] h-[608px] items-center left-[15px] pb-[24px] pt-0 px-0 top-[81px] w-[369px]">
      <Frame17 />
      <Frame44 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[17px] text-black text-nowrap top-[20px] w-[230px] whitespace-pre">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] tracking-[-0.43px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Закрыть
      </p>
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[25px] relative shrink-0 text-[20px] tracking-[-0.45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        История
      </p>
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-white h-[705px] left-px overflow-clip rounded-[16px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.25)] top-[91px] w-[401px]" data-name="Overlay">
      <Frame25 />
      <Frame16 />
    </div>
  );
}

function House() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="house">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="house">
          <path d={svgPaths.p30553100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWtihText() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative shrink-0" data-name="Icon wtih Text">
      <House />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[15px] leading-[18px] relative shrink-0 text-[13px] text-black text-center tracking-[-0.08px] w-[56px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Главная
      </p>
    </div>
  );
}

function LayoutDashboard() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="layout-dashboard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="layout-dashboard">
          <g id="Vector">
            <path d={svgPaths.p1a62d370} stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3ba23a00} stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p217a6500} stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p6580970} stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconWtihText1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative shrink-0" data-name="Icon wtih Text">
      <LayoutDashboard />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#8e8e93] text-[13px] text-center text-nowrap tracking-[-0.08px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Занятость
      </p>
    </div>
  );
}

function CalendarFold() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="calendar-fold">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="calendar-fold">
          <path d={svgPaths.p865db00} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWtihText2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative shrink-0" data-name="Icon wtih Text">
      <CalendarFold />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[15px] leading-[18px] relative shrink-0 text-[#8e8e93] text-[13px] text-center tracking-[-0.08px] w-[56px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        График
      </p>
    </div>
  );
}

function CircleUser() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="circle-user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="circle-user">
          <path d={svgPaths.p246e5270} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWtihText3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative shrink-0" data-name="Icon wtih Text">
      <CircleUser />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#8e8e93] text-[13px] text-center text-nowrap tracking-[-0.08px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Профиль
      </p>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-white bottom-0 box-border content-stretch flex h-[94px] items-start justify-between left-1/2 px-[32px] py-[16px] translate-x-[-50%] w-[402px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#e5e5ea] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <IconWtihText />
      <IconWtihText1 />
      <IconWtihText2 />
      <IconWtihText3 />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute bottom-0 h-[34px] left-1/2 translate-x-[-50%] w-[400px]" data-name="Home Indicator">
      <div className="absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 translate-x-[-50%] w-[144px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-black h-[5px] rounded-[100px] w-[144px]" data-name="Home Indicator" />
        </div>
      </div>
    </div>
  );
}

function Time() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[10px] grow h-[22px] items-center justify-center min-h-px min-w-px pb-0 pt-[2px] px-0 relative shrink-0" data-name="Time">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
    </div>
  );
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[7px] grow h-[22px] items-center justify-center min-h-px min-w-px pb-0 pt-px px-0 relative shrink-0" data-name="Levels">
      <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13">
            <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
          </svg>
        </div>
      </div>
      <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
            <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
          </svg>
        </div>
      </div>
      <Battery />
    </div>
  );
}

function StatusBarIPhone() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[154px] h-[62px] items-center justify-center left-1/2 px-[16px] py-[8px] top-0 translate-x-[-50%] w-[402px]" data-name="Status bar - iPhone">
      <Time />
      <Levels />
    </div>
  );
}

export default function History() {
  return (
    <div className="bg-white overflow-clip relative rounded-[16px] size-full" data-name="History">
      <Content />
      <Overlay />
      <Navigation />
      <HomeIndicator />
      <StatusBarIPhone />
    </div>
  );
}