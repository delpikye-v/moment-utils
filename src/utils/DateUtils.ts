import moment from "moment";

export const FORMATS = {
  YEAR: "YYYY",
  MONTH: "MM",
  MONTH_NAME: "MMM",
  MONTH_FULL_NAME: "MMMM",
  DAY: "DD",
  HOUR: "HH",
  MINUTE: "mm",
  SECONDS: "ss",
  MILISECONDS: "SSS",
  /** YYYYMM */
  YEAR_MONTH_COMPACT: "YYYYMM",
  /** YYYY.MM */
  YEAR_MONTH_DOT: "YYYY.MM",
  /** YYYY-MM */
  YEAR_MONTH_DASH: "YYYY-MM",
  /** YYYY MMM */
  YEAR_MONTH_NAME: "YYYY MMM",
  /** YYYY/MM */
  YEAR_MONTH_SLASH: "YYYY/MM",
  /** YYYYMMDD */
  DATE_COMPACT: "YYYYMMDD",
  /** YYYY.MM.DD */
  DATE_DOT: "YYYY.MM.DD",
  /** YYYY-MM-DD */
  DATE_DASH: "YYYY-MM-DD",
  /** YYYY/MM/DD */
  DATE_SLASH: "YYYY/MM/DD",
  /** HH:mm:ss */
  TIME: "HH:mm:ss",
  /** HH:mm */
  HOUR_MINUTE: "HH:mm",
  /** YYYYMMDDHHmmss */
  DATE_TIME_COMPACT: "YYYYMMDDHHmmss",
  /** YYYY.MM.DD HH:mm:ss */
  DATE_TIME_DOT: "YYYY.MM.DD HH:mm:ss",
  /** YYYY-MM-DD HH:mm:ss */
  DATE_TIME_DASH: "YYYY-MM-DD HH:mm:ss",
  /** YYYY/MM/DD HH:mm:ss */
  DATE_TIME_SLASH: "YYYY/MM/DD HH:mm:ss",
  /** YYYY-MM-DDTHH:mm:ssZ */
  DATE_TIME_ZONE: "YYYY-MM-DDTHH:mm:ssZ",
  /** MMMM DD, YYYY */
  US_DATE_TIME: "MMMM DD, YYYY",
  /** dddd, MMMM DD, YYYY */
  US_DATE_TIME_DAY: "dddd, MMMM DD, YYYY",
  /** ddd, MMM DD, YYYY */
  US_DATE_TIME_DAY_SHORT: "ddd, MMMM DD, YYYY",
  /** MMM DD */
  US_MONTH_NAME_DATE: "MMMM DD",
  /** dddd, MMMN DD */
  US_MONTH_NAME_DATE_DAY: "dddd, MMMN DD",
  /** dddd, MMMN DD */
  US_MONTH_NAME_DATE_DAY_SHORT: "ddd, MMMN DD",
  /// more define or your customize
};

class DateUtils {
  /**
   * Parse a string to a Date object.
   * @param value {string}
   * @param format {string} E.g YYYYMMDDHHmmss (see momentjs formats for more details).
   * @param isUTC {boolean?} use UTC timezone.
   * @return {Date} null if the date cannot be parsed.
   */
  static parse(value: string, format: string, isUTC = false) {
    let m = isUTC ? moment.utc(value, format) : moment(value, format);
    return m.isValid() ? m.toDate() : null;
  }

  /**
   * Parse a Date string in DATE_COMPACT format (YYYYMMDD).
   * @param value {string} E.g 20200314.
   * @param isUTC {boolean?} use UTC timezone.
   * @returns {Date}
   */
  static parseDateCompact(value: string, isUTC = false) {
    return DateUtils.parse(value, FORMATS.DATE_COMPACT, isUTC);
  }

  /**
   * Parse a Date string in DATE_TIME_COMPACT format (YYYYMMDDHHmmss).
   * @param value {string} E.g 20200314131415.
   * @param isUTC {boolean?} use UTC timezone.
   * @returns {Date}
   */
  static parseDateTimeCompact(value: string, isUTC = false) {
    return DateUtils.parse(value, FORMATS.DATE_TIME_COMPACT, isUTC);
  }

  /**
   * Parse a Date string in DATE_DOT format (YYYY.MM.DD).
   * @param value {string} E.g 2020.03.14.
   * @param isUTC {boolean?} use UTC timezone.
   * @returns {Date}
   */
  static parseDateDot(value: string, isUTC = false) {
    return DateUtils.parse(value, FORMATS.DATE_DOT, isUTC);
  }

