
function AppForm() {
    return (
        <div className="bg-black">
            <div className="text-white flex flex-col justify-center items-center mb-6 space-y-6">
                <h2 className="text-2xl mt-2 underline underline-offset-1 ">Sign Up</h2>
                <p>
                    Subscribe and stay informed!
                </p>
            </div>
            <div className=" flex flex-col justify-center items-center mb-6 space-y-6">
                <form action="">
                    <div>
                        <label>
                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                                Nome
                            </span>
                            <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                                Email
                            </span>
                            <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                        </label>
                    </div>
                    <div>
                        <a href="#">Read the terms.</a>
                        <div>
                            <input type="checkbox" className='bg-white' />
                            <label className='text-white pl-2'>I agree with the terms</label>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-6">
                        <button className='bg-green-200 text-black px-8 py-2 rounded-lg mt-5'>Submit</button>
                    </div>
                </form>
            </div>

            <footer class="bg-pink-200 text-gray-300 py-8">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col md:flex-row items-center justify-between">
                       
                        <div class="text-lg font-semibold mb-4 md:mb-0">
                            <a href="#" class="text-black">Ercilia Carvalho</a>
                        </div>

                        
                        <div class="flex space-x-6">
                            <a href="https://github.com/seunome" target="_blank" rel="noopener noreferrer" class="text-black">
                                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.931 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.628-5.48 5.922.43.372.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </a>
                            <a href="https://linkedin.com/in/seunome" target="_blank" rel="noopener noreferrer" class="text-black">
                                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.3h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.15 1.46-2.15 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.6z" />
                                </svg>
                            </a>
                            <a href="mailto:seuemail@exemplo.com" class="text-black">
                                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 13.065l-11.99-7.065v14h24v-14l-12.01 7.065zm0-2.13l11.99-7.065h-24l12.01 7.065z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    
                    <div class="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
                        © 2025 ErciliaCarvalhoDev. Todos os direitos reservados.
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default AppForm;
