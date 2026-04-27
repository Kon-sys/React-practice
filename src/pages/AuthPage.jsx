import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../widgets/Header/Header";
import AuthForm from "../widgets/AuthForm/AuthForm";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/model/authSlice.js";
import { clearReserved } from "../entities/reserved/model/reservedSlice.js";
import { clearFavorites } from "../entities/favorite/model/favoritesSlice.js";
import "./styles/AuthPage.css";

function AuthPage() {

    const user = useSelector((state) => state.auth.user);
    const reservedCount = useSelector((state) => state.reserved.items.length);
    const favoritesCount = useSelector((state) => state.favorites.items.length);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleLogout() {
        dispatch(logout());
        dispatch(clearReserved());
        dispatch(clearFavorites());
        navigate("/login");
    }

    return (
        <>
            <Header />

            <main className="auth-page">
                {user ? (
                    <section className="profile-card">
                        <img className="profile-card__avatar" src={user.image} alt={user.username} />

                        <div className="profile-card__info">
                            <h1 className="profile-card__name">
                                {user.firstName ? `${user.firstName} ${user.lastName}` : user.username}
                            </h1>

                            <p className="profile-card__email">{user.email}</p>

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

                        <button
                            className="profile-card__logout"
                            type="button"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </section>
                ) : (
                    <AuthForm />
                )}
            </main>
        </>
    );
}

export default AuthPage;