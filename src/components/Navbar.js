import Cartwidget from './CartWidget.js';
const Navbar = () => {
    return <header className="header">
    <img src="../img/Logo Roots.jpeg" className="header__logo" alt="Logo Marca" />
    <div className="header__nav" ><h3>Hombre</h3><h3>Mujer</h3><h3>Niños</h3></div>
    <Cartwidget />
    </header>
}
export default Navbar;