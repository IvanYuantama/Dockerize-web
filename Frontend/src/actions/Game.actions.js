import axios from "axios";

const baseApiResponse = (data, isSuccess) => {
    return {
        success: isSuccess,
        data: data || null,
    };
};

export const getAllReview = async () => {
    try{
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/game/allGames`
        );

        console.log("RESPONSE FROM BACKEND");
        console.log(response.data);
        return baseApiResponse(response.data, true);

    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};

export const createReview = async (formData) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/game/createReview`,
            formData
        );
        console.log("RESPONSE FROM BACKEND");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};

export const deleteReview = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/game/delete/${id}`, {
            method: 'DELETE'
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const updateReview = async (id, formData) => {
    try{
        const response = await axios.put(
            `${import.meta.env.VITE_API_URL}/game/update/${id}`, formData
        );
        console.log("RESPONSE FROM BACKEND");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
}
