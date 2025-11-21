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
            <p className="leading-[15px] overflow-ellipsis overflow-hidden whitespace-pre">Занятость</p>
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
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333333] text-[16px] tracking-[-0.31px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[21px]">Свободен</p>
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
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333333] text-[16px] tracking-[-0.31px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[21px]">Не удобно, но могу выйти</p>
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
        <div className="box-border content-stretch flex gap-[8px] items-center px-[8px] py-0 relative w-full">
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
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333333] text-[16px] tracking-[-0.31px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[21px]">Не могу выйти</p>
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

export default function MenuIPhone() {
  return (
    <div className="box-border content-stretch flex flex-col items-center px-0 py-[8px] relative shadow-[2px_2px_15px_0px_rgba(0,0,0,0.25)] size-full" data-name="Menu - iPhone">
      <Blur1 />
      <Fill />
      <GlassEffect />
      <MenuItems />
    </div>
  );
}