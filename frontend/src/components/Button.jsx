export function Button({text, onClick}) {
    return <div>
        <button onClick={onClick}  type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-md px-5 py-2.5 me-2 mb-2 w-full mt-4">{text}</button>
    </div>
}