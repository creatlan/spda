import svgPaths from "./svg-ct6h4hpekt";

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]">
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[22px] text-black text-center tracking-[-0.26px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Иван Иванов
      </p>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-[rgba(60,60,67,0.6)] tracking-[-0.43px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Официант
      </p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[19px] top-0">
      <div className="relative shrink-0 size-[70px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(209, 209, 214, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 70">
            <circle cx="35" cy="35" fill="var(--fill-0, #D1D1D6)" id="Ellipse 1" r="35" />
          </svg>
        </div>
      </div>
      <Frame43 />
    </div>
  );
}

function ArrowRightFromSquare() {
  return (
    <div className="absolute left-[321px] size-[28px] top-[24px]" data-name="arrow-right-from-square">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="arrow-right-from-square">
          <path clipRule="evenodd" d={svgPaths.p378e8f80} fill="var(--fill-0, #8E8E93)" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Pencil() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_8_15412)" id="pencil">
          <path d={svgPaths.p24ecce00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_8_15412">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute bg-[#e5e5ea] box-border content-stretch flex gap-[8px] items-center justify-center left-0 px-[8px] py-[12px] rounded-[100px] top-[90px] w-[370px]" data-name="Icon">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Редактировать
      </p>
      <Pencil />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute h-[136px] left-[16px] top-[20px] w-[370px]">
      <Frame44 />
      <ArrowRightFromSquare />
      <Icon />
    </div>
  );
}

function Frame35() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d1d1d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        188 290 908 929|
      </p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Код команды
      </p>
      <Frame35 />
    </div>
  );
}

