import './AdminsMenu.css';
import Link from 'next/link';

export default function AdminsMenu() {
    return (
        <div className="flex flex-col items-center m-5 h-dvh">
            <h1 className="m-10 text-3xl">Home</h1>
            <div className="admins-menu flex flex-col items-center justify-start m-5 p-5">
                <Link
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    href={'/admins/schedule'}
                >
                    <h2 className={`m-3 text-1xl font-semibold`}>
                        Class Schedule{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                </Link>
                <Link
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    href={'/admins/studentmanager'}
                >
                    <h2 className={`m-3 text-1xl font-semibold`}>
                        Manage Students{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                </Link>
                <Link
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    href={'/admins/teachermanager'}
                >
                    <h2 className={`m-3 text-1xl font-semibold`}>
                        Manage Teachers{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                </Link>
            </div>
        </div>
    );
}
