export function formatDateTime(date: Date) {
    return date.toLocaleString('en-US', {
        dateStyle: 'long',
        timeStyle: 'short',
        hour12: false
    })
}
