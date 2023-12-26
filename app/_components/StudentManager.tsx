import './StudentManager.css';

export default function StudentManager() {
    return (
        <div className="student-manager">
            <h1>Student Manager</h1>
            <div className="flex justify-center items-center">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="header">Grade</th>
                            <th className="header">Name</th>
                            <th className="header">Teacher(s)</th>
                            <th className="header">Schedule</th>
                            <th className="header">Hours Remaining</th>
                            <th className="header">Balance</th>
                            <th className="header">Focus</th>
                        </tr>
                    </thead>
                    <tbody className="body">
                        <td className="body">asdfasdf</td>
                        <td className="body">asdfasdf</td>
                        <td className="body">asdfasdf</td>
                        <td className="body">asdfasdf</td>
                        <td className="body">asdfasdf</td>
                        <td className="body">asdfasdf</td>
                        <td className="body">asdfasdf</td>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
