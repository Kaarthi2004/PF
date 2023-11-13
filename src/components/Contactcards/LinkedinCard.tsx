const LinkedinCard = () =>{
    return(
<>
<br></br>
    <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="https://www.linkedin.com/in/ranga-kaarthi-3a719a244/">
            <img className="rounded-t-lg" src="https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="" />
        </a>
        <div className="p-5 bg-blue-200">
            <a href="https://www.linkedin.com/in/ranga-kaarthi-3a719a244/">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">LINKEDIN ACCOUNT</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Expand my professional network. Excel in career.</p>
            <a href="https://www.linkedin.com/in/ranga-kaarthi-3a719a244/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
export default LinkedinCard;