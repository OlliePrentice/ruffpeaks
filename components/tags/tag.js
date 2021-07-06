export default function Tag({name}) {
    return (
        <div className="inline-block text-xxs font-medium uppercase text-gray-500 border border-gray-500 px-2 py-1 rounded mr-2 mb-4">
            <span>{name}</span>
        </div>
    )
}