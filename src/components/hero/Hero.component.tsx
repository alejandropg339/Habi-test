import { useNavigate } from "react-router-dom"

export const HeroComponent = () => {
    const navigate = useNavigate();
    return (
        <section className="hero">
            <div className="hero-inner">
                <h1>Habi Frontend</h1>
                <h2 className="px-1">Si necesitas vender tu vivienda en 10 días habi te lo compra.</h2>
                <a href="#start-sale" className="hero-btn" onClick={()=> navigate('/user-data')}>Vender</a>
            </div>
        </section>)
}
