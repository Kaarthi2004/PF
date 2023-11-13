
const GitCard= () => {
    return (
<> 
<br></br>
    <div className="max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="https://github.com/Kaarthi2004">
            <img className="rounded-t-lg" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
        </a>
        <div className="p-5">
            <a href="https://github.com/Kaarthi2004">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GITHUB ACCOUNT</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">I Code together, grow faster, shine brighter.</p>
            <a href="https://github.com/Kaarthi2004" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                visit profile
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
</>
    );
}
export default GitCard;