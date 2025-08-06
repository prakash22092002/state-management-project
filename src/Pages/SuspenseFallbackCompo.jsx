
const SuspenseFallbackCompo = ({ routeLocation }) => {
    return (
        <div className="p-5 text-center">
            <p>Loading {routeLocation}...</p>
        </div>
    )
}
export default SuspenseFallbackCompo