export class FormatUtils {
    public static getFormatTimeHHMM(date: Date): string {
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        };
        return (new Intl.DateTimeFormat('de-DE', options).format(date));
    }

    public static getFormatDayAndDate(date: Date): string {
        const options = {
            weekday: 'long',
            day: '2-digit',
            month: '2-digit',
        };
        return (new Intl.DateTimeFormat('de-DE', options).format(date));
    }

    public static getFormatWeekday(date: Date): string {
        const options = {
            weekday: 'long',
        };
        return (new Intl.DateTimeFormat('de-DE', options).format(date));
    }
}