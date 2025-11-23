import svgPaths from "./svg-c69m74xc8f";

function Buttons() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] box-border content-stretch flex gap-[10px] items-center justify-center left-[16px] px-[16px] py-[13px] rounded-[100px] top-[655px] w-[369px]" data-name="_Buttons">
      <div className="absolute bg-black inset-0 rounded-[100px]" data-name="BG" />
      <div className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] relative shrink-0 text-[17px] text-nowrap text-white tracking-[-0.43px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre">Сохранить</p>
      </div>
    </div>
  );
}

function Submenu() {
  return (
    <div className="h-[24px] relative w-[16.8px]" data-name="Submenu">
      <div className="absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] inset-0 justify-center leading-[0] text-[#333333] text-[18px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">􀆊</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Submenu />
        </div>
      </div>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Назад
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[272px]">
      <Frame3 />
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[25px] relative shrink-0 text-[20px] text-black text-nowrap tracking-[-0.45px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Редактирование
      </p>
    </div>
  );
}

function Pencil() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="pencil">
          <path d={svgPaths.p171df00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#d1d1d6] box-border content-stretch flex gap-[10px] items-center justify-center p-[25px] relative rounded-[999px] shrink-0 size-[80px]">
      <Pencil />
    </div>
  );
}

function TextFieldBackground() {
  return <div className="absolute bg-[rgba(120,120,128,0.16)] inset-0 rounded-[26px]" data-name="_Text Field Background" />;
}

function Separator() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="_Separator">
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-0 top-[-1px]" />
    </div>
  );
}

function Contents() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Contents">
      <Separator />
      <div className="basis-0 flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.43px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Иван</p>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Text Field">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[52px] items-center px-[16px] py-0 relative w-full">
          <Contents />
        </div>
      </div>
    </div>
  );
}

function Separator1() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="_Separator">
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-0 top-[-1px]" />
    </div>
  );
}

function Contents1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Contents">
      <Separator1 />
      <div className="basis-0 flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.43px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Иванов</p>
      </div>
    </div>
  );
}

function TextField1() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Text Field">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[52px] items-center px-[16px] py-0 relative w-full">
          <Contents1 />
        </div>
      </div>
    </div>
  );
}

function Fields() {
  return (
    <div className="content-stretch flex flex-col h-[104px] items-start overflow-clip relative shrink-0 w-[265px]" data-name="Fields">
      <TextFieldBackground />
      <TextField />
      <TextField1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame2 />
      <Fields />
    </div>
  );
}

function TextFieldBackground1() {
  return <div className="absolute bg-[rgba(120,120,128,0.16)] inset-0 rounded-[26px]" data-name="_Text Field Background" />;
}

function Separator2() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="_Separator">
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-0 top-[-1px]" />
    </div>
  );
}

function Contents2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Contents">
      <Separator2 />
      <div className="basis-0 flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.43px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Официант</p>
      </div>
    </div>
  );
}

function TextField2() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Text Field">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[52px] items-center px-[16px] py-0 relative w-full">
          <Contents2 />
        </div>
      </div>
    </div>
  );
}

function Submenu1() {
  return (
    <div className="h-[24px] relative w-[16.8px]" data-name="Submenu">
      <div className="absolute flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold inset-0 justify-center leading-[0] text-[#333333] text-[18px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">􀆊</p>
      </div>
    </div>
  );
}

function Fields1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Fields">
      <TextFieldBackground1 />
      <TextField2 />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[330px] top-[17.2px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.796875", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Submenu1 />
        </div>
      </div>
    </div>
  );
}

function Mask() {
  return (
    <div className="absolute bg-white inset-[-50px]" data-name="Mask">
      <div className="absolute bg-black inset-[76px] rounded-[34px]" data-name="Shape" />
    </div>
  );
}

function Blur() {
  return <div className="absolute backdrop-blur-2xl backdrop-filter bg-[rgba(0,0,0,0.08)] blur-[20px] filter inset-[31px_26px_21px_26px] mix-blend-hard-light rounded-[34px]" data-name="Blur" />;
}

function Blur1() {
  return (
    <div className="absolute inset-[-26px]" data-name="Blur">
      <Mask />
      <Blur />
    </div>
  );
}

function Fill() {
  return (
    <div className="absolute inset-0 rounded-[34px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[34px]">
        <div className="absolute bg-black inset-0 mix-blend-color-dodge rounded-[34px]" />
        <div className="absolute bg-[rgba(245,245,245,0.7)] inset-0 rounded-[34px]" />
      </div>
    </div>
  );
}

function GlassEffect() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[16px]" data-name="Glass Effect" />;
}

function SectionTitle() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Title">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[8px] py-[4px] relative w-full">
          <div className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#bfbfbf] text-[13px] text-nowrap tracking-[-0.08px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[15px] overflow-ellipsis overflow-hidden whitespace-pre">Позиция</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LabelAndSubtitle() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Label and Subtitle">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-start justify-center pl-[4px] pr-0 py-[8px] relative w-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333333] text-[17px] tracking-[-0.43px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px]">Повар</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-0 relative w-full">
          <LabelAndSubtitle />
        </div>
      </div>
    </div>
  );
}

function LabelAndSubtitle1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Label and Subtitle">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-start justify-center pl-[4px] pr-0 py-[8px] relative w-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333333] text-[17px] tracking-[-0.43px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px]">Официант</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center px-[8px] py-0 relative w-full">
          <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] relative shrink-0 size-[16px] text-[15.3px] text-black text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[19.8px]">􀆅</p>
          </div>
          <LabelAndSubtitle1 />
        </div>
      </div>
    </div>
  );
}

function LabelAndSubtitle2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Label and Subtitle">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-start justify-center pl-[4px] pr-0 py-[8px] relative w-full">
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333333] text-[17px] tracking-[-0.43px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px]">Раннер</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-0 relative w-full">
          <LabelAndSubtitle2 />
        </div>
      </div>
    </div>
  );
}

function MenuItems() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Items">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[8px] py-0 relative w-full">
          <SectionTitle />
          <Item />
          <Item1 />
          <Item2 />
        </div>
      </div>
    </div>
  );
}

function MenuIPhone() {
  return (
    <div className="box-border content-stretch flex flex-col items-center px-0 py-[8px] relative shadow-[2px_2px_15px_0px_rgba(0,0,0,0.25)] shrink-0 w-[338px]" data-name="Menu - iPhone">
      <Blur1 />
      <Fill />
      <GlassEffect />
      <MenuItems />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Fields1 />
      <MenuIPhone />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[16px] top-[20px] w-[370px]">
      <Frame />
      <Frame1 />
      <Frame4 />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute h-[718px] left-0 overflow-x-clip overflow-y-auto top-[62px] w-[401px]" data-name="Content">
      <Buttons />
      <Frame5 />
    </div>
  );
}

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
          <path d={svgPaths.p246e5270} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWtihText3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative shrink-0" data-name="Icon wtih Text">
      <CircleUser />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[13px] text-black text-center text-nowrap tracking-[-0.08px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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

export default function ProfileEdit() {
  return (
    <div className="bg-white overflow-clip relative rounded-[16px] size-full" data-name="Profile (edit)">
      <StatusBarIPhone />
      <HomeIndicator />
      <Content />
      <Navigation />
    </div>
  );
}