function PickerButton() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Picker Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Picker Button">
          <circle cx="14" cy="14" fill="var(--fill-0, #8E8E93)" id="Swatch" r="9" />
          <g id="Gradient">
            <g clipPath="url(#paint0_angular_8_15403_clip_path)" data-figma-skip-parse="true">
              <g transform="matrix(0 -0.014 0.014 0 14 14)">
                <foreignObject height="2142.86" width="2142.86" x="-1071.43" y="-1071.43">
                  <div style={{ background: "conic-gradient(from 90deg,rgba(231, 224, 64, 1) 0deg,rgba(238, 170, 60, 1) 44.6548deg,rgba(232, 64, 59, 1) 89.7779deg,rgba(179, 62, 213, 1) 131.614deg,rgba(105, 74, 232, 1) 182.193deg,rgba(60, 202, 231, 1) 231.34deg,rgba(60, 232, 133, 1) 269.538deg,rgba(137, 231, 67, 1) 313.036deg,rgba(231, 224, 64, 1) 360deg)", height: "100%", width: "100%", opacity: "1" }} xmlns="http://www.w3.org/1999/xhtml" />
                </foreignObject>
              </g>
            </g>
            <path clipRule="evenodd" d={svgPaths.p9ddaa00} data-figma-gradient-fill="{'type':'GRADIENT_ANGULAR','stops':[{'color':{'r':0.90588235855102539,'g':0.87843137979507446,'b':0.25098040699958801,'a':1.0},'position':0.0},{'color':{'r':0.93333333730697632,'g':0.66666668653488159,'b':0.23529411852359772,'a':1.0},'position':0.12404124438762665},{'color':{'r':0.90980392694473267,'g':0.25098040699958801,'b':0.23137255012989044,'a':1.0},'position':0.24938312172889709},{'color':{'r':0.70196080207824707,'g':0.24313725531101227,'b':0.83529412746429443,'a':1.0},'position':0.36559349298477173},{'color':{'r':0.41176471114158630,'g':0.29019609093666077,'b':0.90980392694473267,'a':1.0},'position':0.50609230995178223},{'color':{'r':0.23529411852359772,'g':0.79215687513351440,'b':0.90588235855102539,'a':1.0},'position':0.64261168241500854},{'color':{'r':0.23529411852359772,'g':0.90980392694473267,'b':0.52156865596771240,'a':1.0},'position':0.74871653318405151},{'color':{'r':0.53725492954254150,'g':0.90588235855102539,'b':0.26274511218070984,'a':1.0},'position':0.86954540014266968},{'color':{'r':0.90588235855102539,'g':0.87843137979507446,'b':0.25098040699958801,'a':1.0},'position':1.0}],'stopsVar':[{'color':{'r':0.90588235855102539,'g':0.87843137979507446,'b':0.25098040699958801,'a':1.0},'position':0.0},{'color':{'r':0.93333333730697632,'g':0.66666668653488159,'b':0.23529411852359772,'a':1.0},'position':0.12404124438762665},{'color':{'r':0.90980392694473267,'g':0.25098040699958801,'b':0.23137255012989044,'a':1.0},'position':0.24938312172889709},{'color':{'r':0.70196080207824707,'g':0.24313725531101227,'b':0.83529412746429443,'a':1.0},'position':0.36559349298477173},{'color':{'r':0.41176471114158630,'g':0.29019609093666077,'b':0.90980392694473267,'a':1.0},'position':0.50609230995178223},{'color':{'r':0.23529411852359772,'g':0.79215687513351440,'b':0.90588235855102539,'a':1.0},'position':0.64261168241500854},{'color':{'r':0.23529411852359772,'g':0.90980392694473267,'b':0.52156865596771240,'a':1.0},'position':0.74871653318405151},{'color':{'r':0.53725492954254150,'g':0.90588235855102539,'b':0.26274511218070984,'a':1.0},'position':0.86954540014266968},{'color':{'r':0.90588235855102539,'g':0.87843137979507446,'b':0.25098040699958801,'a':1.0},'position':1.0}],'transform':{'m00':-5.1435169396763826e-15,'m01':28.0,'m02':-4.9737994891338802e-14,'m10':-28.0,'m11':-5.1435169396763826e-15,'m12':28.0},'opacity':1.0,'blendMode':'NORMAL','visible':true}" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p9ddaa00} fill="url(#paint1_radial_8_15403)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="paint0_angular_8_15403_clip_path">
            <path clipRule="evenodd" d={svgPaths.p9ddaa00} fillRule="evenodd" />
          </clipPath>
          <radialGradient cx="0" cy="0" gradientTransform="translate(14 14) rotate(90) scale(14)" gradientUnits="userSpaceOnUse" id="paint1_radial_8_15403" r="1">
            <stop stopColor="#E4E4E4" />
            <stop offset="0.8" stopColor="#E4E4E4" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Цвет
      </p>
      <PickerButton />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative size-[20px]" data-name="chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-left">
          <path d="M12.5 15L7.5 10L12.5 5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Русский
      </p>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "20", "--transform-inner-height": "20" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <ChevronLeft />
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Язык
      </p>
      <Frame36 />
    </div>
  );
}

function Decrement() {
  return (
    <div className="basis-0 bg-[rgba(118,118,128,0.12)] grow h-full min-h-px min-w-px relative rounded-bl-[100px] rounded-tl-[100px] shrink-0" data-name="_Decrement">
      <div aria-hidden="true" className="absolute border border-[rgba(118,118,128,0.12)] border-solid inset-0 pointer-events-none rounded-bl-[100px] rounded-tl-[100px]" />
      <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-0 right-0 text-[16px] text-black text-center top-[calc(50%+1px)] tracking-[-0.31px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">􀅽</p>
      </div>
    </div>
  );
}

function Number() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Number">
      <div aria-hidden="true" className="absolute border-[1px_0px] border-[rgba(118,118,128,0.12)] border-solid inset-0 pointer-events-none" />
      <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-0 right-0 text-[16px] text-black text-center top-[calc(50%+1px)] tracking-[-0.31px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">19</p>
      </div>
    </div>
  );
}

