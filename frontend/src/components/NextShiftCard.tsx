import './NextShiftCard.css';

interface NextShiftCardProps {
  date: string; // Format: "08.11.2024"
  startTime: string; // Format: "15:00" or "9:00"
  endTime: string; // Format: "21:00" or "15:00"
  status: 'normal' | 'searching' | 'found';
  onFindReplacement?: () => void;
}

function Text({ date, startTime, endTime, isNight, status }: { 
  date: string; 
  startTime: string; 
  endTime: string; 
  isNight: boolean;
  status: 'normal' | 'searching' | 'found';
}) {
  const textColor = isNight ? 'text-white' : 'text-black';
  const strikethrough = status === 'found' ? 'line-through' : '';
  
  return (
    <div className={`content-stretch flex flex-col gap-[8px] items-start relative shrink-0 ${textColor}`} data-name="Text">
      <p 
        className={`font-['SF_Pro:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[22px] tracking-[-0.26px] w-full ${strikethrough}`}
        style={{ 
          fontVariationSettings: "'wdth' 100",
          ...(status === 'found' && {
            textDecorationSkipInk: 'none',
            textUnderlinePosition: 'from-font'
          })
        }}
      >
        Следующая смена
      </p>
      <p 
        className={`font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[0px] text-[17px] tracking-[-0.43px] w-full whitespace-pre-wrap ${strikethrough}`}
        style={{ 
          fontVariationSettings: "'wdth' 100",
          ...(status === 'found' && {
            textDecorationSkipInk: 'none',
            textUnderlinePosition: 'from-font'
          })
        }}
      >
        <span 
          style={status === 'found' ? {
            textDecorationSkipInk: 'none',
            textUnderlinePosition: 'from-font'
          } : {}}
        >{`${date}  `}</span>
        <span 
          className="font-['SF_Pro:Regular',sans-serif] font-normal" 
          style={status === 'found' ? {
            fontVariationSettings: "'wdth' 100",
            textDecorationSkipInk: 'none',
            textUnderlinePosition: 'from-font'
          } : { fontVariationSettings: "'wdth' 100" }}
        >
          {startTime}-{endTime}
        </span>
      </p>
    </div>
  );
}

function Divider({ isNight }: { isNight: boolean }) {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(142, 142, 147, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 322 1">
          <line id="Line 4" stroke="var(--stroke-0, #8E8E93)" x2="322" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}

function StatusMessage({ status, isNight }: { status: 'searching' | 'found'; isNight: boolean }) {
  const textColor = isNight ? 'text-white' : 'text-black';
  const message = status === 'searching' ? '🕑 В поисках замены...' : '✅ Замена найдена!';
  
  return (
    <p 
      className={`font-['SF_Pro:Regular',sans-serif] font-normal leading-[25px] min-w-full relative shrink-0 text-[20px] ${textColor} tracking-[-0.45px] w-[min-content]`}
      style={{ fontVariationSettings: "'wdth' 100" }}
    >
      {message}
    </p>
  );
}

function FindReplacementButton({ onClick, isNight }: { onClick: () => void; isNight: boolean }) {
  const textColor = isNight ? '#ffffff' : '#000000';
  const borderColor = isNight ? '#ffffff' : '#8e8e93';
  
  return (
    <button 
      className="find-replacement-button"
      onClick={onClick}
      style={{
        color: textColor,
        borderColor: borderColor
      }}
    >
      Найти замену
    </button>
  );
}

export default function NextShiftCard({ date, startTime, endTime, status, onFindReplacement }: NextShiftCardProps) {
  // Determine if it's a night shift (starts at 15:00 or later)
  const startHour = parseInt(startTime.split(':')[0]);
  const isNight = startHour >= 15;
  
  // Background color based on shift time
  const bgColor = isNight ? '#2d2d2d' : '#d1d1d6';
  const shadowBlur = isNight ? '20px' : '15px';
  
  return (
    <div 
      className="relative rounded-[16px] size-full" 
      data-name="Card"
      style={{ 
        background: bgColor,
        boxShadow: `0px 0px ${shadowBlur} 0px rgba(0,0,0,${isNight ? 0.3 : 0.2})`
      }}
    >
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center overflow-clip px-[24px] py-[20px] relative size-full">
          <Text 
            date={date} 
            startTime={startTime} 
            endTime={endTime} 
            isNight={isNight}
            status={status}
          />
          
          {status !== 'normal' && (
            <>
              <Divider isNight={isNight} />
              <StatusMessage status={status} isNight={isNight} />
            </>
          )}
          
          {status === 'normal' && onFindReplacement && (
            <FindReplacementButton onClick={onFindReplacement} isNight={isNight} />
          )}
        </div>
      </div>
    </div>
  );
}