'use client';

import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Schedule() {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className="flex flex-col items-center m-10">
            Schedule
            <Date>{value}</Date>
        </div>
    );
}
