import type { Tool } from './types';

// Tool Components
import UnitConverter from './tools/UnitConverter';
import Base64Converter from './tools/Base64Converter';
import CaseConverter from './tools/CaseConverter';
import EpochConverter from './tools/EpochConverter';
import DataSizeConverter from './tools/DataSizeConverter';
import CsvJsonConverter from './tools/CsvJsonConverter';
import HtmlEntityConverter from './tools/HtmlEntityConverter';
import JsonFormatter from './tools/JsonFormatter';
import RomanNumeralConverter from './tools/RomanNumeralConverter';
import TimeZoneConverter from './tools/TimeZoneConverter';
import UrlEncoder from './tools/UrlEncoder';
import PasswordGenerator from './tools/PasswordGenerator';
import CssShadowGenerator from './tools/CssShadowGenerator';
import UuidGenerator from './tools/UuidGenerator';
import LoremIpsumGenerator from './tools/LoremIpsumGenerator';
import TipCalculator from './tools/TipCalculator';
import PercentageCalculator from './tools/PercentageCalculator';
import BmiCalculator from './tools/BmiCalculator';
import LoanCalculator from './tools/LoanCalculator';
import ReadingTimeCalculator from './tools/ReadingTimeCalculator';
import AspectRatioCalculator from './tools/AspectRatioCalculator';
import ContrastChecker from './tools/ContrastChecker';
import PasswordStrength from './tools/PasswordStrength';
import DiffChecker from './tools/DiffChecker';
import Counter from './tools/Counter';
import ImageResizer from './tools/ImageResizer';
import ColorPicker from './tools/ColorPicker';
import FileHasher from './tools/FileHasher';
import DataSorter from './tools/DataSorter';
import MarkdownPreviewer from './tools/MarkdownPreviewer';
import About from './tools/About';

// Icon Components
import {
    UnitConverterIcon, Base64ConverterIcon, PasswordGeneratorIcon, ContrastCheckerIcon,
    CaseConverterIcon, TipCalculatorIcon, EpochConverterIcon, CounterIcon, ImageResizerIcon,
    PercentageCalculatorIcon, ColorPickerIcon, DataSizeConverterIcon, FileHasherIcon,
    DiffCheckerIcon, UrlEncoderIcon, CsvJsonConverterIcon, HtmlEntityConverterIcon,
    BmiCalculatorIcon, LoanCalculatorIcon, CssShadowGeneratorIcon, DataSorterIcon,
    JsonFormatterIcon, PasswordStrengthIcon, UuidGeneratorIcon, LoremIpsumGeneratorIcon,
    MarkdownPreviewerIcon, ReadingTimeCalculatorIcon, AspectRatioCalculatorIcon,
    RomanNumeralConverterIcon, TimeZoneConverterIcon, InfoIcon
} from './components/icons';

