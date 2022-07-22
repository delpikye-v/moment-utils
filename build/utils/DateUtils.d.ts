export declare const FORMATS: {
    YEAR: string;
    MONTH: string;
    MONTH_NAME: string;
    MONTH_FULL_NAME: string;
    DAY: string;
    HOUR: string;
    MINUTE: string;
    SECONDS: string;
    MILISECONDS: string;
    /** YYYYMM */
    YEAR_MONTH_COMPACT: string;
    /** YYYY.MM */
    YEAR_MONTH_DOT: string;
    /** YYYY-MM */
    YEAR_MONTH_DASH: string;
    /** YYYY MMM */
    YEAR_MONTH_NAME: string;
    /** YYYY/MM */
    YEAR_MONTH_SLASH: string;
    /** YYYYMMDD */
    DATE_COMPACT: string;
    /** YYYY.MM.DD */
    DATE_DOT: string;
    /** YYYY-MM-DD */
    DATE_DASH: string;
    /** YYYY/MM/DD */
    DATE_SLASH: string;
    /** HH:mm:ss */
    TIME: string;
    /** HH:mm */
    HOUR_MINUTE: string;
    /** YYYYMMDDHHmmss */
    DATE_TIME_COMPACT: string;
    /** YYYY.MM.DD HH:mm:ss */
    DATE_TIME_DOT: string;
    /** YYYY-MM-DD HH:mm:ss */
    DATE_TIME_DASH: string;
    /** YYYY/MM/DD HH:mm:ss */
    DATE_TIME_SLASH: string;
    /** YYYY-MM-DDTHH:mm:ssZ */
    DATE_TIME_ZONE: string;
    /** MMMM DD, YYYY */
    US_DATE_TIME: string;
    /** dddd, MMMM DD, YYYY */
    US_DATE_TIME_DAY: string;
    /** ddd, MMM DD, YYYY */
    US_DATE_TIME_DAY_SHORT: string;
    /** MMM DD */
    US_MONTH_NAME_DATE: string;
    /** dddd, MMMN DD */
    US_MONTH_NAME_DATE_DAY: string;
    /** dddd, MMMN DD */
    US_MONTH_NAME_DATE_DAY_SHORT: string;
};
declare class DateUtils {
    /**
     * Parse a string to a Date object.
     * @param value {string}
     * @param format {string} E.g YYYYMMDDHHmmss (see momentjs formats for more details).
     * @param isUTC {boolean?} use UTC timezone.
     * @return {Date} null if the date cannot be parsed.
     */
    static parse(value: string, format: string, isUTC?: boolean): Date;
    /**
     * Parse a Date string in DATE_COMPACT format (YYYYMMDD).
     * @param value {string} E.g 20200314.
     * @param isUTC {boolean?} use UTC timezone.
     * @returns {Date}
     */
    static parseDateCompact(value: string, isUTC?: boolean): Date;
    /**
     * Parse a Date string in DATE_TIME_COMPACT format (YYYYMMDDHHmmss).
     * @param value {string} E.g 20200314131415.
     * @param isUTC {boolean?} use UTC timezone.
     * @returns {Date}
     */
    static parseDateTimeCompact(value: string, isUTC?: boolean): Date;
    /**
     * Parse a Date string in DATE_DOT format (YYYY.MM.DD).
     * @param value {string} E.g 2020.03.14.
     * @param isUTC {boolean?} use UTC timezone.
     * @returns {Date}
     */
    static parseDateDot(value: string, isUTC?: boolean): Date;
    /**
     * Parse a Date string in DATE_TIME_DOT format (YYYY.MM.DD HH:mm:ss).
     * @param value {string} E.g 2020.03.14 13:14:15.
     * @param isUTC {boolean?} use UTC timezone.
     * @returns {Date}
     */
    static parseDateTimeDot(value: any, isUTC?: boolean): Date;
    /**
     * Parse a Date string in DATE_DASH format (YYYY-MM-DD).
     * @param value {string} E.g 2020-03-14.
     * @param isUTC {boolean?} use UTC timezone.
     * @returns {Date}
     */
    static parseDateDash(value: any, isUTC?: boolean): Date;
    /**
     * Parse a Date string in DATE_TIME_DASH format (YYYY-MM-DD HH:mm:ss).
     * @param value {string} E.g 2020-03-14 13:14:15.
     * @param isUTC {boolean?} use UTC timezone.
     * @returns {Date}
     */
    static parseDateTimeDash(value: any, isUTC?: boolean): Date;
    /**
     * Parse a Date string in DATE_SLASH format (YYYY/MM/DD).
     * @param value {string} E.g 2020/03/14.
     * @param isUTC {boolean?} use UTC timezone.
     * @returns {Date}
     */
    static parseDateSlash(value: any, isUTC?: boolean): Date;
    /**
     * Parse a Date string in DATE_TIME_SLASH format (YYYY/MM/DD HH:mm:ss).
     * @param value {string} E.g 2020/03/14 13:14:15.
     * @param isUTC {boolean?} use UTC timezone.
     * @returns {Date}
     */
    static parseDateTimeSlash(value: any, isUTC?: boolean): Date;
    static parseDateTimeWithZone(value: string): Date;
    /**
     * Format a Date object to a string.
     * @param date {Date}
     * @param format {string} E.g YYYYMMDDHHmmss (see momentjs formats for more details).
     * @param isUTC {boolean?} use UTC timezone.
     * @return {string} An empty string if the date cannot be formatted.
     */
    static format(date: Date, format: string, isUTC?: boolean): string;
    /**
     * Format a Date object to a string in DATE_COMPACT format (YYYYMMDD).
     * @param date {Date}
     * @param isUTC {boolean?} use UTC timezone.
     * @return {string}
     */
    static formatDateCompact(date: Date, isUTC?: boolean): string;
    /**
     * Format a Date object to a string in TIME format (HH:mm:ss).
     * @param date {Date}
     * @param isUTC {boolean?} use UTC timezone.
     * @return {string}
     */
    static formatTime(date: Date, isUTC?: boolean): string;
    /**
     * Format a Date object to a string in DATE_TIME_COMPACT format (YYYYMMDDHHmmss).
     * @param date {Date}
     * @param isUTC {boolean?} use UTC timezone.
     * @return {string}
     */
    static formatDateTimeCompact(date: Date, isUTC?: boolean): string;
    /**
     * Format a Date object to a string in DATE_DOT format (YYYY.MM.DD).
     * @param date {Date}
     * @param isUTC {boolean?} use UTC timezone.
     * @return {string}
     */
    static formatDateDot(date: Date, isUTC?: boolean): string;
    /**
     * Format a Date object to a string in DATE_TIME_DOT format (YYYY.MM.DD HH:mm:ss).
     * @param date {Date}
     * @param isUTC {boolean?} use UTC timezone.
     * @return {string}
     */
    static formatDateTimeDot(date: Date, isUTC?: boolean): string;
    /**
     * Format a Date object to a string in DATE_DASH format (YYYY-MM-DD).
     * @param date {Date}
     * @param isUTC {boolean?} use UTC timezone.
     * @return {string}
     */
    static formatDateDash(date: Date, isUTC?: boolean): string;
    /**
     * Format a Date object to a string in DATE_TIME_DASH format (YYYY-MM-DD HH:mm:ss).
     * @param date {Date}
     * @param isUTC {boolean?} use UTC timezone.
     * @return {string}
     */
    static formatDateTimeDash(date: Date, isUTC?: boolean): string;
    /**
     * Format a Date object to a string in DATE_SLASH format (YYYY/MM/DD).
     * @param date {Date}
     * @param isUTC {boolean?} use UTC timezone.
     * @return {string}
     */
    static formatDateSlash(date: Date, isUTC?: boolean): string;
    /**
     * Format a Date object to a string in DATE_TIME_SLASH format (YYYY/MM/DD HH:mm:ss).
     * @param date {Date}
     * @param isUTC {boolean?} use UTC timezone.
     * @return {string}
     */
    static formatDateTimeSlash(date: Date, isUTC?: boolean): string;
    /**
     * Convert a date String to another format.
     * @param value {string}
     * @param fromFormat {string} E.g YYYYMMDDHHmmss
     * @param toFormat {string} E.g YYYY.MM.DD HH:mm:ss
     * @return {string} An empty string if the date cannot be parsed.
     */
    static convert(value: string, fromFormat: string, toFormat: string): string;
    /**
     * Convert a date string to another format.
     * @param value {string} in UTC timezone.
     * @param fromFormat {string} E.g YYYYMMDDHHmmss
     * @param toFormat {string?} E.g YYYY.MM.DD HH:mm:ss. If not specified, it's same as fromFormat.
     * @return {string} a date string in local timezone.
     */
    static convertFromUTC(value: string, fromFormat: string, toFormat?: string): string;
    /**
     * Convert a date string to another format.
     * @param value {string} in local timezone.
     * @param fromFormat {string} E.g YYYYMMDDHHmmss
     * @param toFormat {string} E.g YYYY.MM.DD HH:mm:ss. If not specified, it's same as fromFormat.
     * @return {string} a date string in UTC timezone.
     */
    static convertToUTC(value: string, fromFormat: string, toFormat?: string): string;
    /**
     * Convert a date string from DATE_TIME_COMPACT(YYYYMMDDHHmmss) to DATE_TIME_DASH(YYYY-MM-DD HH:mm:ss).
     * @param value {string}
     * @return {string}
     */
    static convertUTCDateTimeCompactToDateTimeDash(value: string): string;
    /**
     * Convert a date string from DATE_TIME_COMPACT(YYYYMMDDHHmmss) to DATE_TIME_DOT(YYYY.MM.DD HH:mm:ss).
     * @param value {string}
     * @return {string}
     */
    static convertUTCDateTimeCompactToDateTimeDot(value: string): string;
    /**
     * Convert a date string from DATE_TIME_COMPACT(YYYYMMDDHHmmss) to DATE_TIME_SLASH(YYYY/MM/DD HH:mm:ss).
     * @param value {string}
     * @return {string}
     */
    static convertUTCDateTimeCompactToDateTimeSlash(value: string): string;
    /**
     * Convert a date string from DATE_TIME_COMPACT(YYYYMMDDHHmmss) to DATE_DASH(YYYY-MM-DD).
     * @param value {string}
     * @return {string}
     */
    static convertUTCDateTimeCompactToDateDash(value: string): string;
    /**
     * Convert a date string from DATE_TIME_COMPACT(YYYYMMDDHHmmss) to DATE_DOT(YYYY.MM.DD).
     * @param value {string}
     * @return {string}
     */
    static convertUTCDateTimeCompactToDateDot(value: string): string;
    /**
     * Convert a date string from DATE_TIME_COMPACT(YYYYMMDDHHmmss) to DATE_SLASH(YYYY/MM/DD).
     * @param value {string}
     * @return {string}
     */
    static convertUTCDateTimeCompactToDateSlash(value: string): string;
    /**
     * Get the current Date.
     * @return {Date}
     */
    static now(): Date;
    /**
     * Get yesterday Date.
     * @return {Date}
     */
    static yesterday(): Date;
    /**
     * Get start time of a given date: 00:00:00...
     * @param date
     * @return {Date}
     */
    static startOfDay(date: Date): Date;
    /**
     * Get end time of a given date: 23:59:59...
     * @param date
     * @return {Date}
     */
    static endOfDay(date: Date): Date;
    /**
     * Get start date/time of the week of a given date: first day of week, 00:00:00...
     * @param date
     * @return {Date}
     */
    static startOfWeek(date: Date): Date;
    /**
     * Get end date/time of the week of a given date: last day of week, 23:59:59...
     * @param date
     * @return {Date}
     */
    static endOfWeek(date: Date): Date;
    /**
     * Get start date/time of the month of a given date: first day of month, 00:00:00...
     * @param date
     * @return {Date}
     */
    static startOfMonth(date: Date): Date;
    /**
     * Get end date/time of the week of a given date: last day of month, 23:59:59...
     * @param date
     * @return {Date}
     */
    static endOfMonth(date: Date): Date;
    /**
     * Convert a Date or string to fromNow time, e.g '5 seconds ago'.
     * @param dateOrString {Date|string}
     * @param format {string?} e.g YYYYMMDDHHmmss
     * @param isUTC {boolean?} use UTC timezone.
     * @returns {string}
     */
    static fromNow(dateOrString: Date | string, format: string, isUTC?: boolean): string;
    /**
     * Get month short name from Date or string.
     * @param dateOrString {Date|string}
     * @param format {string?} e.g YYYYMMDDHHmmss
     * @returns {string}
     */
    static monthName(dateOrString: Date | string, format?: string): string;
    /**
     * Get month short name from Date or string.
     * @param dateOrString {Date|string}
     * @param format {string?} e.g YYYYMMDDHHmmss
     * @returns {string}
     */
    static monthShortName(dateOrString: Date | string, format?: string): string;
    static padStart(num: number | string, val?: number): string | number;
}
export default DateUtils;
