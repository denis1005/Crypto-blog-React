import { useContext } from "react";
import { Outlet, useParams, Navigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import { MemeContext } from "../../context/Memecontext"; 

export const MemeOwner = ({ children }) => {
    const { selectMeme } = useContext(MemeContext);
    const { user, isAuthenticated } = useContext(AuthContext);
    const {memeId } = useParams();

    const currentMeme = selectMeme(memeId);

    if (isAuthenticated && user._id !== currentMeme._ownerId) {
        return <Navigate to='/' replace />
    }

    return children ? children : <Outlet />;
};

