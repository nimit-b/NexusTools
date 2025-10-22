
import React from 'react';

// A helper function to create SVG icon components
const createIcon = (d: string | React.ReactNode) => (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        {typeof d === 'string' ? <path strokeLinecap="round" strokeLinejoin="round" d={d} /> : d}
    </svg>
);

export const UnitConverterIcon = createIcon("M3 6h18M3 18h18M6 3l-3 3 3 3m12 12l3-3-3-3m-9 0h12M3 12h12");
export const Base64ConverterIcon = createIcon("M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75M3 6h3m-3 6h3m-3 6h3");
export const PasswordGeneratorIcon = createIcon("M15.75 5.25a3 3 0 013 3m3 0a3 3 0 01-3 3m0 0l-3.75 3.75M15.75 12H3.75m12 0l-3.75-3.75M3.75 12l3.75-3.75M3.75 12l3.75 3.75");
export const ContrastCheckerIcon = createIcon("M12 3v18m9-9H3m0 0a9 9 0 0018 0 9 9 0 00-18 0z");
export const CaseConverterIcon = createIcon("M3 15l4-4m0 0l4-4m-4 4h14m-4 4l-4-4m0 0l-4-4m14 4h-4");
export const TipCalculatorIcon = createIcon("M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m0 0a.75.75 0 01.75.75v.75m0 0h.75a.75.75 0 01.75.75v.75m0 0a.75.75 0 01.75.75v.75h.75a.75.75 0 01.75.75v.75M6 12v.75a.75.75 0 01-.75.75H5.25m0 0v.75a.75.75 0 01-.75.75H3.75m0 0a.75.75 0 01-.75-.75V12m0 0V6.75A.75.75 0 013.75 6H12m0 0a.75.75 0 01.75.75v.75m0 0a.75.75 0 01.75.75v.75m0 0h3.75m-3.75 0a.75.75 0 01-.75-.75V6.75m0 0a.75.75 0 01.75-.75h3.75m0 0a.75.75 0 01.75.75v.75m0 0v3.75");
export const EpochConverterIcon = createIcon("M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z");
export const CounterIcon = createIcon("M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75c-.621 0-1.125-.504-1.125-1.125V17.25m12-6.75V13.5m0 0v-1.5m0 1.5H15m1.5 0H18m-3 0h.008v.008H16.5v-.008zm-3 0h.008v.008H13.5v-.008zm-3 0h.008v.008H10.5v-.008zm-3 0h.008v.008H7.5v-.008zm-3 0h.008v.008H4.5v-.008zm16.5.008h.008v-.008H21v.008zm-3 0h.008v-.008H18v.008zm-3 0h.008v-.008H15v.008zm-3 0h.008v-.008H12v.008zm-3 0h.008v-.008H9v.008zm-3 0h.008v-.008H6v.008zm-3 0h.008v-.008H3v.008zm15-6.75h.008v.008H18v-.008zm-3 0h.008v.008H15v-.008zm-3 0h.008v.008H12v-.008zm-3 0h.008v.008H9v-.008zm-3 0h.008v.008H6v-.008zm0 0h-.008v.008H6v-.008zm-3 0h.008v.008H3v-.008z");
export const ImageResizerIcon = createIcon("M4 8V4m0 0h4M4 4l5 5m11-1v4m0 0h-4m4 0l-5-5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5 5");
export const PercentageCalculatorIcon = createIcon("M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z");
export const ColorPickerIcon = createIcon("M12 2.252A8.014 8.014 0 0120.25 10.266c0 4.418-3.582 8.014-8.014 8.014-4.418 0-8.014-3.582-8.014-8.014 0-4.418 3.582-8.014 8.014-8.014zM12 18.28a8.28 8.28 0 100-16.56 8.28 8.28 0 000 16.56z");
export const DataSizeConverterIcon = createIcon("M3.75 9.75h16.5m-16.5 4.5h16.5m-16.5-8.25L12 3.75m0 0L20.25 6M12 3.75v16.5");
export const FileHasherIcon = createIcon("M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z");
export const DiffCheckerIcon = createIcon("M9 4.5v15m6-15v15m-10.5-6H18M3 15h18");
export const UrlEncoderIcon = createIcon("M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244");
export const CsvJsonConverterIcon = createIcon("M3 4.5h14.25M3 9h14.25m-14.25 4.5h14.25M5.25 3v18m8.25-18v18");
export const HtmlEntityConverterIcon = createIcon("M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5");
export const BmiCalculatorIcon = createIcon("M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z");
export const LoanCalculatorIcon = createIcon("M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h6m-6 2.25h6M3 12l6 6m0 0l6-6m-6 6V3.75");
export const CssShadowGeneratorIcon = createIcon("M21.75 12.75a9.75 9.75 0 11-12.87-9.522 8.25 8.25 0 00-2.82 5.522 9.75 9.75 0 0115.69 4z");
export const DataSorterIcon = createIcon("M3 4.5h18M3 9h14.25M3 13.5h9.75M3 18h4.5");
export const JsonFormatterIcon = createIcon("M6.75 7.5l-3.75 3.75 3.75 3.75M17.25 7.5l3.75 3.75-3.75 3.75m-6-1.5L9 5.25 7.5 18.75");
export const PasswordStrengthIcon = createIcon("M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z");
export const UuidGeneratorIcon = createIcon("M3.75 4.5h16.5v16.5H3.75V4.5zM3.75 9h16.5m-16.5 6H9m-5.25 0H9m-5.25 0v-6m5.25 0v6m8.25-6v6m-4.5-6v6");
export const LoremIpsumGeneratorIcon = createIcon("M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5");
export const MarkdownPreviewerIcon = createIcon("M3.75 9.75h16.5v-1.5H3.75v1.5zm0 3h16.5v-1.5H3.75v1.5zm0 3h16.5v-1.5H3.75v1.5zM4.5 19.5h15v-1.5H4.5v1.5zM4.5 4.5h15v-1.5H4.5v1.5z");
export const ReadingTimeCalculatorIcon = createIcon("M12 6.252v5.5l3.25 3.25M12 3v.01M12 21a9 9 0 110-18 9 9 0 010 18z");
export const AspectRatioCalculatorIcon = createIcon("M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25M3 8.25V6A2.25 2.25 0 015.25 3.75h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18");
export const RomanNumeralConverterIcon = createIcon("M4.5 6.75v10.5m15-10.5v10.5m-15-10.5h4.5m-4.5 10.5h4.5m6-10.5h4.5m-4.5 10.5h4.5M9 6.75l6 10.5");
export const TimeZoneConverterIcon = createIcon("M12 21a9 9 0 100-18 9 9 0 000 18zm0 0a8.949 8.949 0 005.67-2.074M12 21a8.949 8.949 0 01-5.67-2.074m0 0A8.953 8.953 0 0112 3c1.928 0 3.723.63 5.185 1.688m-10.37 0A8.953 8.953 0 0112 3c-1.928 0-3.723.63-5.185 1.688m10.37 0l-2.035 3.393m-8.33 0l2.035 3.393m6.295 0l-2.035 3.393");
export const InfoIcon = createIcon("M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0z");
export const SunIcon = createIcon("M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z");
export const MoonIcon = createIcon("M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z");
