export default function NavBar({children}) {
    return(
    <button className="cs-button" data-filter="one">
        {children}
    </button>
    );
}