export const TOOLS: Tool[] = [
    // Text & Data
    { id: 'case-converter', name: 'Case Converter', component: CaseConverter, Icon: CaseConverterIcon, description: 'Convert text between different cases (uppercase, lowercase, title case, etc.).', category: 'Text & Data' },
    { id: 'diff-checker', name: 'Diff Checker', component: DiffChecker, Icon: DiffCheckerIcon, description: 'Compare two texts and highlight the differences.', category: 'Text & Data' },
    { id: 'lorem-ipsum-generator', name: 'Lorem Ipsum Generator', component: LoremIpsumGenerator, Icon: LoremIpsumGeneratorIcon, description: 'Generate placeholder text.', category: 'Text & Data' },
    { id: 'markdown-previewer', name: 'Markdown Previewer', component: MarkdownPreviewer, Icon: MarkdownPreviewerIcon, description: 'Write Markdown and see a real-time preview.', category: 'Text & Data' },
    { id: 'data-sorter', name: 'List Sorter', component: DataSorter, Icon: DataSorterIcon, description: 'Sort lists of data alphabetically or numerically.', category: 'Text & Data' },
    { id: 'counter', name: 'Word & Character Counter', component: Counter, Icon: CounterIcon, description: 'Count words, characters, and lines in your text.', category: 'Text & Data' },
    { id: 'reading-time-calculator', name: 'Reading Time Calculator', component: ReadingTimeCalculator, Icon: ReadingTimeCalculatorIcon, description: 'Estimate reading time for a piece of text.', category: 'Text & Data' },
    
    // Web & Design
    { id: 'base64-converter', name: 'Base64 Converter', component: Base64Converter, Icon: Base64ConverterIcon, description: 'Encode and decode text to and from Base64.', category: 'Web & Design' },
    { id: 'contrast-checker', name: 'Contrast Checker', component: ContrastChecker, Icon: ContrastCheckerIcon, description: 'Check color contrast ratio for WCAG accessibility.', category: 'Web & Design' },
    { id: 'color-picker', name: 'Color Picker', component: ColorPicker, Icon: ColorPickerIcon, description: 'Pick colors and get their HEX/RGB/HSL values.', category: 'Web & Design' },
    { id: 'url-encoder', name: 'URL Encoder/Decoder', component: UrlEncoder, Icon: UrlEncoderIcon, description: 'Encode or decode strings for use in URLs.', category: 'Web & Design' },
    { id: 'html-entity-converter', name: 'HTML Entity Converter', component: HtmlEntityConverter, Icon: HtmlEntityConverterIcon, description: 'Encode/decode HTML entities.', category: 'Web & Design' },
    { id: 'css-shadow-generator', name: 'CSS Shadow Generator', component: CssShadowGenerator, Icon: CssShadowGeneratorIcon, description: 'Generate CSS for box-shadow property.', category: 'Web & Design' },
    { id: 'json-formatter', name: 'JSON Formatter', component: JsonFormatter, Icon: JsonFormatterIcon, description: 'Format, validate, and beautify JSON data.', category: 'Web & Design' },

    // Calculators & Converters
    { id: 'unit-converter', name: 'Unit Converter', component: UnitConverter, Icon: UnitConverterIcon, description: 'Convert between various units of measurement.', category: 'Calculators & Converters' },
    { id: 'tip-calculator', name: 'Tip Calculator', component: TipCalculator, Icon: TipCalculatorIcon, description: 'Calculate tips and split bills easily.', category: 'Calculators & Converters' },
    { id: 'epoch-converter', name: 'Epoch & Unix Time Converter', component: EpochConverter, Icon: EpochConverterIcon, description: 'Convert Unix timestamps to human-readable dates.', category: 'Calculators & Converters' },
    { id: 'percentage-calculator', name: 'Percentage Calculator', component: PercentageCalculator, Icon: PercentageCalculatorIcon, description: 'Common percentage calculations.', category: 'Calculators & Converters' },
    { id: 'data-size-converter', name: 'Data Size Converter', component: DataSizeConverter, Icon: DataSizeConverterIcon, description: 'Convert between different data sizes (KB, MB, GB).', category: 'Calculators & Converters' },
    { id: 'csv-json-converter', name: 'CSV <=> JSON Converter', component: CsvJsonConverter, Icon: CsvJsonConverterIcon, description: 'Convert data between CSV and JSON formats.', category: 'Calculators & Converters' },
    { id: 'bmi-calculator', name: 'BMI Calculator', component: BmiCalculator, Icon: BmiCalculatorIcon, description: 'Calculate Body Mass Index.', category: 'Calculators & Converters' },
    { id: 'loan-calculator', name: 'Loan Calculator', component: LoanCalculator, Icon: LoanCalculatorIcon, description: 'Calculate monthly loan payments.', category: 'Calculators & Converters' },
    { id: 'aspect-ratio-calculator', name: 'Aspect Ratio Calculator', component: AspectRatioCalculator, Icon: AspectRatioCalculatorIcon, description: 'Calculate aspect ratios for images and videos.', category: 'Calculators & Converters' },
    { id: 'roman-numeral-converter', name: 'Roman Numeral Converter', component: RomanNumeralConverter, Icon: RomanNumeralConverterIcon, description: 'Convert between Roman numerals and numbers.', category: 'Calculators & Converters' },
    { id: 'timezone-converter', name: 'Time Zone Converter', component: TimeZoneConverter, Icon: TimeZoneConverterIcon, description: 'Convert times between different time zones.', category: 'Calculators & Converters' },

    // Security & Hashing
    { id: 'password-generator', name: 'Password Generator', component: PasswordGenerator, Icon: PasswordGeneratorIcon, description: 'Generate strong, secure, and random passwords.', category: 'Security & Hashing' },
    { id: 'file-hasher', name: 'File Hasher', component: FileHasher, Icon: FileHasherIcon, description: 'Calculate SHA-256 hash for files using Web Crypto API.', category: 'Security & Hashing' },
    { id: 'password-strength', name: 'Password Strength Checker', component: PasswordStrength, Icon: PasswordStrengthIcon, description: 'Check the strength of a password.', category: 'Security & Hashing' },
    { id: 'uuid-generator', name: 'UUID Generator', component: UuidGenerator, Icon: UuidGeneratorIcon, description: 'Generate universally unique identifiers (UUIDs).', category: 'Security & Hashing' },
    
    // General & Media
    { id: 'image-resizer', name: 'Image Resizer', component: ImageResizer, Icon: ImageResizerIcon, description: 'Resize images to specific dimensions.', category: 'General & Media' },
    { id: 'about', name: 'About & Legal', component: About, Icon: InfoIcon, description: 'Information, disclaimer, and privacy policy.', category: 'General & Media' }
];