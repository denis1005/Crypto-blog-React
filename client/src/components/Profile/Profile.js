import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom'


export const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <section className="u-clearfix u-section-1" id="sec-1755">
            <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
                    <div className="u-layout">
                        <div className="u-layout-row">
                            <div className="u-align-center u-container-style u-layout-cell u-left-cell u-size-23 u-layout-cell-1">
                                <div className="u-container-layout u-valign-middle u-container-layout-1">
                                     <img
                                     src={user.imgUrl} 
                                     className="rounded float-left" 
                                     alt="..." 
                                     />
                                </div>
                            </div>
                            <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-37 u-layout-cell-2">
                                <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-valign-top-xs u-container-layout-2">
                                    <h2 className="u-text u-text-default u-text-1"> Profile </h2>
                                    <p className="u-text u-text-2">
                                      Name: {user.username} {user.name}
                                    </p>
                                    <p className="u-text u-text-2">
                                      Email: {user.email}
                                    </p>
                                    <Link to="/collection" className="u-btn u-button-style u-btn-1">
                                        Collection
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}