export const ACTION_SET_PROFILE = 'ACTION_SET_PROFILE';

export const actionSetProfile = (payload) => {
    return {
        type: ACTION_SET_PROFILE,
        payload
    };
};

export const getCurrentProfile = () => {
    return localStorage.getItem('profile');
}