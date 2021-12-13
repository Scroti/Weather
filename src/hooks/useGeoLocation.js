import  { useState, useEffect } from 'react'

export const useGeoLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" },
    });
    const onSucces = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };
    const onError = error => {
        setLocation({
            loaded: true,
            error,
        });
    };
    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported"
            });
        };
        navigator.geolocation.getCurrentPosition(onSucces, onError);

    }, [])
    return location;
};
export default useGeoLocation
