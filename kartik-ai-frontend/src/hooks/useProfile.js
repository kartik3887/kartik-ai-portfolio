import { useEffect, useState } from "react";
import { getAdminProfile } from "@/api/profile.api";

const useProfile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProfile = async () => {
        try {
            setLoading(true);

            const response = await getAdminProfile();
            const profile = response.data
            console.log(profile)

            setProfile(profile);
        } catch (err) {
            console.error(err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return {
        profile,
        loading,
        error,
        refetch: fetchProfile,
    };
};

export default useProfile;