/**
 * Baidu Map GL Component
 * 
 * React map component based on Baidu Map WebGL API, supports custom markers, zoom levels and other configurations
 * 
 * Usage example:
 * <Map
 *   ak="OeTpXHgdUrRT2pPyAPRL7pog6GlMlQzl" // Baidu Map API key
 *   option={{
 *       address: "Liugong Island Scenic Area, Huancui District, Weihai City, Shandong Province",
 *       lat: 37.51029432858647, // Latitude
 *       lng: 122.19726116385918, // Longitude
 *       zoom: 12, // Zoom level
 *   }}
 *   className="w-[600px] h-[300px] rounded-lg" // Container styles
 * >
 *   <MapTitle className="text-md"/> // Optional title component
 * </Map>
 */

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
} from "react";

/** Map context properties */
type MapContextProps = {
// Address
address?: string; /** Map marker address */
};

const MapContext = createContext<MapContextProps | null>(null);

/** Default map configuration */
const defaultOption = {
zoom: 15, /** Default zoom level */
lng: 116.404, /** Default longitude (Beijing Tiananmen Square) */
lat: 39.915, /** Default latitude (Beijing Tiananmen Square) */
address: "Chang'an Street, Dongcheng District, Beijing", /** Default address */
};

const loadScript = (src: string) => {
return new Promise<void>((ok, fail) => {
    const script = document.createElement("script");
    script.onerror = (reason) => fail(reason);

    if (~src.indexOf("{{callback}}")) {
    const callbackFn = `loadscriptcallback_${(+new Date()).toString(36)}`;
    (window as any)[callbackFn] = () => {
        ok();
        delete (window as any)[callbackFn];
    };
    src = src.replace("{{callback}}", callbackFn);
    } else {
    script.onload = () => ok();
    }

    script.src = src;
    document.head.appendChild(script);
});
};

const useMap = () => {
const context = useContext(MapContext);

if (!context) {
    return {};
}

return context;
};

/**
 * Map title component
 * @param {string} className - Custom class name
 */
const MapTitle = ({ className }: React.ComponentProps<"div">) => {
const { address } = useMap();
if (!address) return null;
return <span className={`text-lg font-bold ${className}`}>{address}</span>;
};

// Record Baidu Map SDK loading status
let BMapGLLoadingPromise: Promise<void> | null = null;

/**
 * Baidu Map main component
 * @param {string} ak - Baidu Map API key, defaults to 'OeTpXHgdUrRT2pPyAPRL7pog6GlMlQzl'
 * @param {object} option - Map configuration options
 * @param {number} option.zoom - Map zoom level
 * @param {number} option.lng - Longitude coordinate
 * @param {number} option.lat - Latitude coordinate
 * @param {string} option.address - Marker address
 * @param {string} className - Container custom class name
 * @param {ReactNode} children - Child components, usually MapTitle
 */
const Map = ({
ak,
option,
className,
children,
...props
}: React.ComponentProps<"div"> & {
ak: string;
option?: {
    zoom: number;
    lng: number;
    lat: number;
    address: string;
};
}) => {
const mapRef = useRef<HTMLDivElement>(null);
const currentRef = useRef(null);

const _options = useMemo(() => {
    return { ...defaultOption, ...option };
}, [option]);

const contextValue = useMemo<MapContextProps>(
    () => ({
    address: option?.address,
    }),
    [option?.address]
);

const initMap = useCallback(() => {
    if (!mapRef.current) return;

    let map = currentRef.current;

    if (!map) {
    // Create map instance
    map = new (window as any).BMapGL.Map(mapRef.current);
    currentRef.current = map;
    }

    // Clear overlays
    map.clearOverlays();

    // Set map center coordinates and map level
    const center = new (window as any).BMapGL.Point(
    _options?.lng,
    _options?.lat
    );

    map.centerAndZoom(center, _options?.zoom);

    // Add marker
    const marker = new (window as any).BMapGL.Marker(center);
    map.addOverlay(marker);
}, [_options]);

useEffect(() => {
    // Check if Baidu Map API is loaded
    if ((window as any).BMapGL) {
    initMap();
    } else if (BMapGLLoadingPromise) {
    BMapGLLoadingPromise.then(initMap).then(() => {
        BMapGLLoadingPromise = null;
    });
    } else {
    BMapGLLoadingPromise = loadScript(
        `//api.map.baidu.com/api?type=webgl&v=1.0&ak=${ak}&callback={{callback}}`
    );

    BMapGLLoadingPromise.then(initMap).then(() => {
        BMapGLLoadingPromise = null;
    });
    }
}, [ak, initMap]);

useEffect(() => {
    return () => {
    if (currentRef.current) {
        currentRef.current = null;
    }
    };
}, []);

return (
    <MapContext.Provider value={contextValue}>
    <div
        ref={mapRef}
        className={`w-full aspect-[16/9] ${className}`}
        {...props}
    ></div>
    {children}
    </MapContext.Provider>
);
};

export { Map, MapTitle };