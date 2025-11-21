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
        <div className="absolute bg-[#0f0f0f] inset-0 mix-blend-color-dodge rounded-[34px]" />
        <div className="absolute bg-[rgba(245,245,245,0.5)] inset-0 rounded-[34px]" />
      </div>
    </div>
  );
}

function GlassEffect() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[34px]" data-name="Glass Effect" />;
}

function TitleAndDescription() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title and Description">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center pb-[24px] pt-[8px] px-[8px] relative w-full">
          <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[20px] text-black text-center tracking-[-0.45px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[25px]">
              Вы действительно не сможете
              <br aria-hidden="true" />и хотите найти замену?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] relative rounded-[100px] shrink-0 w-full" data-name="Button 1">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[13px] relative w-full">
          <div className="absolute bg-black inset-0 rounded-[100px]" data-name="BG" />
          <div className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] relative shrink-0 text-[17px] text-nowrap text-white tracking-[-0.43px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px] whitespace-pre">Найти замену</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[48px] relative rounded-[100px] shrink-0 w-full" data-name="Button 3">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center justify-center px-[16px] py-[13px] relative w-full">
          <div className="absolute bg-[rgba(120,120,128,0.16)] inset-0 rounded-[100px]" data-name="BG" />
          <div className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] relative shrink-0 text-[17px] text-black text-nowrap tracking-[-0.43px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px] whitespace-pre">Отмена</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Buttons">
      <Button />
      <Button1 />
    </div>
  );
}

export default function Alert() {
  return (
    <div className="relative size-full" data-name="Alert">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center p-[14px] relative size-full">
          <Blur1 />
          <Fill />
          <GlassEffect />
          <TitleAndDescription />
          <Buttons />
        </div>
      </div>
    </div>
  );
}