function Increment() {
  return (
    <div className="basis-0 bg-[rgba(118,118,128,0.12)] grow h-full min-h-px min-w-px relative rounded-br-[100px] rounded-tr-[100px] shrink-0" data-name="_Increment">
      <div aria-hidden="true" className="absolute border border-[rgba(118,118,128,0.12)] border-solid inset-0 pointer-events-none rounded-br-[100px] rounded-tr-[100px]" />
      <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-0 right-0 text-[16px] text-black text-center top-[calc(50%+1px)] tracking-[-0.31px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">􀅼</p>
      </div>
    </div>
  );
}

function Stepper() {
  return (
    <div className="content-stretch flex h-[27px] items-center relative shrink-0 w-[114px]" data-name="Stepper">
      <Decrement />
      <Number />
      <Increment />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Макс. смен в месяц
      </p>
      <Stepper />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame33 />
      <Frame34 />
      <Frame28 />
      <Frame12 />
    </div>
  );
}

function Knob() {
  return <div className="absolute bg-white h-[20.736px] right-[2.02px] rounded-[86.4px] top-[calc(50%-0.1px)] translate-y-[-50%] w-[33.696px]" data-name="Knob" />;
}

function ToggleSwitch() {
  return (
    <div className="bg-black h-[24.192px] overflow-clip relative rounded-[86.4px] shrink-0 w-[55.296px]" data-name="Toggle - Switch">
      <Knob />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Уведомления
      </p>
      <ToggleSwitch />
    </div>
  );
}

function DatePickerTimePicker() {
  return (
    <div className="bg-[rgba(118,118,128,0.12)] box-border content-stretch flex gap-[8px] items-start px-[12px] py-[3px] relative rounded-[8px] shrink-0" data-name="_DatePicker-timePicker">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-nowrap tracking-[-0.408px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:00
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-[rgba(60,60,67,0.6)] text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        с
      </p>
      <DatePickerTimePicker />
    </div>
  );
}

function DatePickerTimePicker1() {
  return (
    <div className="bg-[rgba(118,118,128,0.12)] box-border content-stretch flex gap-[8px] items-start px-[12px] py-[3px] relative rounded-[8px] shrink-0" data-name="_DatePicker-timePicker">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-nowrap tracking-[-0.408px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        22:00
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-[rgba(60,60,67,0.6)] text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        до
      </p>
      <DatePickerTimePicker1 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Время">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-[rgba(60,60,67,0.6)] text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Время
      </p>
      <Component />
    </div>
  );
}

function Knob1() {
  return <div className="absolute bg-white h-[20.736px] right-[2.02px] rounded-[86.4px] top-[calc(50%-0.1px)] translate-y-[-50%] w-[33.696px]" data-name="Knob" />;
}

function ToggleSwitch1() {
  return (
    <div className="bg-black h-[24.192px] overflow-clip relative rounded-[86.4px] shrink-0 w-[55.296px]" data-name="Toggle - Switch">
      <Knob1 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-[rgba(60,60,67,0.6)] text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Напоминания о смене
      </p>
      <ToggleSwitch1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[rgba(118,118,128,0.12)] box-border content-stretch flex gap-[8px] items-center justify-center px-[11px] py-[4px] relative rounded-[8px] shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        За 72 часа
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-black box-border content-stretch flex gap-[8px] items-center justify-center px-[11px] py-[4px] relative rounded-[8px] shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-center text-nowrap text-white tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        За 48 часов
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-black box-border content-stretch flex gap-[8px] items-center justify-center px-[11px] py-[4px] relative rounded-[8px] shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-center text-nowrap text-white tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        За 24 часа
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[rgba(118,118,128,0.12)] box-border content-stretch flex gap-[8px] items-center justify-center px-[11px] py-[4px] relative rounded-[8px] shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        За 12 часов
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-black box-border content-stretch flex gap-[8px] items-center justify-center px-[11px] py-[4px] relative rounded-[8px] shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-center text-nowrap text-white tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        За 6 часов
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[rgba(118,118,128,0.12)] box-border content-stretch flex gap-[8px] items-center justify-center px-[11px] py-[4px] relative rounded-[8px] shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        За 1 час
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <Frame14 />
      <Frame15 />
      <Frame13 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame30 />
      <Frame21 />
    </div>
  );
}

function Knob2() {
  return <div className="absolute bg-white h-[20.736px] right-[2.02px] rounded-[86.4px] top-[calc(50%-0.1px)] translate-y-[-50%] w-[33.696px]" data-name="Knob" />;
}

function ToggleSwitch2() {
  return (
    <div className="bg-black h-[24.192px] overflow-clip relative rounded-[86.4px] shrink-0 w-[55.296px]" data-name="Toggle - Switch">
      <Knob2 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-[rgba(60,60,67,0.6)] text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Напоминания о занятости
      </p>
      <ToggleSwitch2 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame37 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[13px] text-[rgba(60,60,67,0.6)] text-center text-nowrap tracking-[-0.08px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        (до начала составления графика)
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-black box-border content-stretch flex gap-[8px] items-center justify-center px-[11px] py-[4px] relative rounded-[8px] shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-center text-nowrap text-white tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        За 72 часа
      </p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[rgba(118,118,128,0.12)] box-border content-stretch flex gap-[8px] items-center justify-center px-[11px] py-[4px] relative rounded-[8px] shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        За 48 часов
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-black box-border content-stretch flex gap-[8px] items-center justify-center px-[11px] py-[4px] relative rounded-[8px] shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-center text-nowrap text-white tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        За 24 часа
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[rgba(118,118,128,0.12)] box-border content-stretch flex gap-[8px] items-center justify-center px-[11px] py-[4px] relative rounded-[8px] shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        За 12 часов
      </p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[rgba(118,118,128,0.12)] box-border content-stretch flex gap-[8px] items-center justify-center px-[11px] py-[4px] relative rounded-[8px] shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        За 6 часов
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[rgba(118,118,128,0.12)] box-border content-stretch flex gap-[8px] items-center justify-center px-[11px] py-[4px] relative rounded-[8px] shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        За 1 час
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
      <Frame19 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame40 />
      <Frame27 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame20 />
      <Frame29 />
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[26px] top-[179px] w-[350px]">
      <Frame42 />
      <Frame38 />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute h-[743px] left-0 overflow-x-clip overflow-y-auto top-[62px] w-[401px]" data-name="Content">
      <Frame41 />
      <Frame39 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bottom-[-10px] left-0 right-0 rounded-[27px] top-0" data-name="Background">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[27px]">
        <div className="absolute bg-[rgba(255,255,255,0.6)] inset-0 rounded-[27px]" />
        <div className="absolute bg-[rgba(51,51,51,0.2)] inset-0 rounded-[27px]" />
        <div className="absolute bg-[rgba(0,0,0,0.05)] inset-0 rounded-[27px]" />
      </div>
    </div>
  );
}

function Key() {
  return (
    <div className="basis-0 bg-[#141414] box-border content-stretch flex flex-col grow h-full items-center justify-between leading-[0] min-h-px min-w-px pb-[4px] pt-[3px] px-0 relative rounded-[8.5px] shrink-0 text-black text-center text-nowrap" data-name="Key">
      <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center relative shrink-0 text-[23px]">
        <p className="leading-[28px] text-nowrap whitespace-pre">1</p>
      </div>
      <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
        <p className="leading-[15px] text-nowrap whitespace-pre"> </p>
      </div>
    </div>
  );
}

function Key1() {
  return (
    <div className="basis-0 bg-[#141414] box-border content-stretch flex flex-col grow h-full items-center justify-between leading-[0] min-h-px min-w-px pb-[4px] pt-[3px] px-0 relative rounded-[8.5px] shrink-0 text-black text-center text-nowrap" data-name="Key">
      <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center relative shrink-0 text-[23px]">
        <p className="leading-[28px] text-nowrap whitespace-pre">2</p>
      </div>
      <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
        <p className="leading-[15px] text-nowrap whitespace-pre">ABC</p>
      </div>
    </div>
  );
}

function Key2() {
  return (
    <div className="basis-0 bg-[#141414] box-border content-stretch flex flex-col grow h-full items-center justify-between leading-[0] min-h-px min-w-px pb-[4px] pt-[3px] px-0 relative rounded-[8.5px] shrink-0 text-black text-center text-nowrap" data-name="Key">
      <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center relative shrink-0 text-[23px]">
        <p className="leading-[28px] text-nowrap whitespace-pre">3</p>
      </div>
      <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
        <p className="leading-[15px] text-nowrap whitespace-pre">DEF</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[6.75px] h-[47px] items-start relative shrink-0 w-full" data-name="Frame">
      <Key />
      <Key1 />
      <Key2 />
    </div>
  );
}

function Key3() {
  return (
    <div className="basis-0 bg-[#141414] box-border content-stretch flex flex-col grow h-full items-center justify-between leading-[0] min-h-px min-w-px pb-[4px] pt-[3px] px-0 relative rounded-[8.5px] shrink-0 text-black text-center text-nowrap" data-name="Key">
      <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center relative shrink-0 text-[23px]">
        <p className="leading-[28px] text-nowrap whitespace-pre">4</p>
      </div>
      <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
        <p className="leading-[15px] text-nowrap whitespace-pre">GHI</p>
      </div>
    </div>
  );
}

function Key4() {
  return (
    <div className="basis-0 bg-[#141414] box-border content-stretch flex flex-col grow h-full items-center justify-between leading-[0] min-h-px min-w-px pb-[4px] pt-[3px] px-0 relative rounded-[8.5px] shrink-0 text-black text-center text-nowrap" data-name="Key">
      <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center relative shrink-0 text-[23px]">
        <p className="leading-[28px] text-nowrap whitespace-pre">5</p>
      </div>
      <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
        <p className="leading-[15px] text-nowrap whitespace-pre">JKL</p>
      </div>
    </div>
  );
}

function Key5() {
  return (
    <div className="basis-0 bg-[#141414] box-border content-stretch flex flex-col grow h-full items-center justify-between leading-[0] min-h-px min-w-px pb-[4px] pt-[3px] px-0 relative rounded-[8.5px] shrink-0 text-black text-center text-nowrap" data-name="Key">
      <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center relative shrink-0 text-[23px]">
        <p className="leading-[28px] text-nowrap whitespace-pre">6</p>
      </div>
      <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
        <p className="leading-[15px] text-nowrap whitespace-pre">MNO</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[6.75px] h-[47px] items-start relative shrink-0 w-full" data-name="Frame">
      <Key3 />
      <Key4 />
      <Key5 />
    </div>
  );
}

function Key6() {
  return (
    <div className="basis-0 bg-[#141414] box-border content-stretch flex flex-col grow h-full items-center justify-between leading-[0] min-h-px min-w-px pb-[4px] pt-[3px] px-0 relative rounded-[8.5px] shrink-0 text-black text-center text-nowrap" data-name="Key">
      <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center relative shrink-0 text-[23px]">
        <p className="leading-[28px] text-nowrap whitespace-pre">7</p>
      </div>
      <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
        <p className="leading-[15px] text-nowrap whitespace-pre">PQRS</p>
      </div>
    </div>
  );
}

function Key7() {
  return (
    <div className="basis-0 bg-[#141414] box-border content-stretch flex flex-col grow h-full items-center justify-between leading-[0] min-h-px min-w-px pb-[4px] pt-[3px] px-0 relative rounded-[8.5px] shrink-0 text-black text-center text-nowrap" data-name="Key">
      <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center relative shrink-0 text-[23px]">
        <p className="leading-[28px] text-nowrap whitespace-pre">8</p>
      </div>
      <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
        <p className="leading-[15px] text-nowrap whitespace-pre">TUV</p>
      </div>
    </div>
  );
}

function Key8() {
  return (
    <div className="basis-0 bg-[#141414] box-border content-stretch flex flex-col grow h-full items-center justify-between leading-[0] min-h-px min-w-px pb-[4px] pt-[3px] px-0 relative rounded-[8.5px] shrink-0 text-black text-center text-nowrap" data-name="Key">
      <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center relative shrink-0 text-[23px]">
        <p className="leading-[28px] text-nowrap whitespace-pre">9</p>
      </div>
      <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
        <p className="leading-[15px] text-nowrap whitespace-pre">WXYZ</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[6.75px] h-[47px] items-start relative shrink-0 w-full" data-name="Frame">
      <Key6 />
      <Key7 />
      <Key8 />
    </div>
  );
}

function Key9() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div className="absolute bg-[#141414] inset-0 rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] h-[65px] justify-center leading-[0] left-1/2 text-[23px] text-black text-center top-1/2 translate-x-[-50%] translate-y-[-50%] w-[125px]">
        <p className="leading-[28px]">0</p>
      </div>
    </div>
  );
}

function Key10() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] h-[65px] justify-center leading-[0] left-1/2 text-[#595959] text-[23px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%] w-[125px]">
        <p className="leading-[28px]">􀆛</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[6.75px] h-[47px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="basis-0 grow h-full min-h-px min-w-px shrink-0" data-name="Space" />
      <Key9 />
      <Key10 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[6px] h-[291px] items-end pb-0 pt-[26px] px-[6.75px] relative shrink-0 w-[402px]" data-name="Frame">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Keyboard() {
  return (
    <div className="absolute content-stretch flex flex-col h-[307px] items-start left-[-1px] rounded-bl-[62px] rounded-br-[62px] rounded-tl-[27px] rounded-tr-[27px] top-[810px] w-[402px]" data-name="Keyboard">
      <Background />
      <Frame4 />
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

function Frame5() {
  return (
    <div className="content-stretch flex gap-[6.75px] h-[47px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="basis-0 bg-[#141414] box-border content-stretch flex flex-col grow h-full items-center justify-between leading-[0] min-h-px min-w-px pb-[4px] pt-[3px] px-0 relative rounded-[8.5px] shrink-0 text-black text-center text-nowrap" data-name="Key">
        <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center relative shrink-0 text-[23px]">
          <p className="leading-[28px] text-nowrap whitespace-pre">1</p>
        </div>
        <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
          <p className="leading-[15px] text-nowrap whitespace-pre"> </p>
        </div>
      </div>
      <div className="basis-0 bg-[#141414] box-border content-stretch flex flex-col grow h-full items-center justify-between leading-[0] min-h-px min-w-px pb-[4px] pt-[3px] px-0 relative rounded-[8.5px] shrink-0 text-black text-center text-nowrap" data-name="Key">
        <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center relative shrink-0 text-[23px]">
          <p className="leading-[28px] text-nowrap whitespace-pre">2</p>
        </div>
        <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
          <p className="leading-[15px] text-nowrap whitespace-pre">ABC</p>
        </div>
      </div>
      <div className="basis-0 bg-[#141414] box-border content-stretch flex flex-col grow h-full items-center justify-between leading-[0] min-h-px min-w-px pb-[4px] pt-[3px] px-0 relative rounded-[8.5px] shrink-0 text-black text-center text-nowrap" data-name="Key">
        <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center relative shrink-0 text-[23px]">
          <p className="leading-[28px] text-nowrap whitespace-pre">3</p>
        </div>
        <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
          <p className="leading-[15px] text-nowrap whitespace-pre">DEF</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[6.75px] h-[47px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="basis-0 bg-[#141414] box-border content-stretch flex flex-col grow h-full items-center justify-between leading-[0] min-h-px min-w-px pb-[4px] pt-[3px] px-0 relative rounded-[8.5px] shrink-0 text-black text-center text-nowrap" data-name="Key">
        <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center relative shrink-0 text-[23px]">
          <p className="leading-[28px] text-nowrap whitespace-pre">4</p>
        </div>
        <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
          <p className="leading-[15px] text-nowrap whitespace-pre">GHI</p>
        </div>
      </div>
      <div className="basis-0 bg-[#141414] box-border content-stretch flex flex-col grow h-full items-center justify-between leading-[0] min-h-px min-w-px pb-[4px] pt-[3px] px-0 relative rounded-[8.5px] shrink-0 text-black text-center text-nowrap" data-name="Key">
        <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center relative shrink-0 text-[23px]">
          <p className="leading-[28px] text-nowrap whitespace-pre">5</p>
        </div>
        <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
          <p className="leading-[15px] text-nowrap whitespace-pre">JKL</p>
        </div>
      </div>
      <div className="basis-0 bg-[#141414] box-border content-stretch flex flex-col grow h-full items-center justify-between leading-[0] min-h-px min-w-px pb-[4px] pt-[3px] px-0 relative rounded-[8.5px] shrink-0 text-black text-center text-nowrap" data-name="Key">
        <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center relative shrink-0 text-[23px]">
          <p className="leading-[28px] text-nowrap whitespace-pre">6</p>
        </div>
        <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
          <p className="leading-[15px] text-nowrap whitespace-pre">MNO</p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[6.75px] h-[47px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="basis-0 bg-[#141414] box-border content-stretch flex flex-col grow h-full items-center justify-between leading-[0] min-h-px min-w-px pb-[4px] pt-[3px] px-0 relative rounded-[8.5px] shrink-0 text-black text-center text-nowrap" data-name="Key">
        <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center relative shrink-0 text-[23px]">
          <p className="leading-[28px] text-nowrap whitespace-pre">7</p>
        </div>
        <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
          <p className="leading-[15px] text-nowrap whitespace-pre">PQRS</p>
        </div>
      </div>
      <div className="basis-0 bg-[#141414] box-border content-stretch flex flex-col grow h-full items-center justify-between leading-[0] min-h-px min-w-px pb-[4px] pt-[3px] px-0 relative rounded-[8.5px] shrink-0 text-black text-center text-nowrap" data-name="Key">
        <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center relative shrink-0 text-[23px]">
          <p className="leading-[28px] text-nowrap whitespace-pre">8</p>
        </div>
        <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
          <p className="leading-[15px] text-nowrap whitespace-pre">TUV</p>
        </div>
      </div>
      <div className="basis-0 bg-[#141414] box-border content-stretch flex flex-col grow h-full items-center justify-between leading-[0] min-h-px min-w-px pb-[4px] pt-[3px] px-0 relative rounded-[8.5px] shrink-0 text-black text-center text-nowrap" data-name="Key">
        <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center relative shrink-0 text-[23px]">
          <p className="leading-[28px] text-nowrap whitespace-pre">9</p>
        </div>
        <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
          <p className="leading-[15px] text-nowrap whitespace-pre">WXYZ</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[6.75px] h-[47px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="basis-0 grow h-full min-h-px min-w-px shrink-0" data-name="Space" />
      <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
        <div className="absolute bg-[#141414] inset-0 rounded-[8.5px]" data-name="BG" />
        <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] h-[65px] justify-center leading-[0] left-1/2 text-[23px] text-black text-center top-1/2 translate-x-[-50%] translate-y-[-50%] w-[125px]">
          <p className="leading-[28px]">0</p>
        </div>
      </div>
      <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Return">
        <div className="absolute bg-[#0088ff] inset-0 rounded-[8.5px]" data-name="BG" />
        <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] left-0 right-0 text-[19px] text-center text-white top-[calc(50%+2px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">􀅇</p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[6px] h-[291px] items-end pb-0 pt-[26px] px-[6.75px] relative shrink-0 w-[402px]" data-name="Frame">
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

export default function ProfileCodeEntered() {
  return (
    <div className="bg-white overflow-clip relative rounded-[16px] size-full" data-name="Profile (code entered)">
      <Navigation />
      <StatusBarIPhone />
      <HomeIndicator />
      <div className="absolute content-stretch flex flex-col h-[307px] items-start left-0 rounded-bl-[62px] rounded-br-[62px] rounded-tl-[27px] rounded-tr-[27px] top-[592px] w-[402px]" data-name="Keyboard">
        <div className="absolute bottom-[-10px] left-0 right-0 rounded-[27px] top-0" data-name="Background">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[27px]">
            <div className="absolute bg-[rgba(255,255,255,0.6)] inset-0 rounded-[27px]" />
            <div className="absolute bg-[rgba(51,51,51,0.2)] inset-0 rounded-[27px]" />
            <div className="absolute bg-[rgba(0,0,0,0.05)] inset-0 rounded-[27px]" />
          </div>
        </div>
        <Frame9 />
      </div>
      <Content />
      <Keyboard />
    </div>
  );
}