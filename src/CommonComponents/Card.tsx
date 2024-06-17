export const Card = (props: any) => {
    return (
        <div className="block w-40 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p className="font-normal text-sm text-gray-700 dark:text-gray-700">{props?.text}</p>
        </div>
    )
}