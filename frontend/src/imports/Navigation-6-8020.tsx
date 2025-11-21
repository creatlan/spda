import svgPaths from "./svg-4d8epq9qd8";

function House() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="house">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="house">
          <path d={svgPaths.p30553100} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWtihText() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative shrink-0" data-name="Icon wtih Text">
      <House />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[15px] leading-[18px] relative shrink-0 text-[#8e8e93] text-[13px] text-center tracking-[-0.08px] w-[56px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
            <path d={svgPaths.p1a62d370} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3ba23a00} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p217a6500} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p6580970} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[13px] text-black text-center text-nowrap tracking-[-0.08px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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

export default function Navigation() {
  return (
    <div className="bg-white relative size-full" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#e5e5ea] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start justify-between px-[32px] py-[16px] relative size-full">
          <IconWtihText />
          <IconWtihText1 />
          <IconWtihText2 />
          <IconWtihText3 />
        </div>
      </div>
    </div>
  );
}