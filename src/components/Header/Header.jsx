import logo from '../../assets/img/spotify-logo.png'

const Header = () => {
    return (
        <header>
            <div className="w-full flex fixed bg-black md: px-20 py-4">
                <div className="flex container items-center mx-auto">
                    <div className=''>
                        <a href="#">
                            <img src={logo} alt="Logo do Spotify" className='w-20 md:w-125px' />
                        </a>
                    </div>
                    <div className='flex justify-end flex-1 md:hidden text-white text-3xl'>
                        <i className="fa fa-bars"></i>
                    </div>
                    <div className='items-end flex-1 text-white font-bold hidden md:flex'>
                        <nav className='flex-1'>
                            <ul className='flex justify-end flex-1'>
                                <li className='px-4'><a href="#" className='hover:text-hoverBtn text-sm'>Premium</a></li>
                                <li className='px-4'><a href="#" className='hover:text-hoverBtn text-sm'>Suporte</a></li>
                                <li className='px-4'><a href="#" className='hover:text-hoverBtn text-sm'>Baixar</a></li>
                                <li className='px-4'><span className='border-r border-white'></span></li>
                                <li className='px-4'><a href="#" className='hover:text-hoverBtn text-sm'>Inscrever-se</a></li>
                                <li className='px-4'><a href="#" className='hover:text-hoverBtn text-sm'>Login</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header