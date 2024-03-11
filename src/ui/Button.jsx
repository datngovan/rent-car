function button({primary,content}) {
    return (
        <button className={primary ? `bg-primary-color text-white py-4 px-8 rounded-lg` : `bg-white text-text-secondary py-1 px-8 border rounded-lg`}>{content}</button>
    )
}

export default button
