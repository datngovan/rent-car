function Icon({size, children}) {
    const IconSizes = {
        small: "size-16",
        medium: "size-28"
    }
    return (
        <div className={`${IconSizes[size]} bg-primary-color-100 grid place-content-center rounded-lg`}>
            {children}
        </div>
    )
}

export default Icon
