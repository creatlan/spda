export default function TimeSlot() {
  return (
    <div className="bg-[#f2f2f7] relative rounded-[8px] size-full" data-name="Time Slot">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] gap-[2px] items-start pl-[12px] pr-[8px] py-[10px] relative size-full text-nowrap whitespace-pre">
          <p className="leading-[20px] relative shrink-0 text-[15px] text-black tracking-[-0.23px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            СМЕНА - День
          </p>
          <p className="leading-[18px] relative shrink-0 text-[#333333] text-[13px] tracking-[-0.08px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            9-15
          </p>
        </div>
      </div>
    </div>
  );
}