

const Header = ({children}) => {
    return (
        <h1 className="bg-logo  font-logo w-full font-bold text-xl md:text-2xl flex items-center justify-center rounded-md h-10 flex-shrink-0"> 
            {children}

        </h1>
    )
}


export default Header