  /**
   * Parse a Date string in DATE_TIME_DOT format (YYYY.MM.DD HH:mm:ss).
   * @param value {string} E.g 2020.03.14 13:14:15.
   * @param isUTC {boolean?} use UTC timezone.
   * @returns {Date}
   */
  static parseDateTimeDot(value, isUTC = false) {
    return DateUtils.parse(value, FORMATS.DATE_TIME_DOT, isUTC);
  }

  /**
   * Parse a Date string in DATE_DASH format (YYYY-MM-DD).
   * @param value {string} E.g 2020-03-14.
   * @param isUTC {boolean?} use UTC timezone.
   * @returns {Date}
   */
  static parseDateDash(value, isUTC = false) {
    return DateUtils.parse(value, FORMATS.DATE_DASH, isUTC);
  }

  /**
   * Parse a Date string in DATE_TIME_DASH format (YYYY-MM-DD HH:mm:ss).
   * @param value {string} E.g 2020-03-14 13:14:15.
   * @param isUTC {boolean?} use UTC timezone.
   * @returns {Date}
   */
  static parseDateTimeDash(value, isUTC = false) {
    return DateUtils.parse(value, FORMATS.DATE_TIME_DASH, isUTC);
  }

  /**
   * Parse a Date string in DATE_SLASH format (YYYY/MM/DD).
   * @param value {string} E.g 2020/03/14.
   * @param isUTC {boolean?} use UTC timezone.
   * @returns {Date}
   */
  static parseDateSlash(value, isUTC = false) {
    return DateUtils.parse(value, FORMATS.DATE_SLASH, isUTC);
  }

  /**
   * Parse a Date string in DATE_TIME_SLASH format (YYYY/MM/DD HH:mm:ss).
   * @param value {string} E.g 2020/03/14 13:14:15.
   * @param isUTC {boolean?} use UTC timezone.
   * @returns {Date}
   */
  static parseDateTimeSlash(value, isUTC = false) {
    return DateUtils.parse(value, FORMATS.DATE_TIME_SLASH, isUTC);
  }

  static parseDateTimeWithZone(value: string) {
    return DateUtils.parse(value, FORMATS.DATE_TIME_ZONE);
  }

  /**
   * Format a Date object to a string.
   * @param date {Date}
   * @param format {string} E.g YYYYMMDDHHmmss (see momentjs formats for more details).
   * @param isUTC {boolean?} use UTC timezone.
   * @return {string} An empty string if the date cannot be formatted.
   */
  static format(date: Date, format: string, isUTC = false) {
    let m = isUTC ? moment.utc(date) : moment(date);
    return m.isValid() ? m.format(format) : "";
  }

  /**
   * Format a Date object to a string in DATE_COMPACT format (YYYYMMDD).
   * @param date {Date}
   * @param isUTC {boolean?} use UTC timezone.
   * @return {string}
   */
  static formatDateCompact(date: Date, isUTC = false) {
    return DateUtils.format(date, FORMATS.DATE_COMPACT, isUTC);
  }

  /**
   * Format a Date object to a string in TIME format (HH:mm:ss).
   * @param date {Date}
   * @param isUTC {boolean?} use UTC timezone.
   * @return {string}
   */
  static formatTime(date: Date, isUTC = false) {
    return DateUtils.format(date, FORMATS.TIME, isUTC);
  }

  /**
   * Format a Date object to a string in DATE_TIME_COMPACT format (YYYYMMDDHHmmss).
   * @param date {Date}
   * @param isUTC {boolean?} use UTC timezone.
   * @return {string}
   */
  static formatDateTimeCompact(date: Date, isUTC = false) {
    return DateUtils.format(date, FORMATS.DATE_TIME_COMPACT, isUTC);
  }

  /**
   * Format a Date object to a string in DATE_DOT format (YYYY.MM.DD).
   * @param date {Date}
   * @param isUTC {boolean?} use UTC timezone.
   * @return {string}
   */
  static formatDateDot(date: Date, isUTC = false) {
    return DateUtils.format(date, FORMATS.DATE_DOT, isUTC);
  }

  /**
   * Format a Date object to a string in DATE_TIME_DOT format (YYYY.MM.DD HH:mm:ss).
   * @param date {Date}
   * @param isUTC {boolean?} use UTC timezone.
   * @return {string}
   */
  static formatDateTimeDot(date: Date, isUTC = false) {
    return DateUtils.format(date, FORMATS.DATE_TIME_DOT, isUTC);
  }

