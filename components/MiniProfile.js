

export default function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img className="h-16 rounded-full border p-[2px]" src="https://media.licdn.com/dms/image/C5603AQGMJtZjoVzOlg/profile-displayphoto-shrink_400_400/0/1663685545626?e=1686182400&v=beta&t=7KrCDCxfCNAwWC_-JyT7w0YtipK7qdCbNu85zByoeFw" alt="user-image" />
            <div className="flex-1 ml-4">
                <h2 className="font-bold">furious_hearted_24</h2>
                <h3 className="text-sm text-gray-400">Welcome to instagram</h3>

            </div>
            <button className="font-semibold text-blue-400 text-sm">Sign out</button>
        </div>
    )

}
