
const SuspenseFallbackCompo = ({ routeLocation }) => {
    return (
        <div className="py-10 text-center text-gray-400">
            <p>Loading {routeLocation}...</p>
        </div>
    )
}
export default SuspenseFallbackCompo