  /**
   * Format a Date object to a string in DATE_DASH format (YYYY-MM-DD).
   * @param date {Date}
   * @param isUTC {boolean?} use UTC timezone.
   * @return {string}
   */
  static formatDateDash(date: Date, isUTC = false) {
    return DateUtils.format(date, FORMATS.DATE_DASH, isUTC);
  }

  /**
   * Format a Date object to a string in DATE_TIME_DASH format (YYYY-MM-DD HH:mm:ss).
   * @param date {Date}
   * @param isUTC {boolean?} use UTC timezone.
   * @return {string}
   */
  static formatDateTimeDash(date: Date, isUTC = false) {
    return DateUtils.format(date, FORMATS.DATE_TIME_DASH, isUTC);
  }

  /**
   * Format a Date object to a string in DATE_SLASH format (YYYY/MM/DD).
   * @param date {Date}
   * @param isUTC {boolean?} use UTC timezone.
   * @return {string}
   */
  static formatDateSlash(date: Date, isUTC = false) {
    return DateUtils.format(date, FORMATS.DATE_SLASH, isUTC);
  }

  /**
   * Format a Date object to a string in DATE_TIME_SLASH format (YYYY/MM/DD HH:mm:ss).
   * @param date {Date}
   * @param isUTC {boolean?} use UTC timezone.
   * @return {string}
   */
  static formatDateTimeSlash(date: Date, isUTC = false) {
    return DateUtils.format(date, FORMATS.DATE_TIME_SLASH, isUTC);
  }

  /**
   * Convert a date String to another format.
   * @param value {string}
   * @param fromFormat {string} E.g YYYYMMDDHHmmss
   * @param toFormat {string} E.g YYYY.MM.DD HH:mm:ss
   * @return {string} An empty string if the date cannot be parsed.
   */
  static convert(value: string, fromFormat: string, toFormat: string) {
    let m = moment(value, fromFormat);
    if (!toFormat) {
      toFormat = fromFormat;
    }
    return m.isValid() ? m.format(toFormat) : "";
  }

  /**
   * Convert a date string to another format.
   * @param value {string} in UTC timezone.
   * @param fromFormat {string} E.g YYYYMMDDHHmmss
   * @param toFormat {string?} E.g YYYY.MM.DD HH:mm:ss. If not specified, it's same as fromFormat.
   * @return {string} a date string in local timezone.
   */
  static convertFromUTC(
    value: string,
    fromFormat: string,
    toFormat = fromFormat
  ) {
    let m = moment.utc(value, fromFormat);
    return m.isValid() ? m.local().format(toFormat) : "";
  }

  /**
   * Convert a date string to another format.
   * @param value {string} in local timezone.
   * @param fromFormat {string} E.g YYYYMMDDHHmmss
   * @param toFormat {string} E.g YYYY.MM.DD HH:mm:ss. If not specified, it's same as fromFormat.
   * @return {string} a date string in UTC timezone.
   */
  static convertToUTC(
    value: string,
    fromFormat: string,
    toFormat = fromFormat
  ) {
    let m = moment(value, fromFormat);
    return m.isValid() ? m.utc().format(toFormat) : "";
  }

  /**
   * Convert a date string from DATE_TIME_COMPACT(YYYYMMDDHHmmss) to DATE_TIME_DASH(YYYY-MM-DD HH:mm:ss).
   * @param value {string}
   * @return {string}
   */
  static convertUTCDateTimeCompactToDateTimeDash(value: string) {
    return DateUtils.convertFromUTC(
      value,
      FORMATS.DATE_TIME_COMPACT,
      FORMATS.DATE_TIME_DASH
    );
  }

  /**
   * Convert a date string from DATE_TIME_COMPACT(YYYYMMDDHHmmss) to DATE_TIME_DOT(YYYY.MM.DD HH:mm:ss).
   * @param value {string}
   * @return {string}
   */
  static convertUTCDateTimeCompactToDateTimeDot(value: string) {
    return DateUtils.convertFromUTC(
      value,
      FORMATS.DATE_TIME_COMPACT,
      FORMATS.DATE_TIME_DOT
    );
  }

  /**
   * Convert a date string from DATE_TIME_COMPACT(YYYYMMDDHHmmss) to DATE_TIME_SLASH(YYYY/MM/DD HH:mm:ss).
   * @param value {string}
   * @return {string}
   */
  static convertUTCDateTimeCompactToDateTimeSlash(value: string) {
    return DateUtils.convertFromUTC(
      value,
      FORMATS.DATE_TIME_COMPACT,
      FORMATS.DATE_TIME_SLASH
    );
  }

