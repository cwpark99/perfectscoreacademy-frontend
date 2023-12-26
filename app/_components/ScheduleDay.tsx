import { useState } from 'react';

export default function ScheduleDay() {
    const [value, onChange] = useState(new Date());
    const monday = getMonday({ date: value });
    return <div className="day-format">{monday.toDateString()}</div>;
}

function getMonday({ date }: { date: Date }) {
    var day = date.getDay() || 7;
    if (day !== 1) {
        date.setHours(-24 * (day - 1));
    }
    console.log(date);
    return date;
}
