import SiteBuffet from "../../../assets/buffet.png"

function AppBuffet() {
    return (
        <div class="m-8">
            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                <div className='md:flex'>
                    <div className='p-8'>
                        <div className='uppercase tracking-wide text-sm font-semibold'>
                                          Site Buffet
                        </div>
                        <a href='https://github.com/ErciliaMaria/JQuery-To-Do-List'>Github</a>
                        <p className='mt-2 text-slate-500'>
                            Programa de cadastro de Tarejas, com listagem e controle das tarefas feitas.
                                Html/CSS/Jquery.
                        </p>
                    </div>
                    <div className='md:shrink-0 p-5 p-x-3'>
                        <img src={SiteBuffet} alt="Project Site Buffet" width={150} height={150}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AppBuffet