  /**
   * Convert a date string from DATE_TIME_COMPACT(YYYYMMDDHHmmss) to DATE_DASH(YYYY-MM-DD).
   * @param value {string}
   * @return {string}
   */
  static convertUTCDateTimeCompactToDateDash(value: string) {
    return DateUtils.convertFromUTC(
      value,
      FORMATS.DATE_TIME_COMPACT,
      FORMATS.DATE_DASH
    );
  }

  /**
   * Convert a date string from DATE_TIME_COMPACT(YYYYMMDDHHmmss) to DATE_DOT(YYYY.MM.DD).
   * @param value {string}
   * @return {string}
   */
  static convertUTCDateTimeCompactToDateDot(value: string) {
    return DateUtils.convertFromUTC(
      value,
      FORMATS.DATE_TIME_COMPACT,
      FORMATS.DATE_DOT
    );
  }

  /**
   * Convert a date string from DATE_TIME_COMPACT(YYYYMMDDHHmmss) to DATE_SLASH(YYYY/MM/DD).
   * @param value {string}
   * @return {string}
   */
  static convertUTCDateTimeCompactToDateSlash(value: string) {
    return DateUtils.convert(
      value,
      FORMATS.DATE_TIME_COMPACT,
      FORMATS.DATE_SLASH
    );
  }

  /**
   * Get the current Date.
   * @return {Date}
   */
  static now() {
    return new Date();
  }

  /**
   * Get yesterday Date.
   * @return {Date}
   */
  static yesterday() {
    return moment().subtract(1, "d").toDate();
  }

  /**
   * Get start time of a given date: 00:00:00...
   * @param date
   * @return {Date}
   */
  static startOfDay(date: Date) {
    return moment(date).startOf("day").toDate();
  }

  /**
   * Get end time of a given date: 23:59:59...
   * @param date
   * @return {Date}
   */
  static endOfDay(date: Date) {
    return moment(date).endOf("day").toDate();
  }

  /**
   * Get start date/time of the week of a given date: first day of week, 00:00:00...
   * @param date
   * @return {Date}
   */
  static startOfWeek(date: Date) {
    return moment(date).startOf("week").toDate();
  }

  /**
   * Get end date/time of the week of a given date: last day of week, 23:59:59...
   * @param date
   * @return {Date}
   */
  static endOfWeek(date: Date) {
    return moment(date).endOf("week").toDate();
  }

  /**
   * Get start date/time of the month of a given date: first day of month, 00:00:00...
   * @param date
   * @return {Date}
   */
  static startOfMonth(date: Date) {
    return moment(date).startOf("month").toDate();
  }

  /**
   * Get end date/time of the week of a given date: last day of month, 23:59:59...
   * @param date
   * @return {Date}
   */
  static endOfMonth(date: Date) {
    return moment(date).endOf("month").toDate();
  }

  /**
   * Convert a Date or string to fromNow time, e.g '5 seconds ago'.
   * @param dateOrString {Date|string}
   * @param format {string?} e.g YYYYMMDDHHmmss
   * @param isUTC {boolean?} use UTC timezone.
   * @returns {string}
   */
  static fromNow(dateOrString: Date | string, format: string, isUTC = false) {
    if (typeof dateOrString === "string") {
      let parse = DateUtils.parse(dateOrString, format, isUTC);
      return parse ? moment(parse).fromNow() : null;
    }
    return moment(dateOrString).fromNow();
  }

  /**
   * Get month short name from Date or string.
   * @param dateOrString {Date|string}
   * @param format {string?} e.g YYYYMMDDHHmmss
   * @returns {string}
   */
  static monthName(dateOrString: Date | string, format?: string) {
    if (typeof dateOrString === "string") {
      return DateUtils.convert(dateOrString, format, FORMATS.MONTH_FULL_NAME);
    }
    return DateUtils.format(moment(dateOrString).toDate(), FORMATS.MONTH_FULL_NAME);
  }

  /**
   * Get month short name from Date or string.
   * @param dateOrString {Date|string}
   * @param format {string?} e.g YYYYMMDDHHmmss
   * @returns {string}
   */
   static monthShortName(dateOrString: Date | string, format?: string) {
    if (typeof dateOrString === "string") {
      return DateUtils.convert(dateOrString, format, FORMATS.MONTH_NAME);
    }
    return DateUtils.format(moment(dateOrString).toDate(), FORMATS.MONTH_NAME);
  }

  static padStart(num: number | string, val = 2) {
    const numStr = `${num}`;
    if (numStr.length >= val) {
      return num;
    }
    return `0000${numStr}`.slice(-val);
  }
}

export default DateUtils;
