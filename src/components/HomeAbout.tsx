/* eslint-disable jsx-a11y/anchor-is-valid */
const HomeAbout = () => {
    return (
        <div id="target-element" className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">ABOUT</h1><hr></hr>
            <h1 className="text-gray-900 dark:text-white text-2xl md:text-5xl font-extrabold mb-2"> Bridging Vision with Execution: A Showcase of My Engineering and Design Pursuits</h1>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Technology Enthusuast with a passion for Cyber Security and Solving Real Time Problems. Proficient in Front-end React JS scripting & my core domain knowledge in UI/UX. Fascinated by AI and Data Science, eager to expand my knowledge and apply cutting-edge technologies to solve complex problems.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            <div  className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Start with Flowbite Design System</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
                <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Best react libraries around the web</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers. </p>
                <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    );
}
export default HomeAbout;