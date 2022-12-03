import { Geolocation } from "@ionic-native/geolocation";

const getLocation = async () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ showError: false });
  const [position, setPosition] = useState();

  try {
    const geoPosition = await Geolocation.getCurrentPosition();
    setPosition(geoPosition);
    setLoading(false);
    return {
      loading,
      position,
    };
  } catch (e) {
    setError({ showError: true, message: e.message });
    setLoading(false);
    return {
      loading,
      error,
    };
  }
};

export default getLocation;
