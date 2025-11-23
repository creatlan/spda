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

export default function Card() {
  return (
    <div className="bg-[#2d2d2d] relative rounded-[16px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)] size-full" data-name="Card">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center overflow-clip px-[24px] py-[20px] relative size-full">
          <Text />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(142, 142, 147, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 322 1">
                <line id="Line 4" stroke="var(--stroke-0, #8E8E93)" x2="322" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[25px] min-w-full relative shrink-0 text-[20px] text-white tracking-[-0.45px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            🕑 В поисках замены...
          </p>
        </div>
      </div>
    </div>
  );
}