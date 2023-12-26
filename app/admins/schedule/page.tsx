'use client';

import { format } from 'path';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './Schedule.css';
import ScheduleDay from '@/app/_components/ScheduleDay';

export default function Schedule() {
    const [value, onChange] = useState(new Date());
    const monday = getMonday({ date: value });
    return (
        <div className="flex flex-col justify-center items-center m-10 ">
            <div className="flex justify-center">Schedule</div>
            <div className="flex justify-around items-stretch">
                <div className="day-format">Teacher List</div>
                <ScheduleDay />
                <ScheduleDay />
                <ScheduleDay />
                <ScheduleDay />
                <ScheduleDay />
                <ScheduleDay />
            </div>
        </div>
    );
}

function getMonday({ date }: { date: Date }) {
    var day = date.getDay() || 7;
    if (day !== 1) {
        date.setHours(-24 * (day - 1));
    }
    console.log(date);
    return date;
}
