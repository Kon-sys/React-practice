const React = require("react");
const { useSelector } = require("react-redux");

const Header = require("../widgets/Header/Header").default;

require("./styles/AuthPage.css");

function AuthPage() {

    const reservedCount = useSelector((state) => state.reserved.items.length);
    const favoritesCount = useSelector((state) => state.favorites.items.length);

    return (
        <>
            <Header />

            <main className="profile-page">
                <section className="profile-card">
                    <div className="profile-card__avatar">I</div>

                    <div className="profile-card__info">
                        <h1 className="profile-card__name">Ilya Likhtar</h1>
                        <p className="profile-card__email">likhtarilya14112005@gmail.com</p>

                        <div className="profile-card__stats">
                            <div>
                                <span>Reserved</span>
                                <strong>{reservedCount}</strong>
                            </div>

                            <div>
                                <span>Favorites</span>
                                <strong>{favoritesCount}</strong>
                            </div>

                            <div>
                                <span>Purchased</span>
                                <strong>0</strong>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

module.exports = AuthPage;
module.exports.default = AuthPage;